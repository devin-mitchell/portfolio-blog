import { ABOUT_SECTIONS } from "@/utils/constants";
import Container from "./_components/container";
import { AboutSection } from "./_components/about-section";
import { AboutSectionMobile } from "./_components/about-section-mobile";

export default function Index() {
  return (
    <main>

      <Container>
        <h1 className="animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          ABOUT
        </h1>
        {ABOUT_SECTIONS.map(section => {
          return (
            <div key={section.header}>
              <AboutSection
                header={section.header}
                bodyText={section.bodyText}
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                imageAlignRight={section.imageAlignRight}
                imageDisplacement={section.imageDisplacement}
              />
              <AboutSectionMobile
                header={section.header}
                bodyText={section.bodyText}
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                imageAlignRight={section.imageAlignRight}
              />
            </div>
          )
        })}
      </Container>
    </main>
  );
}
