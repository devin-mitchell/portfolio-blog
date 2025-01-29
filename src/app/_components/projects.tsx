import { PROJECTS } from "@/utils/constants"
import * as motion from 'motion/react-client'
import { Project } from "./project"

export function Projects() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center">
      <div className="h-full max-w-[800px] flex flex-col items-center gap-12">
        {PROJECTS.map((project, i) => {
          const fadeDirection = i % 2 === 0 ? -300 : 300

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, translateX: fadeDirection }}
              whileInView={{ opacity: 1, translateX: 0 }}
              className="w-full rounded-lg duration-200 ease-linear"
            >
              <Project {...project} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
