"use client"
import { useState } from "react"

type Props = {
  text: string
}

export function SplitText({ text }: Props) {
  const [isSplit, setIsSplit] = useState<boolean>(false)

  return (
    <div onMouseEnter={() => setIsSplit(true)} onMouseLeave={() => setIsSplit(false)} className="relative h-10 px-4 text-xl text-white tracking-wide cursor-pointer">
      <p className="text-black active:hidden">{text}</p>
      <div className="absolute overflow-hidden flex justify-center items-end w-full h-5 top-0 bg-black rounded-t-lg">
        <p className={`translate-y-3.5 transition duration-300 ease-in-out ${isSplit ? '-translate-x-2' : ''}`}>{text}</p>
      </div>
      <div className="absolute overflow-hidden w-full flex justify-center items-start  h-5 bottom-0 bg-black rounded-b-lg">
        <p className={`-translate-y-3.5 transition duration-300 ease-in-out ${isSplit ? 'translate-x-2' : ''}`}>{text}</p>
      </div>
    </div>
  )
}
