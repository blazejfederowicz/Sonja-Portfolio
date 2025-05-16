import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import bg from '../assets/images/bg.jpg'
import Events from "./Events";
import Projects from "./Projects";
import { useEffect } from "react";

export default function Home(){

    useEffect(()=>{
        document.body.classList.remove("overflow-hidden")
    },[])

    return(
        <>
            <header className="h-lvh relative bg-no-repeat bg-cover" style={{background:`url(${bg})`}}>
                <div className="absolute inset-0 top-0 bg-white/70"></div>
                <Navbar/>
                <Hero/>
            </header>
            <main >
                <About/>
                <Events/>
                <Projects/>
            </main>
        </>
    )
}