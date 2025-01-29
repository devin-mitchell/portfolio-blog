import { figTree } from "./fonts"

type Job = {
  title: string
  bullets: string[]
  link?: string
}

export function JobCard({ title, bullets, link }: Job) {
  return (
    <div className="h-full w-full flex flex-col justify-between rounded-xl px-4 py-4 bg-gradient-to-br from-violet-300 from-20% via-fuchsia-300 via-30% to-rose-300 via-70%">
      <h3 className={`${figTree.className} text-4xl lg:text-6xl text-center font-bold mb-8`}>{title}</h3>
      <ul>
        {bullets.map(bullet => {
          return (
            <li key={bullet} className="mb-4 flex relative">
              <div className="rounded-full w-2 h-2 absolute top-[8px] bg-black" />
              <p className="pl-4">{`${bullet}`}</p>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-end text-2xl gap-4 underline">
        {link && <a target="_blank" href={link}>Website</a>}
      </div>
    </div>
  )
}
