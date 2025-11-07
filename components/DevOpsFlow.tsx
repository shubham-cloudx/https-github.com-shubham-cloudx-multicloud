
import React from 'react';
import { FLOW_NODES } from '../constants';
import { FlowNodeData, FlowNodeId } from '../types';
import FlowNode from './FlowNode';

interface DevOpsFlowProps {
  selectedNodeId: FlowNodeId | null;
  onNodeSelect: (node: FlowNodeData) => void;
}

const Arrow: React.FC = () => (
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-24 sm:w-16 sm:h-auto">
        <svg className="w-6 h-6 text-gray-500 transform rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
    </div>
);

const DevOpsFlow: React.FC<DevOpsFlowProps> = ({ selectedNodeId, onNodeSelect }) => {
  return (
    <div className="p-4 bg-brand-surface/50 rounded-lg">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center">
        {FLOW_NODES.map((node, index) => (
          <React.Fragment key={node.id}>
            <FlowNode
              node={node}
              isSelected={selectedNodeId === node.id}
              onClick={onNodeSelect}
            />
            {index < FLOW_NODES.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DevOpsFlow;
