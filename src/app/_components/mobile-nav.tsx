"use client"
import { useState } from "react"
import { ExitIcon } from "./svg/exitIcon"
import { NAV_SECTIONS } from "@/utils/constants"
import Link from "next/link"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-8 h-8 md:hidden flex flex-col justify-around items-center">
        <div className={`${isOpen ? '-translate-x-24 opacity-0' : ''} transition ease-in-out  opacity-1  h-1 w-8  rounded-full bg-zinc-900`} />
        <div className={`${isOpen ? '-translate-x-24 opacity-0' : ''} transition ease-in-out delay-150 opacity-1  h-1 w-8 rounded-full bg-zinc-900`} />
        <div className={`${isOpen ? '-translate-x-24 opacity-0' : ''} transition ease-in-out delay-300 opacity-1 h-1 w-8 rounded-full bg-zinc-900`} />
      </button>
      <div className={`${isOpen ? 'flex' : 'animate-fadeOutDown'} absolute top-0 bottom-0 left-0 right-0 animate-fadeInUp bg-blue-500 flex flex-col justify-center`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 flex items-center justify-center border border-zinc-900 p-2 rounded-full  h-12 w-12 flex active:bg-blue-300">
          <ExitIcon />
        </button>
        <div className="flex flex-col mb-12 h-1/2 w-full items-center">
          {NAV_SECTIONS.map(({ title, path }, i) => {
            return (
              <Link key={path} href={path} onClick={() => setIsOpen(false)} className={`${i != 0 ? 'mt-8' : ''} text-6xl w-full  text-center active:bg-blue-300`}>{title}</Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
