import Link from "next/link"
import { figTree, ibmPlexMono } from "./fonts"
import { ProjectType } from "@/utils/constants"


export function Project({ title, description, links, technologies }: ProjectType) {
  return (
    <div className="h-full w-full flex flex-col justify-between rounded-xl px-4 py-4 bg-gradient-to-br from-violet-300 from-20% via-fuchsia-300 via-30% to-rose-300 via-70%">
      <h3 className={`${figTree.className} text-4xl lg:text-6xl text-center font-bold mb-8`}>{title}</h3>
      <p className="mb-8">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {
          technologies.map(tech => {
            return (
              <div key={tech} className={`${ibmPlexMono.className} text-sm lg:text-lg bg-black text-white rounded-full w-min px-3 py-1 text-nowrap`}>{tech}</div>
            )
          })
        }
      </div>
      <div className="flex justify-end text-2xl gap-4 underline">
        {links?.github && <a target="_blank" href={links.github}>GitHub</a>}
        {links?.deployment && <a target="_blank" href={links.deployment}>Deployed Site</a>}
      </div>
    </div>
  )
}
