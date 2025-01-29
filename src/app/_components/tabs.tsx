"use client"
import { useState } from "react"

type Tab = {
  title: string
  section: React.ReactNode
}

type Props = {
  tabs: Tab[]
}

export function Tabs({ tabs }: Props) {
  const [currentTab, setCurrentTab] = useState<number>(0)

  return (
    <div className={`flex flex-col gap-8 items-center`}>
      <div className="flex rounded-lg gap-2">
        {tabs.map((tab, i) => {
          return (
            <button key={tab.title} className={`text-nowrap text-lg tracking py-2 px-4 rounded-lg transition duration-500 ease-in-out ${i === currentTab ? 'bg-black text-white' : 'bg-zinc-200'}`} onClick={() => setCurrentTab(i)}>{tab.title}</button>
          )
        })}
      </div>
      {tabs[currentTab].section}
    </div>
  )
}
