import Container from "@/app/_components/container";
import { AboutSection } from "../_components/about-section";
import { ABOUT_SECTIONS } from "@/utils/constants";

export default function Index() {
  return (
    <main>
      <Container>
        {ABOUT_SECTIONS.map((section, i) => {
          return (
            <AboutSection header={section.header} bodyText={section.bodyText} imageSrc={section.imageSrc} imageAlt={section.imageAlt} imageAlignRight={section.imageAlignRight} imageDisplacement={section.imageDisplacement}
            />
          )
        })}
      </Container>
    </main>
  );
}
