import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <AboutMe />
    <Projects />
    <Timeline />
    <Contact />
    <Analytics />
    </>
  )
}

export default App
