import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Contact from './components/Contact'
import { AnimatePresence } from 'motion/react'
import Project from './components/Projects/Project'
import NotFound from './components/NotFound'
import { ProjectProvider } from './utils/ProjectContext'

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

    <ProjectProvider>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project/:id' element={<Project/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </ProjectProvider>
    </>
  )
}

export default App
