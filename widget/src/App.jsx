import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { TestimonialsWidget } from './components/widget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestimonialsWidget projectId={"1"}/>
    </>
  )
}

export default App
