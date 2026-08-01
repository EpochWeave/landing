export interface FlowNode {
  label: string
  type: 'logo' | 'symbol'
  slug?: string
  icon?: string
}

export interface Branch {
  label: string
  nodes: FlowNode[]
}

export interface CaseStudy {
  tag: string
  headline: string
  problem: string
  trigger: FlowNode[]
  reasoning: FlowNode
  branches: Branch[]
  approach: string[]
  detail: string
  outcome: string
}
