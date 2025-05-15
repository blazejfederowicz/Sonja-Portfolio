import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Contact from './components/Contact'
import { AnimatePresence } from 'motion/react'
import Project1 from './components/Projects/Project1'
import NotFound from './components/NotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

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
    <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
      {isLoading&& <LoadingScreen bool={isLoading}/>}
    </AnimatePresence>

    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project1' element={<Project1/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
