import { WORK_HISTORY } from "@/utils/constants";
import { JobCard } from "./job-card";
import * as motion from 'motion/react-client'

export function WorkHistory() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center">
      <div className="h-full max-w-[800px] flex flex-col items-center gap-12">
        {WORK_HISTORY.map((job, i) => {
          const fadeDirection = i % 2 === 0 ? 300 : -300

          return (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, translateX: fadeDirection }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full rounded-lg"
            >
              <JobCard {...job} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

