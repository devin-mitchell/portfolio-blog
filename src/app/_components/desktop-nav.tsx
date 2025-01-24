import { NAV_SECTIONS } from "@/utils/constants"
import Link from "next/link"
import { SplitText } from "./split-text"

export function DesktopNav() {
  return (
    <div className="hidden flex justify-between items-center md:flex md:mr-8 gap-4">
      {NAV_SECTIONS.map(({ title, path }, i) => {
        return (
          <Link key={path} href={path}>
            <SplitText text={title} />
          </Link>
        )
      })}
    </div>
  )
}
