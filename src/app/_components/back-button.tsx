import Link from "next/link";
import { sampler } from "./fonts";

type Props = {
  href: string
}

export function BackButton({ href }: Props) {
  return (
    <Link href={href} className="">
      <p className={`${sampler.className} underline pointer`} >{"<- gallery"}</p>
    </Link>
  )
}
