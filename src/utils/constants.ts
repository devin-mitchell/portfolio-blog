export const NAV_SECTIONS: { title: string, path: string }[] = [
  {
    title: 'Code',
    path: '/code'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Film',
    path: '/film'
  },
  {
    title: 'Lettering',
    path: '/lettering'
  },
]

export type ProjectType = {
  title: string
  description: string
  links: {
    github: string
    deployment?: string
  },
  technologies: string[]
}

export const PROJECTS: ProjectType[] = [
  {
    title: 'BTC Comparison',
    description: 'A React application that allows users to input two BTC wallet addresses and display the transaction history between the two.  I am using the blockcypher API to obtain ledger data for this project.',
    links: {
      github: 'https://github.com/devin-mitchell/BTC_address_comparison'
    },
    technologies: ['Vite', 'Typescript', 'React', 'Vitest', 'Tailwind']
  },
  {
    title: 'Next Dashboard',
    description: 'This is a Next.js application that gives admin users a way to manage customer invoices.  This app uses app-router, server-components, partial prerendering, authentication, and more.',
    links: {
      github: 'https://github.com/devin-mitchell/next-testing?tab=readme-ov-file',
      deployment: 'https://next-testing-swart.vercel.app/'
    },
    technologies: ['Next.js', 'Vercel', 'Neon', 'Tailwind', 'SQL', 'PostgreSQL', 'NextAuth.js']
  },
  {
    title: 'Rumbl',
    description: "Using Elixir, Phoenix, and LiveView, created an application that allows users to upload videos and leave timestamped comments on other user's videos",
    links: {
      github: 'https://github.com/devin-mitchell/rumbl'
    },
    technologies: ['Elixir', 'Phoenix', 'LiveView', 'Ecto', 'PostgreSQL']
  },
  {
    title: 'Wordle Clone',
    description: "A clone of the popular New York Time's game",
    links: {
      github: 'https://github.com/devin-mitchell/wordle'
    },
    technologies: ['React', 'TypeScript', 'CSS']
  },
  {
    title: 'Portfolio',
    description: 'The source code for this portfolio/blog.',
    links: {
      github: 'https://github.com/devin-mitchell/portfolio-blog'
    },
    technologies: ['Next.js', 'Typescript', 'Framer Motion', 'Vercel', 'Remark', 'Gray-Matter']
  }
]

export type Job = {
  title: string
  bullets: string[]
  link?: string
}

export const WORK_HISTORY: Job[] = [
  {
    title: 'Custodia Bank',
    bullets: [
      'Built the Front End to customer and admin Money Market Fund products resulting in multimillion dollar deposits',
      'Managed and addressed the front end team’s vulnerabilities with Snyk and Data Dog having an average time-to-remediation of less than 2 weeks resulting in a repo continually showing no outstanding critical vulns', 'Handle full-stack tickets using Typescript/React, Python/Django, Go, grpc, and sqlc', ' Deploy local dev, as well as ephemeral dev, k8s clusters and manage pods using Skaffold', 'Rotating PagerDuty on-call shifts to remediate production and staging alerts using DataDog monitoring', ' Lead a round of Senior Frontend Interviews concluding with a highly productive and widely respected hire', 'Helped reduce flakey e2e tests by 75% resulting in more reliable user flows and faster/more consistent pipelines'
    ],
    link: 'https://custodiabank.com/'
  },
  {
    title: 'Genesis Block / Hightop',
    bullets: [
      'Converted repo from Javascript to Typescript to improve engineers productivity and accuracy',
      'Changed all remaining class components to functional components allowing engineers access to hooks', 'Increased test coverage from roughly 60% to 88% using Jest and testing-library/react-native', 'Worked hastily across other teams to implement a rebranding from Genesis Block to Hightop', 'Lead the frontend implementation of our Golden Ticket feature, which allows users to send friends and family a link to enter the app while avoiding our waitlist', 'Quickly developed skills in Solidity and Vyper to deliver our web3 application resulting in Series A funding'
    ],
    link: 'https://www.hightop.com/'
  }
]

export const SKILLS = ['Typescript', 'React', 'Next.js', 'Jest', 'Playwright', 'Webpack', 'Elixir', 'Phoenix', 'Ecto', 'Golang', 'REST', 'GraphQL', 'gRPC', 'Animations', 'Git', 'VIM']
