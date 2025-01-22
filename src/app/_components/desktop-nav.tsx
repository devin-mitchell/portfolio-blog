import { NAV_SECTIONS } from "@/utils/constants"
import Link from "next/link"

export function DesktopNav() {
  return (
    <div className="hidden flex justify-between items-center md:flex">
      {NAV_SECTIONS.map(({ title, path }, i) => {
        return (
          <Link key={path} href={path} className={`${i != 0 ? 'ml-3' : ''} border border-transparent  bg-black hover:bg-white hover:text-black hover:border-black hover:border text-white font-bold py-2 px-4 xl:px-8 duration-200 transition-colors  lg:mb-0 rounded`}>{title}</Link>
        )
      })}
    </div>
  )
}
