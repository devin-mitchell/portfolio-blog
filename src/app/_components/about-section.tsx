import { AboutSectionType } from "@/utils/constants";
import Image from "next/image";


export function AboutSection({ header, bodyText, imageAlt, imageDisplacement, imageSrc, imageAlignRight }: AboutSectionType) {
  return (
    <section className="hidden md:flex  w-full md:flex-row flex items-start md:justify-between mt-16 mb-16 md:mb-12">
      {
        imageAlignRight ?

          <>
            <div className="sticky top-0 flex flex-col md:w-1/2 px-4 h-full w-full">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
                {header}
              </h2>
              <p className="text-xl w-full">
                {bodyText}
              </p>
            </div>
            <div className="w-full">
              <div className="w-full h-screen relative flex flex-col items-start">
                <Image alt={imageAlt} fill className={`object-cover object-[${imageDisplacement || '55'}%] rounded-md`} src={imageSrc} />
              </div>
            </div>
          </>

          :

          <>
            <div className="w-full">
              <div className="w-full h-screen relative flex flex-col items-start">
                <Image alt={imageAlt} fill className={`object-cover object-[${imageDisplacement || '55'}%] rounded-md`} src={imageSrc} />
              </div>
            </div>
            <div className="sticky top-0 flex flex-col md:w-1/2 px-4 h-full w-full">

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
                {header}
              </h2>
              <p className="text-xl w-full">
                {bodyText}
              </p>
            </div>
          </>

      }
    </section>
  )
}
