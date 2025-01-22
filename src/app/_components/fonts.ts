import { Figtree, IBM_Plex_Mono } from "next/font/google";
import localFont from 'next/font/local'

export const figTree = Figtree({ subsets: ["latin"] });
export const ibmPlexMono = IBM_Plex_Mono({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] })
export const sampler = localFont({
  src: [
    {
      path: '../../../public/fonts/Sampler-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Sampler-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Sampler-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ]
})
