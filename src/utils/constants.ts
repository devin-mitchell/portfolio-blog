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

