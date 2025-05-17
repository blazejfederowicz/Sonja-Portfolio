import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import bg from '../assets/images/bg.jpg'
import Events from "./Events";
import Projects from "./Projects";
import { useEffect, useState } from "react";
import image2 from '../assets/images/image2.png';
import {motion} from "motion/react"
import { useNavigate } from "react-router-dom"


export default function Home(){
    const [footerPosition, setFooterPosition] = useState(null)
    const navigate = useNavigate();

    const handleClick = (e)=>{
        setFooterPosition(e.currentTarget.getBoundingClientRect())
        document.documentElement.classList.remove("scroll-smooth")
    }

    useEffect(()=>{
        document.body.classList.remove("overflow-hidden")
        const html=document.documentElement.classList;

        window.scrollTo(0,0)

        if(!html.contains("scroll-smooth")) {html.add("scroll-smooth")}
    },[])

    return(
        <>
            <header className="h-lvh relative bg-no-repeat bg-cover" style={{background:`url(${bg})`}}>
                <div className="absolute inset-0 top-0 bg-white/70"></div>
                <Navbar/>
                <Hero/>
            </header>
            <main className="h-fit">
                <About/>
                <Events/>
                <Projects/>
            </main>
            <footer className="w-full overflow-hidden">
                <div className="w-full bg-center h-[20em] py-16 mt-25 md:mt-50 bg-no-repeat bg-cover cursor-pointer transition-transform duration-300 translate-y-5 hover:translate-y-0 active:translate-y-0"
                    style={{backgroundImage:`url(${image2})`}}
                    onClick={(e)=>handleClick(e)}
                >
                    <div className="w-3/4 h-full mx-auto">
                        <h1 className="text-7xl text-white font-alta">Contact</h1>
                    </div>
                </div>
            </footer>
            {footerPosition&&(
                <motion.div
                className="w-full bg-center bg-no-repeat bg-cover"
                style={{backgroundImage:`url(${image2})`}}
                initial="start"
                variants={{
                    start:{height:footerPosition.height, top:footerPosition.top, position:"fixed", zIndex:9999},
                    end:{height:"100vh", top:0}
                }}
                animate="end"
                transition= {{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                onAnimationComplete={()=> navigate("/contact")}
            >
                <div className="w-3/4 h-full mx-auto py-16">
                    <motion.h1 className="text-7xl text-white font-alta"
                        initial={{opacity:1}}
                        animate={footerPosition?{opacity:0, transition:{duration:0.4}}:false}
                    >Contact</motion.h1>
                </div>
            </motion.div>
            )}
        </>
    )
}