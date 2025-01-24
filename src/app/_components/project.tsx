import Link from "next/link"
import { ProjectType } from "../code/page"
import { figTree, ibmPlexMono } from "./fonts"


export function Project({ title, description, links, technologies }: ProjectType) {
  return (
    <div className="h-full w-full flex flex-col justify-between bg-zinc-300 rounded-xl px-4 py-4">
      <h2 className={`${figTree.className} text-4xl lg:text-6xl text-center font-bold mb-8`}>{title}</h2>
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
        {links?.github && <Link href={links.github}>GitHub</Link>}
        {links?.deployment && <a href={links.deployment}>Deployed Site</a>}
      </div>
    </div>
  )
}
