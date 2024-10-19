import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Products } from './Components/Products'
import { Testimonials } from './Components/Testimonials'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
