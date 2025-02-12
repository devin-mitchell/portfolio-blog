import Container from "@/app/_components/container";
import { NAV_SECTIONS } from "@/utils/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSoundcloud, FaStrava } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";

type SocialLink = { title: string, icon: React.ReactNode, link: string }

const SOCIAL_LINKS: SocialLink[] = [
  { title: 'GitHub', icon: <FaGithub />, link: 'https://github.com/devin-mitchell' },
  { title: 'Linkedin', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/devin-mitchell100/' },
  { title: 'Are.na', icon: <p>**</p>, link: 'https://www.are.na/devin-mitchell/channels' },
  { title: 'Discogs', icon: <SiDiscogs />, link: 'https://www.discogs.com/user/carrots_45' },
  { title: 'SoundCloud', icon: <FaSoundcloud />, link: 'https://soundcloud.com/devin-mitchell-651184784' },
  { title: 'Strava', icon: <FaStrava />, link: 'https://www.strava.com/athletes/9335200' },
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
              {SOCIAL_LINKS.map(social => {
                return (
                  <li key={social.title}>
                    <a className="w-full h-full flex items-center gap-2 text-lg" href={social.link} target="_blank">
                      {social.icon}<p>{social.title}</p>
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
