import React, { Suspense, lazy } from 'react'
import ProjectProcess from './components/ProjectProcess'

// Lazy loaded components
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Skill = lazy(() => import('./components/Skill'))
const Skiper = lazy(() => import('./components/Project'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Home />
      <About />
      <Skill />
      <Skiper />
      <Contact />
      <ProjectProcess/>
    </Suspense>
  )
}

export default App
