import Container from "@/app/_components/container";
import * as motion from 'motion/react-client'
import { Project } from "../_components/project";
import { PROJECTS } from "@/utils/constants";

export default function Index() {
  return (
    <main>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            CODE
          </h1>
          <h4 className="animate-fadeInUp text-center md:text-left text-lg mt-5 md:pl-8">
            A list of projects, work history, skills, and aspirations
          </h4>
        </section>

        {/* PROJECTS */}
        <section className="min-h-screen flex flex-col items-center gap-12">
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
        </section>

      </Container>
    </main>
  );
}
