import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Challenges from './components/Challenges'
import HowItWorks from './components/HowItWorks'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CTFChallenge from './components/CTFChallenge'
import Registration from './components/Registration'
import { useState } from 'react'
import './App.css'

function App() {
  const [isProtocolOpen, setIsProtocolOpen] = useState(false)
  const [isRegistrationUnlocked, setIsRegistrationUnlocked] = useState(false)

  return (
    <>
      <Navbar onRegister={() => setIsProtocolOpen(true)} />
      <Hero onRegister={() => setIsProtocolOpen(true)} />
      <About />
      <Challenges />
      <HowItWorks />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Registration
        isUnlocked={isRegistrationUnlocked}
        onOpenProtocol={() => setIsProtocolOpen(true)}
      />
      <Footer />
      <CTFChallenge
        isOpen={isProtocolOpen}
        onClose={() => setIsProtocolOpen(false)}
        onAccessGranted={() => setIsRegistrationUnlocked(true)}
      />
    </>
  )
}

export default App
