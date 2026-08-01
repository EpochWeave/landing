import type { FlowNode, Branch } from './caseStudy'

export interface Convergence {
  label: string
  nodes: FlowNode[]
}

export interface PipelineFlow {
  trigger: FlowNode
  reasoning: FlowNode
  decisionLabel: string
  branches: Branch[]
  convergence: Convergence
}
