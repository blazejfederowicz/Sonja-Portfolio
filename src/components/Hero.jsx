import Marquee from "./Marquee";
import {Reveal} from '../utils/Reveal';
import {motion} from 'motion/react';
import { useRef, useState } from "react";
import pdf from '../assets/CV.pdf'
import bigBen from '../assets/images/bigBen.png'
import arch from '../assets/images/arch.png'

export default function Hero(){
    const [buttonSlide, setButtonSlide] = useState(false);
    const x = innerWidth<640?(2/7)*100: innerWidth<768?(2.33/7)*100:33

    const handleDwonload=()=>{
        setButtonSlide(true);
        setTimeout(() => {
            setButtonSlide(false)
        }, 500);
    }
    
    return(<>
        <section className="h-lvh flex flex-col pt-[80px]">
            <div className="w-full relative my-auto grow grid grid-rows-3 max-h-[200px] sm:max-h-[300px] md:max-h-[400px] grid-cols-[repeat(3,auto)] gap-[1em] md:gap-[2em] container mx-auto px-2">
                <p className="font-alta absolute rotate-90 -left-5 top-50 -z-50 -translate-y-1/2 hidden lg:block text-sm text-black/50">structure</p>
                <p className="font-alta absolute -rotate-90 -right-5 top-50 -z-50  hidden lg:block text-sm text-black/50">blueprint</p>
                <div className="absolute left-2 -bottom-0 -z-50 translate-y-1/2 flex-row-reverse gap-[1em] hidden lg:flex items-center">
                    <div className="w-[4em] h-[1px] bg-black/50"></div>
                    <p className="font-alta text-sm text-black/50">Façade</p>
                </div>
                <div className=" flex items-center justify-end">
                    <h1 className="font-alta font-light tracking-widest small text-5xl sm:text-6xl md:text-7xl text-end">Sonja</h1>
                </div>
                <div className=" flex items-center">
                    <h1 className="font-alta font-light tracking-widest small text-5xl sm:text-6xl md:text-7xl">Pengili</h1>
                </div>
                <div className="row-span-2">
                    <img src={bigBen} className="block" alt="bigBen"/>
                </div>
                <div className="flex sm:gap-8 gap-2 md:gap-4 xl:gap-8 justify-center col-span-2 md:col-span-1  items-center">
                    <Reveal>
                        <h1 className="font-alta text-end font-light w-fit tracking-widest text-black/70 text-xl sm:text-3xl md:text-4xl">Architecture student</h1>
                    </Reveal>
                    <Reveal>
                        <div className="h-[1px] min-w-[3em] sm:min-w-[4em] md:min-w-[6em] bg-black/50 "></div>
                    </Reveal>
                </div>
                <div className="flex items-center justify-end" style={{gridArea:"3/1/3/2"}}>
                <Reveal >
                    <a onClick={handleDwonload}  download="CV_Sonja_Pengili.pdf" className="relative cursor-pointer group md:p-4 p-3 text-xs group sm:text-base text-transparent bg-wood-brown rounded-4xl">
                        <motion.div className="absolute group-hover:bg-salmon group-active:bg-salmon transition-[background] duration-150 ease-in-out z-10 bottom-1/2 w-fit md:px-[0.85rem] px-[0.65rem] h-[90%] -translate-x-2/7 sm:-translate-x-1/3 flex items-center whitespace-nowrap translate-y-1/2 right-[1%]  text-xs sm:text-base text-white bg-light-pink rounded-4xl"
                            animate={buttonSlide ? {x:`${x}%`} : {x:0}}
                        >View My Portfolio</motion.div>
                        <span className="opacity-0 pointer-events-none">View My Portfolio</span>
                        <span className="md:p-5 sm:p-4 p-3 bg-white group-hover:bg-light-pink group-active:bg-light-pink transition-[background] duration-150 ease-in-out rounded-full absolute bottom-1/2 translate-y-1/2 right-1">
                            <div className="relative">
                                <i className="bi bi-caret-right-fill flex top-1/2 left-1/2 -translate-1/2 text-xl sm:text-2xl absolute  text-black group-hover:text-white group-active::text-white transition-colors duration-150 ease-in-out"></i>
                            </div>
                        </span>
                    </a>
                </Reveal>
                </div>
                <div className="flex items-center" style={{gridArea:"3/2/3/2"}}>
                <Reveal >
                    <a href="#projects" className="relative group md:p-4 p-3 text-xs sm:text-base text-wood-brown transition-colors duration-150 ease-in-out hover:text-wood-brown/70 active:brightness-95 bg-light-pinkk/18 rounded-4xl">
                        <span className="me-2">View projects</span>
                        <i className="bi bi-box-arrow-up-right"></i>
                        <div className="pointer-events-none absolute inset-px duration-150 ease-in-out rounded-4xl ring-1 group-hover:ring-wood-brown/30 shadow-sm ring-wood-brown/50"></div>
                    </a>
                </Reveal>
                </div>
                <div className="" style={{gridArea:"3/3/3/3"}}>
                    <img src={arch} className="block"/>
                </div>
            </div>
            <Marquee/>
        </section>
    </>)
}