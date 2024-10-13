import { Montserrat, IBM_Plex_Mono } from 'next/font/google'
 
export const monts = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})
 
export const ibm = IBM_Plex_Mono({ 
    weight: ["300", "400", "700"],
    subsets: ["latin"] 
});