import { ibmPlexMono } from "@/utils/fonts";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className=" animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className={`${ibmPlexMono.className} animate-fadeInUp text-center md:text-left text-lg mt-5 md:pl-8`}>
        A roughly curated collection of thoughts & ideas, snapshots of my life, and other things I think are worth sharing. {" "}
      </h4>
    </section>
  );
}
