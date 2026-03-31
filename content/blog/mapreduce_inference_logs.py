"""
MapReduce-style aggregation of token counts from AI inference logs.
Run: python mapreduce_inference_logs.py
"""
import json
import os
import random
from collections import defaultdict


def map_inference_log(log_line: str):
    """Parse a log line and emit (model_id, token_count)."""
    line = log_line.strip()
    if not line:
        return
    try:
        record = json.loads(line)
        model_id = record.get("model_id")
        token_count = record.get("token_count", 0)
        if model_id is not None:
            yield (model_id, token_count)
    except json.JSONDecodeError:
        pass


def shuffle(mapped_pairs):
    """Group (key, value) pairs by key."""
    groups = defaultdict(list)
    for key, value in mapped_pairs:
        groups[key].append(value)
    return groups.items()


def reduce_token_counts(key, values):
    """Sum token counts for one model_id."""
    total_tokens = sum(values)
    num_requests = len(values)
    return key, {"total_tokens": total_tokens, "num_requests": num_requests}


def run_mapreduce(log_paths, output_path):
    """Run map-reduce over inference log files and write results."""
    mapped = []
    for path in log_paths:
        if not os.path.isfile(path):
            continue
        with open(path, "r") as f:
            for line in f:
                for pair in map_inference_log(line):
                    mapped.append(pair)

    grouped = shuffle(mapped)
    results = []
    for key, values in grouped:
        _, row = reduce_token_counts(key, values)
        results.append({"model_id": key, **row})

    with open(output_path, "w") as f:
        json.dump(results, f, indent=2)

    return results


def generate_sample_logs(path, num_lines=100):
    """Write sample inference logs for testing."""
    models = ["gpt-4", "claude-3", "llama-3"]
    with open(path, "w") as f:
        for _ in range(num_lines):
            model = random.choice(models)
            tokens = random.randint(50, 300)
            record = {
                "model_id": model,
                "token_count": tokens,
                "timestamp": "2025-02-20T10:00:00Z",
            }
            f.write(json.dumps(record) + "\n")


if __name__ == "__main__":
    os.makedirs("data", exist_ok=True)
    log_dir = "data/inference_logs"
    os.makedirs(log_dir, exist_ok=True)

    for i in range(3):
        generate_sample_logs(os.path.join(log_dir, f"log_{i}.jsonl"), num_lines=50)

    log_paths = [
        os.path.join(log_dir, f)
        for f in os.listdir(log_dir)
        if f.endswith(".jsonl")
    ]
    results = run_mapreduce(log_paths, "data/token_counts_by_model.json")
    print("Aggregated token counts by model:")
    print(json.dumps(results, indent=2))
