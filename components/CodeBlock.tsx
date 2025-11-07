
import React, { useState, useEffect } from 'react';

interface CodeBlockProps {
  content: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden my-4 border border-gray-700">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center text-xs text-gray-400 hover:text-white transition-colors duration-200"
        >
          {isCopied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm text-gray-200 overflow-x-auto">
        <code>{content}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
