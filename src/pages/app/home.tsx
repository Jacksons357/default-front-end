import { Helmet } from 'react-helmet-async'
import { About } from './sections/about'
import { BannerHomePage } from '@/components/banner-home-page'

export function HomePage() {
  return (
    <>
      <Helmet title="Inicio" />

      <BannerHomePage />
      <About />
    </>
  )
}
