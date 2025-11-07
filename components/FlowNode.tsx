
import React from 'react';
import { FlowNodeData } from '../types';

interface FlowNodeProps {
  node: FlowNodeData;
  isSelected: boolean;
  onClick: (id: FlowNodeData) => void;
}

const FlowNode: React.FC<FlowNodeProps> = ({ node, isSelected, onClick }) => {
  const baseClasses = "flex flex-col items-center justify-center text-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105";
  const selectedClasses = "bg-brand-primary shadow-lg ring-2 ring-offset-2 ring-offset-brand-background ring-brand-primary";
  const unselectedClasses = "bg-brand-surface hover:bg-gray-700 border border-gray-700";

  return (
    <div
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
      onClick={() => onClick(node)}
    >
      <node.icon className="w-10 h-10 mb-2" />
      <span className="text-sm font-semibold">{node.name}</span>
    </div>
  );
};

export default FlowNode;
