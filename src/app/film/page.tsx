import Container from "@/app/_components/container";
import { filmDirectory, getAllImageFileNames } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { ibmPlexMono } from "../_components/fonts";
import { Suspense } from "react";
import { ImgSkeleton } from "../_components/skeletons";

export default function Index() {
  const images = getAllImageFileNames(filmDirectory)

  return (
    <main>
      <Container>
        <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className=" animate-fadeInUp text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Photography
          </h1>
          <h4 className={`${ibmPlexMono.className} animate-fadeInUp text-center md:text-left text-lg mt-5 `}>
            Point and shoot film
          </h4>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map(img => {
              return (
                <Link href={`film/${img}`} className="relative h-44 w-44">
                  <Suspense key={img} fallback={<ImgSkeleton />}>
                    <Image alt={`${img} film`} loading='lazy' className="object-cover hover:object-right-bottom transition-all duration-[1000ms] ease-in-out" sizes="(min-width: 300px) 50vw, 100vw" src={`/assets/film/${img}`} fill />
                  </Suspense>
                </Link>
              )
            })}
          </div>
        </section>
      </Container>
    </main>
  );
}
