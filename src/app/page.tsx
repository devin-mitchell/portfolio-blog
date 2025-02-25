import { SKILLS } from "@/utils/constants";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { WorkHistory } from "./_components/work-history";
import { Metadata } from "next";
import Container from "./_components/container";
import { Tabs } from "./_components/tabs";

const pageTabs = [
  {
    title: 'Projects',
    section: <Projects />
  },
  {
    title: 'Work History',
    section: <WorkHistory />
  },
  {
    title: 'Skills',
    section: <Skills skills={SKILLS} />
  }
]

export const metadata: Metadata = {
  title: 'Devin Mitchell',
}

export default function Index() {
  return (
    <main className="overflow-hidden">
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Code.
          </h1>
          <h4 className="animate-fadeInUp text-center md:text-left text-lg mt-4 md:pl-8">
            A list of projects, work history, and skills
          </h4>
        </section>
        <Tabs tabs={pageTabs} />
      </Container>
    </main>
  );
}
