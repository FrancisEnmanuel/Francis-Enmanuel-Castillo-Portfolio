import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Skills from '@/components/Skills'
import Trayectoria from '@/components/Trayectoria'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />

      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Skills />
        <Trayectoria />
        <Contact />
      </main>
      <Footer />

      <RevealInit />
    </>
  )
}
