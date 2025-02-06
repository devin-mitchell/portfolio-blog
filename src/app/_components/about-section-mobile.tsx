import { AboutSectionType } from "@/utils/constants";
import Image from "next/image";


export function AboutSectionMobile({ header, bodyText, imageAlt, imageSrc }: Omit<AboutSectionType, 'imageDisplacement'>) {
  return (
    <section className="md:hidden w-full pb-12">
      <div className="w-full">
        <div className="w-full h-48 relative flex flex-col items-start">
          <Image alt={imageAlt} fill className={`object-cover rounded-md`} src={imageSrc} />
          <h2 className="animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight absolute bottom-2 left-4 text-white">
            {header}
          </h2>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="text-xl w-full ">
          {bodyText}
        </p>
      </div>
    </section>
  )
}
