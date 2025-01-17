import Container from "@/app/_components/container";

export default function Index() {
  return (
    <main>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className=" animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            LETTERING
          </h1>
          <h4 className="animate-fadeInUp text-center md:text-left text-lg mt-5 md:pl-8">
            Some silly little drawings.
          </h4>
        </section>
      </Container>
    </main>
  );
}
