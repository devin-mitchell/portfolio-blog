import Container from "@/app/_components/container";
import { NAV_SECTIONS } from "@/utils/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSoundcloud, FaStrava } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";

type SocialLink = { title: string, icon: React.ReactNode }

const SOCIAL_LINKS: SocialLink[] = [
  { title: 'GitHub', icon: <FaGithub /> },
  { title: 'Linkedin', icon: <FaLinkedin /> },
  { title: 'Are.na', icon: <FaGithub /> },
  { title: 'Discogs', icon: <SiDiscogs /> },
  { title: 'SoundCloud', icon: <FaSoundcloud /> },
  { title: 'Strava', icon: <FaStrava /> },
]

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-neutral-200 dark:bg-slate-800 mt-8 text-white">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Connect with me
          </h3>
          <div className="flex justify-between w-full">
            <ul className="flex flex-col gap-6 w-full">
              {SOCIAL_LINKS.map(link => {
                return (
                  <li key={link.title}>
                    <a className="w-full h-full flex items-center gap-2 text-lg" href="https://github.com/devin-mitchell" target="_blank">
                      {link.icon}<p>{link.title}</p>
                    </a>
                  </li>
                )
              })}
            </ul>
            <ul className="flex flex-col gap-6 w-full items-end">
              {NAV_SECTIONS.map(navItem => {
                return (
                  <Link key={navItem.title} href={navItem.path} className="text-lg underline"> {navItem.title}</Link>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer >
  );
}

export default Footer;
