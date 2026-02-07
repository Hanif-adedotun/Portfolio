export interface ParsedContent {
  type: 'text' | 'code';
  content: string;
  language?: string;
}

/**
 * Parses content that may contain markdown-style code blocks
 * Supports ```language ... ``` format
 */
export function parseContent(content: string): ParsedContent[] {
  const parts: ParsedContent[] = [];
  
  // Handle empty content
  if (!content || !content.trim()) {
    return [{ type: 'text', content: '' }];
  }

  // Match code blocks with optional language: ```language\ncode\n```
  // Also handles code blocks without newline after opening: ```languagecode```
  const codeBlockRegex = /```(\w+)?\s*\n?([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      const textContent = content.substring(lastIndex, match.index);
      if (textContent.trim()) {
        parts.push({ type: 'text', content: textContent });
      }
    }

    // Add code block
    const language = match[1]?.trim() || 'text';
    const code = match[2]?.trim() || '';
    parts.push({ type: 'code', content: code, language });

    lastIndex = codeBlockRegex.lastIndex;
  }

  // Add remaining text after last code block
  if (lastIndex < content.length) {
    const textContent = content.substring(lastIndex);
    if (textContent.trim()) {
      parts.push({ type: 'text', content: textContent });
    }
  }

  // If no code blocks found, return entire content as text
  if (parts.length === 0) {
    parts.push({ type: 'text', content: content });
  }

  return parts;
}

/**
 * Basic syntax highlighting for common languages
 * This is a simple keyword-based highlighter
 */
export function highlightCode(code: string, language: string): string {
  // For now, return plain code - we can enhance this later
  // or use a proper syntax highlighter library
  return escapeHtml(code);
}

function escapeHtml(text: string): string {
  const div = typeof document !== 'undefined' ? document.createElement('div') : null;
  if (div) {
    div.textContent = text;
    return div.innerHTML;
  }
  // Fallback for SSR
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

