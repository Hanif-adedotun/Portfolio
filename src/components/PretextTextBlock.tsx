import {
  createElement,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import clsx from "clsx";
import {
  layoutWithLines,
  prepareWithSegments,
  type LayoutLine,
  type PreparedTextWithSegments,
  type PrepareOptions,
} from "@chenglou/pretext";

/** Width available for line breaking (content box, excluding horizontal padding). */
function contentBoxWidthForText(el: HTMLElement): number {
  const cs = getComputedStyle(el);
  const pl = parseFloat(cs.paddingLeft) || 0;
  const pr = parseFloat(cs.paddingRight) || 0;
  return Math.max(0, el.clientWidth - pl - pr);
}

export type PretextTextBlockProps = {
  as?: "h1" | "h2" | "p";
  text: string;
  className?: string;
  style?: CSSProperties;
  prepareOptions?: PrepareOptions;
};

function readCanvasFont(cs: CSSStyleDeclaration): string {
  const shorthand = cs.font?.trim();
  if (shorthand) return shorthand;
  return `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
    .replace(/\s+/g, " ")
    .trim();
}

function readLineHeightPx(cs: CSSStyleDeclaration): number {
  const lh = cs.lineHeight;
  if (lh === "normal") {
    return parseFloat(cs.fontSize) * 1.25;
  }
  const px = parseFloat(lh);
  return Number.isFinite(px) ? px : parseFloat(cs.fontSize) * 1.25;
}

function prepareKey(
  text: string,
  font: string,
  prepareOptions: PrepareOptions | undefined
): string {
  const opt =
    prepareOptions?.whiteSpace != null
      ? `\0${prepareOptions.whiteSpace}`
      : "";
  return `${text}\0${font}${opt}`;
}

export default function PretextTextBlock({
  as = "p",
  text,
  className,
  style,
  prepareOptions,
}: PretextTextBlockProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const textRef = useRef(text);
  textRef.current = text;
  const preparedRef = useRef<PreparedTextWithSegments | null>(null);
  const prepareKeyRef = useRef("");
  const [lines, setLines] = useState<LayoutLine[] | null>(null);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const run = () => {
      const t = textRef.current;
      const cs = getComputedStyle(el);
      const font = readCanvasFont(cs);
      const lineHeightPx = readLineHeightPx(cs);

      const key = prepareKey(t, font, prepareOptions);
      if (prepareKeyRef.current !== key) {
        preparedRef.current = prepareWithSegments(t, font, prepareOptions);
        prepareKeyRef.current = key;
      }

      const width = contentBoxWidthForText(el);
      if (width <= 0 || !preparedRef.current) return;

      const { lines: nextLines } = layoutWithLines(
        preparedRef.current,
        width,
        lineHeightPx
      );
      setLines(nextLines);
    };

    run();
    const ro = new ResizeObserver(() => run());
    ro.observe(el);
    window.addEventListener("resize", run);
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    if (vv) {
      vv.addEventListener("resize", run);
    }
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", run);
      if (vv) {
        vv.removeEventListener("resize", run);
      }
    };
  }, [text, prepareOptions?.whiteSpace]);

  const children =
    lines === null
      ? text
      : lines.map((line, i) =>
          createElement("span", { key: i, className: "block" }, line.text)
        );

  return createElement(as, {
    ref: elRef,
    className: clsx(className, "min-w-0 max-w-full"),
    style,
  }, children);
}
