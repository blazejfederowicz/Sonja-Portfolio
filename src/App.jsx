import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Contact from './components/Contact'
import { AnimatePresence } from 'motion/react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setIsLoading(true);
    document.body.classList.add("overflow-hidden")
    const handler = setTimeout(()=>{
      setIsLoading(false)
    },2000)

    return()=>{
      clearTimeout(handler)
    }
  },[])

  const handleExitComplete=()=>document.body.classList.remove("overflow-hidden");
  

  return (
    <>
    <AnimatePresence onExitComplete={handleExitComplete}>
      {true&& <LoadingScreen bool={true}/>}
    </AnimatePresence>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
