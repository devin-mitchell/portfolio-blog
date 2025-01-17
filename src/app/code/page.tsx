import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

export default function Index() {
  return (
    <main>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className=" animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            CODE
          </h1>
          <h4 className="animate-fadeInUp text-center md:text-left text-lg mt-5 md:pl-8">
            A list of projects, work history, skills, and aspirations
          </h4>
        </section>
      </Container>
    </main>
  );
}
