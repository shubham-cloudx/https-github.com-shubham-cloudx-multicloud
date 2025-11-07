
import React, { useState, useEffect, useCallback } from 'react';
import { FlowNodeData } from '../types';
import { generateDevOpsAsset } from '../services/geminiService';
import CodeBlock from './CodeBlock';

interface InteractionPanelProps {
  selectedNode: FlowNodeData | null;
}

const InteractionPanel: React.FC<InteractionPanelProps> = ({ selectedNode }) => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedNode) {
      setPrompt(selectedNode.promptSuggestion);
      setGeneratedContent('');
      setError(null);
    }
  }, [selectedNode]);

  const handleSubmit = useCallback(async () => {
    if (!selectedNode || !prompt) return;

    setIsLoading(true);
    setError(null);
    setGeneratedContent('');

    try {
      const content = await generateDevOpsAsset(prompt, selectedNode.geminiContext);
      setGeneratedContent(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, selectedNode]);

  if (!selectedNode) {
    return (
      <div className="flex items-center justify-center h-full bg-brand-surface rounded-lg p-8 text-brand-text-secondary">
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-brand-text-primary">Select a step</h3>
            <p className="mt-1 text-sm text-gray-400">Click on a step in the DevOps flow to see details and generate assets.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <selectedNode.icon className="w-8 h-8 mr-4 text-brand-accent" />
        <div>
          <h2 className="text-2xl font-bold text-brand-text-primary">{selectedNode.name}</h2>
          <p className="text-sm text-brand-text-secondary">{selectedNode.description}</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <label htmlFor="prompt" className="block text-sm font-medium text-brand-text-secondary mb-2">
          Describe what you want to generate:
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent text-brand-text-primary transition"
          placeholder="e.g., Create a secure S3 bucket for private logs"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading || !prompt}
          className="mt-4 w-full flex justify-center items-center bg-brand-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : `Generate ${selectedNode.geminiContext}`}
        </button>

        <div className="mt-4 flex-grow overflow-y-auto">
          {error && <div className="text-red-400 bg-red-900/50 p-3 rounded-md">{error}</div>}
          {generatedContent && <CodeBlock content={generatedContent} language={selectedNode.geminiContext.toLowerCase().split(' ')[0]} />}
        </div>
      </div>
    </div>
  );
};

export default InteractionPanel;
