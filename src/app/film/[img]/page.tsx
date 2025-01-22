import { BackButton } from "@/app/_components/back-button"
import Container from "@/app/_components/container"
import { Intro } from "@/app/_components/intro"
import Image from "next/image"

type Props = {
  params: Promise<{ img: string }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const img = params.img

  return (
    <main>
      <Container>
        <div className="flex flex-col justify-start h-[90vh] w-full mt-12 gap-4">
          <BackButton href={'/film'} />
          <div className="relative h-full w-full">
            <Image key={img} alt={`${img} film`} priority className="object-cover object-center rounded" sizes="(min-width: 300px) 50vw, 100vw" src={`/assets/film/${img}`} fill />
          </div>
        </div>
      </Container>
    </main >
  )
}
