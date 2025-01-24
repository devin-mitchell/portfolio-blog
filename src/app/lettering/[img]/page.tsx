import { BackButton } from "@/app/_components/back-button"
import Container from "@/app/_components/container"
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
          <BackButton href={'/lettering'} />
          <div className="relative h-full w-full">
            <Image key={img} alt={`${img} lettering`} priority className="object-cover object-center rounded" src={`/assets/lettering/${img}`} fill />
          </div>
        </div>
      </Container>
    </main >
  )
}
