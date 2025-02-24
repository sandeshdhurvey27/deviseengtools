import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/heros'
import About from './sections/about'
import ContactPage from './sections/contact'
import MachineGallery from './sections/machine'

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className='relative w-full overflow-x-hidden'>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="machine">
          <MachineGallery />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
    </div>
  )
}

export default App