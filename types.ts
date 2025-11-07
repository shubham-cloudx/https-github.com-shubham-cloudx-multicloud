
import { ComponentType } from 'react';

export type FlowNodeId = 'github' | 'jenkins' | 'docker' | 'ecr' | 'terraform' | 'kubernetes' | 'monitoring' | 'self-healing';

export interface FlowNodeData {
  id: FlowNodeId;
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  promptSuggestion: string;
  geminiContext: string;
}
