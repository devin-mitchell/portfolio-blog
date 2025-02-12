"use client"
import { ExitIcon } from "./svg/exitIcon"
import { NAV_SECTIONS } from "@/utils/constants"
import Link from "next/link"
import * as motion from 'motion/react-client'
import { AnimatePresence } from "motion/react"
import { useModal } from "./context/modal"

export function MobileNavModal() {
  const { remove, modals } = useModal()

  return (
    <AnimatePresence>
      {modals.includes('mobile-nav') ? (
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className={`no-doc-scroll z-10 absolute top-0 h-screen w-screen  flex flex-col justify-center bg-gradient-to-br from-violet-300 from-20% via-fuchsia-300 via-30% to-rose-300 via-70% overflow-y-hidden`}>
          <button
            onClick={() => remove()}
            className="absolute top-8 right-8 flex items-center justify-center border border-zinc-900 p-2 rounded-full p-3 h-12 w-12 flex active:bg-zinc-50">
            <ExitIcon />
          </button>
          <div className="flex flex-col w-full items-center">
            {NAV_SECTIONS.map(({ title, path }, i) => {
              return (
                <Link key={path} href={path} onClick={() => remove()} className={`${i != 0 ? 'mt-8' : ''} text-5xl w-full  text-center active:bg-zinc-50`}>{title}</Link>
              )
            })}
          </div>
        </motion.div>) : null
      }
    </AnimatePresence>
  )
}
