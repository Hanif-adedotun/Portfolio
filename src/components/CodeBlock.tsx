import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useEffect, useState } from 'react';

// Custom light theme matching portfolio colors
const customLightTheme = {
  'code[class*="language-"]': {
    color: '#1f2937',
    background: 'transparent',
    textShadow: 'none',
  },
  'pre[class*="language-"]': {
    color: '#1f2937',
    background: 'transparent',
    textShadow: 'none',
  },
  comment: {
    color: '#6b7280',
    fontStyle: 'italic',
  },
  prolog: { color: '#6b7280' },
  doctype: { color: '#6b7280' },
  cdata: { color: '#6b7280' },
  punctuation: { color: '#374151' },
  property: { color: '#dc2626' },
  tag: { color: '#dc2626' },
  boolean: { color: '#dc2626' },
  number: { color: '#dc2626' },
  constant: { color: '#dc2626' },
  symbol: { color: '#dc2626' },
  deleted: { color: '#dc2626' },
  selector: { color: '#059669' },
  'attr-name': { color: '#059669' },
  string: { color: '#059669' },
  char: { color: '#059669' },
  builtin: { color: '#059669' },
  inserted: { color: '#059669' },
  operator: { color: '#7c3aed' },
  entity: { color: '#7c3aed' },
  url: { color: '#7c3aed' },
  'attr-value': { color: '#2563eb' },
  keyword: { color: '#2563eb' },
  'function': { color: '#ea580c' },
  'class-name': { color: '#ea580c' },
  regex: { color: '#c2410c' },
  important: { color: '#c2410c' },
  variable: { color: '#c2410c' },
};

// Custom dark theme matching portfolio colors
const customDarkTheme = {
  'code[class*="language-"]': {
    color: '#c9d1d9',
    background: 'transparent',
    textShadow: 'none',
  },
  'pre[class*="language-"]': {
    color: '#c9d1d9',
    background: 'transparent',
    textShadow: 'none',
  },
  comment: {
    color: '#8b949e',
    fontStyle: 'italic',
  },
  prolog: { color: '#8b949e' },
  doctype: { color: '#8b949e' },
  cdata: { color: '#8b949e' },
  punctuation: { color: '#c9d1d9' },
  property: { color: '#ff7b72' },
  tag: { color: '#ff7b72' },
  boolean: { color: '#ff7b72' },
  number: { color: '#ff7b72' },
  constant: { color: '#ff7b72' },
  symbol: { color: '#ff7b72' },
  deleted: { color: '#ff7b72' },
  selector: { color: '#a5d6a7' },
  'attr-name': { color: '#a5d6a7' },
  string: { color: '#a5d6a7' },
  char: { color: '#a5d6a7' },
  builtin: { color: '#a5d6a7' },
  inserted: { color: '#a5d6a7' },
  operator: { color: '#d2a8ff' },
  entity: { color: '#d2a8ff' },
  url: { color: '#d2a8ff' },
  'attr-value': { color: '#79c0ff' },
  keyword: { color: '#79c0ff' },
  'function': { color: '#ffa657' },
  'class-name': { color: '#ffa657' },
  regex: { color: '#ffa657' },
  important: { color: '#ffa657' },
  variable: { color: '#ffa657' },
};

interface CodeBlockProps {
  code: string;
  language: string;
  sectionIndex: number;
  paraIndex: number;
  index: number;
}

export default function CodeBlock({ code, language, sectionIndex, paraIndex, index }: CodeBlockProps) {
  const [isDark, setIsDark] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const customStyle = {
    margin: 0,
    padding: '1.25rem',
    background: 'transparent',
    fontSize: '0.875rem',
    lineHeight: '1.75',
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
  };

  return (
    <div
      className="code-block-wrapper my-8 rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-800/40 bg-[#F8F9FC] dark:bg-[#0D1117] shadow-sm hover:shadow-md transition-all duration-300"
      style={{
        animation: `fadeIn 0.5s ease-out ${(sectionIndex * 150) + (paraIndex * 50) + 300}ms both`,
      }}
    >
      <div className="flex items-center justify-between px-5 py-3 bg-white/40 dark:bg-[#161B22]/60 border-b border-gray-200/40 dark:border-gray-800/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
          <span className="text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider ml-2">
            {language || 'code'}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`copy-code-btn group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/30 ${
            copied
              ? 'text-[#1DCFF6] dark:text-[#1DCFF6]'
              : 'text-gray-500 dark:text-gray-400 hover:text-[#1DCFF6] dark:hover:text-[#1DCFF6]'
          }`}
          title="Copy code"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <SyntaxHighlighter
        language={language || 'text'}
        style={isDark ? customDarkTheme : customLightTheme}
        customStyle={customStyle}
        PreTag="div"
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

