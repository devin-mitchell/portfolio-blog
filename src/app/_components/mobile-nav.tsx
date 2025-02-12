"use client"
import { useEffect, useState } from "react"
import { ExitIcon } from "./svg/exitIcon"
import { NAV_SECTIONS } from "@/utils/constants"
import Link from "next/link"
import * as motion from 'motion/react-client'
import { AnimatePresence } from "motion/react"
import { useModal } from "./context/modal"

export default function MobileNav() {
  const { open, modals } = useModal()

  const isOpen = modals.includes('mobile-nav')

  return (
    <>
      <button onClick={() => open('mobile-nav')} className="w-8 h-8 md:hidden flex flex-col justify-around items-center">
        <div className={`${isOpen ? '-translate-x-24 opacity-0' : ''} transition ease-in-out  opacity-1  h-1 w-8  rounded-full bg-zinc-900`} />
        <div className={`${isOpen ? '-translate-x-24 opacity-0' : ''} transition ease-in-out delay-150 opacity-1  h-1 w-8 rounded-full bg-zinc-900`} />
        <div className={`${isOpen ? '-translate-x-24 opacity-0' : ''} transition ease-in-out delay-300 opacity-1 h-1 w-8 rounded-full bg-zinc-900`} />
      </button>
    </>

  )
}
