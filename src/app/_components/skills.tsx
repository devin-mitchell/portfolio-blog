import * as motion from 'motion/react-client'
import { ibmPlexMono } from './fonts'

type Props = {
  skills: string[]
}

export function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 300 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      className="w-full max-w-[800px] rounded-lg duration-200 ease-linear"
    >
      <ul className="w-full grid grid-cols-2 gap-6 rounded-xl px-6 py-10 bg-gradient-to-br from-violet-300 from-20% via-fuchsia-300 via-30% to-rose-300 via-70% ">
        {skills.map(skill => {
          return <li className={`${ibmPlexMono.className} text-sm text-center px-6 bg-black py-2 text-white rounded-full`} key={skill}>{skill}</li>
        })}
      </ul>
    </motion.div>
  )
}
