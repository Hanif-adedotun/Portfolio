import json

# Read the JSON file
with open('src/data/blog-posts.json', 'r', encoding='utf-8') as f:
    posts = json.load(f)

# Sort by date in descending order (latest first)
posts_sorted = sorted(posts, key=lambda x: x['date'], reverse=True)

# Write back to file with proper formatting
with open('src/data/blog-posts.json', 'w', encoding='utf-8') as f:
    json.dump(posts_sorted, f, indent=2, ensure_ascii=False)
    f.write('\n')

print('Blog posts sorted successfully!')
print(f'Total posts: {len(posts_sorted)}')
print('\\nPosts in order (latest first):')