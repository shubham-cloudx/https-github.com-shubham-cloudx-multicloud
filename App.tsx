
import React, { useState } from 'react';
import DevOpsFlow from './components/DevOpsFlow';
import InteractionPanel from './components/InteractionPanel';
import { FlowNodeData } from './types';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  const handleNodeSelect = (node: FlowNodeData) => {
    setSelectedNode(node);
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-text-primary font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Intelligent DevOps Platform
          </h1>
          <p className="mt-2 text-lg text-brand-text-secondary">
            Visualize your CI/CD pipeline and generate configurations with AI
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/5 flex-shrink-0">
             <h2 className="text-xl font-bold mb-4 text-brand-text-primary">Automation Flow</h2>
            <DevOpsFlow
              selectedNodeId={selectedNode?.id || null}
              onNodeSelect={handleNodeSelect}
            />
          </div>

          <div className="lg:w-2/5 flex-grow min-h-[60vh] lg:min-h-0">
             <h2 className="text-xl font-bold mb-4 text-brand-text-primary">AI Interaction Panel</h2>
            <InteractionPanel selectedNode={selectedNode} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
