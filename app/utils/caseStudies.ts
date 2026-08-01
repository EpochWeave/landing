import type { CaseStudy } from '../../types/caseStudy'

export const caseStudies: CaseStudy[] = [
  {
    tag: 'Lead-Heavy Businesses',
    headline: 'Every inbound lead, read, judged, and routed before a human sees it',
    problem: 'Leads come in through more than one channel, and every message gets treated the same way: a hot buyer and a spam form fill land in the same inbox, sorted by whoever gets to it first.',
    trigger: [
      { label: 'WhatsApp Message', type: 'logo', slug: 'whatsapp' },
      { label: 'Website Form', type: 'logo', slug: 'typeform' }
    ],
    reasoning: { label: 'AI reads full message context and intent', type: 'logo', slug: 'claude' },
    branches: [
      {
        label: 'Hot Lead',
        nodes: [
          { label: 'Deal Created', type: 'logo', slug: 'hubspot' },
          { label: 'Call Booked', type: 'logo', slug: 'googlecalendar' },
          { label: 'Owner Alerted', type: 'logo', slug: 'slack' }
        ]
      },
      {
        label: 'Needs Nurturing',
        nodes: [
          { label: 'Added to Sequence', type: 'logo', slug: 'mailchimp' },
          { label: 'Tagged in CRM', type: 'logo', slug: 'hubspot' }
        ]
      },
      {
        label: 'Low Quality',
        nodes: [
          { label: 'Logged for Review', type: 'logo', slug: 'airtable' }
        ]
      }
    ],
    approach: [
      'The AI doesn\'t match keywords. It reads the actual message the way a person would, weighing intent, urgency, and fit against what a real buyer for this business looks like.',
      'Each branch triggers a different set of tools: a hot lead gets a CRM deal, a booked call, and an immediate alert; a maybe gets nurtured automatically; noise gets filtered out without ever reaching a human.'
    ],
    detail: 'This isn\'t a single integration. It\'s a decision layer sitting in front of five different tools, each one only activated when the classification actually calls for it.',
    outcome: 'The owner is only interrupted for leads worth interrupting for. Everything else keeps moving without anyone touching it.'
  },
  {
    tag: 'Subscription & Service Businesses',
    headline: 'Failed payments recovered without a manual follow-up list',
    problem: 'A card fails, the payment tool retries a couple of times, and if it doesn\'t go through, the customer just quietly churns because nobody follows up personally, since there\'s no process for catching it.',
    trigger: [
      { label: 'Payment Fails', type: 'logo', slug: 'stripe' }
    ],
    reasoning: { label: 'AI drafts a personalized recovery message based on customer history', type: 'logo', slug: 'claude' },
    branches: [
      {
        label: 'Recovered',
        nodes: [
          { label: 'Outcome Logged', type: 'logo', slug: 'airtable' }
        ]
      },
      {
        label: 'Still Failed',
        nodes: [
          { label: 'Task Created', type: 'logo', slug: 'clickup' },
          { label: 'Team Notified', type: 'logo', slug: 'discord' }
        ]
      },
      {
        label: 'High-Value Customer, Still Failed',
        nodes: [
          { label: 'Escalated Directly', type: 'logo', slug: 'discord' }
        ]
      }
    ],
    approach: [
      'Instead of a generic \'your payment failed\' email, the AI writes a message shaped around that customer\'s actual account: how long they\'ve been a client, what they use, and what tone fits.',
      'A second check runs after the retry window: recovered accounts are simply logged, failed accounts create a task for follow-up, and high-value accounts skip the queue entirely and go straight to a person.'
    ],
    detail: 'The value here is the second decision layer. Most tools stop at \'send a reminder email.\' This keeps checking, and treats a $50/mo customer differently from a $2,000/mo one automatically.',
    outcome: 'Recoverable revenue gets recovered without anyone keeping a spreadsheet of who to chase.'
  },
  {
    tag: 'Support-Heavy Teams',
    headline: 'Support tickets reach the right specialist before a human triages them',
    problem: 'Every ticket lands in one queue, gets read by whoever\'s free, and gets manually forwarded to the right person, so billing questions and urgent technical issues wait in the exact same line.',
    trigger: [
      { label: 'New Ticket', type: 'logo', slug: 'zendesk' }
    ],
    reasoning: { label: 'AI checks the knowledge base and reads for category, urgency, and tone', type: 'logo', slug: 'claude' },
    branches: [
      {
        label: 'Billing',
        nodes: [
          { label: 'Routed to Billing', type: 'logo', slug: 'slack' },
          { label: 'Reply Drafted', type: 'logo', slug: 'notion' }
        ]
      },
      {
        label: 'Technical',
        nodes: [
          { label: 'Linked in Linear', type: 'logo', slug: 'linear' },
          { label: 'Reply Drafted', type: 'logo', slug: 'notion' }
        ]
      },
      {
        label: 'Urgent or Angry, Any Category',
        nodes: [
          { label: 'Sent Straight to Manager', type: 'logo', slug: 'slack' }
        ]
      }
    ],
    approach: [
      'Before routing anything, the AI checks the existing knowledge base to see if the answer already exists. If it does, a reply is drafted for the agent to approve rather than write from scratch.',
      'Tone and urgency are read independently from category, so an angry billing complaint doesn\'t wait in the same queue as a routine one. It bypasses the queue entirely.'
    ],
    detail: 'The urgency check runs across every branch, not inside just one of them. That cross-cutting logic is what makes this a system, not three separate simple rules.',
    outcome: 'The right person sees the right ticket first, with a starting-point reply already waiting.'
  }
]
