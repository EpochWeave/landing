import type { PipelineFlow } from '../../types/pipeline'

export const heroPipeline: PipelineFlow = {
  trigger: { label: 'New Inquiry', type: 'symbol', icon: 'material-symbols:chat-bubble-rounded' },
  reasoning: {
    label: 'AI checks intent, urgency, and calendar availability',
    type: 'symbol',
    icon: 'material-symbols:auto-awesome-rounded'
  },
  decisionLabel: 'Sorted by what happens next',
  branches: [
    {
      label: 'Ready to Book',
      nodes: [
        { label: 'Slot Confirmed', type: 'logo', slug: 'googlecalendar' }
      ]
    },
    {
      label: 'Needs Follow-Up',
      nodes: [
        { label: 'Reply Drafted', type: 'logo', slug: 'gmail' }
      ]
    },
    {
      label: 'Not a Fit',
      nodes: [
        { label: 'Politely Declined', type: 'logo', slug: 'gmail' }
      ]
    }
  ],
  convergence: {
    label: 'Logged & Team Notified',
    nodes: [
      { label: 'CRM Updated', type: 'logo', slug: 'hubspot' },
      { label: 'Team Notified', type: 'logo', slug: 'slack' }
    ]
  }
}
