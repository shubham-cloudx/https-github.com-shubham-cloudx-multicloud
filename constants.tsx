
import React from 'react';
import { FlowNodeData } from './types';

// --- Icon Components ---

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const JenkinsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.089 16.438-1.583-1.584.948-.948 1.583 1.584-.948.948zm2.145-8.036c-.417 0-.756.339-.756.756s.339.756.756.756.756-.339.756-.756-.339-.756-.756-.756zm2.845 2.845c-.417 0-.756.339-.756.756s.339.756.756.756.756-.339.756-.756-.339-.756-.756-.756zm-2.845 2.845c-.417 0-.756.339-.756.756s.339.756.756.756.756-.339.756-.756-.339-.756-.756-.756zm4.834-4.238 1.584 1.583-.948.948-1.584-1.583.948-.948zM12 4.414c-4.188 0-7.586 3.398-7.586 7.586s3.398 7.586 7.586 7.586 7.586-3.398 7.586-7.586-3.398-7.586-7.586-7.586zm0 13.5c-3.265 0-5.914-2.649-5.914-5.914s2.649-5.914 5.914-5.914 5.914 2.649 5.914 5.914-2.649 5.914-5.914 5.914z"/></svg>
);

const DockerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M22.122 8.397c-.238-.36-.67-.531-1.077-.404l-3.333 1.052v-3.79c0-.442-.358-.8-.8-.8h-3.95c-.322 0-.623.153-.8.401l-1.354 1.89-1.353-1.89c-.177-.248-.478-.401-.8-.401h-3.95c-.442 0-.8.358-.8.8v7.838h-1.15c-.442 0-.8.358-.8.8v2.799c0 .442.358.8.8.8h1.15v2.812c0 .442.358.8.8.8h3.95c.442 0 .8-.358.8-.8v-2.812h.7v2.812c0 .442.358.8.8.8h3.95c.442 0 .8-.358.8-.8v-2.812h.7v2.812c0 .442.358.8.8.8h.557c.442 0 .8-.358.8-.8v-3.669c0-.022-.003-.043-.005-.065l3.54-7.502c.162-.343.045-.764-.265-1.002zm-15.672-1.947h2.35v1.2h-2.35v-1.2zm-1.6 8.35v-6.75h2.35v6.75h-2.35zm3.95 5.6h-2.35v-1.2h2.35v1.2zm.7-1.2h-2.35v-6.75h2.35v6.75zm3.95 1.2h-2.35v-1.2h2.35v1.2zm.7-1.2h-2.35v-6.75h2.35v6.75zm3.95 1.2h-2.35v-1.2h2.35v1.2zm-1.6-10.75h2.35v1.2h-2.35v-1.2zm-7.9 0h2.35v1.2h-2.35v-1.2z"/></svg>
);

const EcrIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 12H5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z"/><path d="M6 9h4v2H6zm0 3h6v2H6zm0 3h5v2H6z"/></svg>
);

const TerraformIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 4.5v9l7.5 4.33 7.5-4.33v-9L10 0.17 2.5 4.5zm7.5 14.83L3.5 15.5V5.83l6.5 3.75v6.25zM11 5.33L4.5 9.08 10 12.5l6.5-3.75L11 5.33zM16.5 15.5l-6.5 3.75v-6.25L16.5 9.25v6.25zM21.5 4.5L14 9.25l-1.5.86v-1.71L19.5 4.5h2zM14 14.75l7.5-4.33V4.5L14 9.25v5.5z"/></svg>
);

const KubernetesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.04 16.05l-4.51-2.52.01-5.01 4.5-2.53 4.51 2.52v5.01l-4.51 2.53zm.01-6.04l-2.5-1.4v2.8l2.5 1.4v-2.8zm2.02 0v2.8l2.5-1.4v-2.8l-2.5 1.4zM12 9.42l-2.5-1.41 2.5-1.4 2.5 1.4-2.5 1.41z"/></svg>
);

const PrometheusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12.24 8.78L14 12l-1.76 3.22c-.11.2-.33.32-.57.32h-3.34c-.24 0-.46-.12-.57-.32L6 12l1.76-3.22c.11-.2.33-.32.57-.32h3.34c.24 0 .46.12.57.32zM12 12.87l.88-1.62L12 9.63l-.88 1.62L12 12.87z"/></svg>
);

const GrafanaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.95h-2V7.05h2v11.9z m4 0h-2V12h2v6.95zm-8 0H5V14h2v4.95z"/></svg>
);

const AwsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.38 18.25c-1.38 0-2.48-1.12-2.48-2.48s1.1-2.48 2.48-2.48 2.48 1.12 2.48 2.48-1.12 2.48-2.48 2.48zm0-3.96c-.81 0-1.48.67-1.48 1.48s.67 1.48 1.48 1.48 1.48-.67 1.48-1.48-.67-1.48-1.48-1.48zM19.1 7.21c-.24-.24-.55-.37-.89-.37H5.78c-.34 0-.65.13-.89.37l-2.4 2.4c-.24.24-.37.55-.37.89v5.99c0 .34.13.65.37.89l2.4 2.4c.24.24.55.37.89.37h12.44c.34 0 .65-.13.89-.37l2.4-2.4c.24-.24.37-.55.37-.89V10.5c0-.34-.13-.65-.37-.89l-2.4-2.4zm-1.29 11.24H6.18l-1.85-1.85V11.1l1.85-1.85h11.64l1.85 1.85v5.49l-1.85 1.86z"/></svg>
);

// --- Flow Node Data ---

export const FLOW_NODES: FlowNodeData[] = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'The process starts with developers committing code to a GitHub repository, which serves as the single source of truth for the application.',
    icon: GitHubIcon,
    promptSuggestion: 'Create a GitHub Actions workflow to build a Docker image and push it to AWS ECR when code is pushed to the main branch.',
    geminiContext: 'GitHub Actions YAML',
  },
  {
    id: 'jenkins',
    name: 'Jenkins CI/CD',
    description: 'Jenkins automates the build, test, and deployment pipeline. It listens for changes in the GitHub repo to trigger the CI/CD process.',
    icon: JenkinsIcon,
    promptSuggestion: 'Write a declarative Jenkinsfile to checkout code, build a Docker image, and push it to a private registry.',
    geminiContext: 'Jenkinsfile',
  },
  {
    id: 'docker',
    name: 'Docker Build',
    description: 'Jenkins uses Docker to package the application and its dependencies into a standardized, portable container image.',
    icon: DockerIcon,
    promptSuggestion: 'Create a multi-stage Dockerfile for a Node.js Express application that uses npm. Optimize for a small production image size.',
    geminiContext: 'Dockerfile',
  },
  {
    id: 'ecr',
    name: 'Amazon ECR',
    description: 'The built Docker image is pushed to Amazon Elastic Container Registry (ECR), a secure and scalable private container registry.',
    icon: EcrIcon,
    promptSuggestion: 'Provide the AWS CLI commands to create an ECR repository and push a local Docker image to it.',
    geminiContext: 'AWS CLI commands',
  },
  {
    id: 'terraform',
    name: 'Terraform IaC',
    description: 'Terraform is used for Infrastructure as Code (IaC) to provision and manage the required AWS resources like VPC, EKS cluster, and IAM roles.',
    icon: TerraformIcon,
    promptSuggestion: 'Write Terraform HCL to provision a basic AWS EKS cluster with a managed node group.',
    geminiContext: 'Terraform HCL',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes (EKS)',
    description: 'The application is deployed onto an Amazon EKS (Elastic Kubernetes Service) cluster, which manages the containerized application at scale.',
    icon: KubernetesIcon,
    promptSuggestion: 'Create a Kubernetes Deployment YAML for a web server image from ECR, exposing port 80 with 3 replicas.',
    geminiContext: 'Kubernetes YAML',
  },
  {
    id: 'monitoring',
    name: 'Prometheus & Grafana',
    description: 'Prometheus scrapes metrics from the Kubernetes cluster and applications. Grafana provides a powerful dashboard to visualize these metrics.',
    icon: PrometheusIcon,
    promptSuggestion: 'Give me a sample PromQL query to calculate the 95th percentile of HTTP request latency over the last 5 minutes.',
    geminiContext: 'PromQL Query',
  },
  {
    id: 'self-healing',
    name: 'CloudWatch & Lambda',
    description: 'CloudWatch alarms monitor key metrics. If an alarm is triggered (e.g., high CPU), it invokes a Lambda function to perform automated self-healing actions.',
    icon: AwsIcon,
    promptSuggestion: 'Write a Python Lambda function (using Boto3) that is triggered by a CloudWatch alarm and restarts an EC2 instance.',
    geminiContext: 'Python Boto3 Lambda',
  },
];
