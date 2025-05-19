import { motion } from 'motion/react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useProjects} from '../../utils/ProjectContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Reveal } from '../../utils/Reveal'
import { useState } from 'react'

export default function Project(){
    const [click, setClick] = useState(false);
    const {id} = useParams()
    const currentProject = useProjects().find(e=> e.index===parseInt(id,10))

    const handleClick = ()=>{
        
        document.documentElement.classList.add("scroll-smooth")
        window.scrollTo(0,window.innerHeight)
        document.body.classList.remove("overflow-hidden")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <motion.header className="w-full h-lvh bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${currentProject.src})`}}
            >
                <motion.div className="w-full h-full relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    transition={{duration:0.3,ease:[0.4, 0, 0.9, 1]}}
                    variants={{
                        hidden:{backgroundColor:"rgba(0,0,0,0)"},
                        visible:{backgroundColor:"rgba(0,0,0,0.3)"}
                    }}
                >
                    <Navbar delay={0.5} home={true} text='white'/>
                    <div className="container mx-auto px-5 md:px-10 h-full flex flex-col justify-end py-40 md:py-20">
                            <motion.div className="flex items-center justify-center w-fit"
                                initial={{
                                    opacity:0
                                }}
                                whileInView={{
                                    opacity:1,
                                    transition:{
                                        delay:0.8,
                                        duration:0.4,
                                    }
                                }}
                                viewport={{once:true}}
                            >
                                <p className='text-white font-bold tracking-widest text-xs sm:text-base md:text-lg text-shadow-[0px_2px_10px_rgba(0,0,0,0.5)]'>PROJECT</p>
                                <div className="h-[2em] md:h-[3em] w-[1px] bg-white/50 mx-5"></div>
                                <p className='text-white/50 font-bold tracking-widest text-xs sm:text-base md:text-lg text-shadow-[0px_2px_10px_rgba(0,0,0,0.5)]'>ARCHITECTURAL DESIGN</p>
                            </motion.div>
                            <motion.h1 className=' text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-alta tracking-widest max-w-[856px]'
                                initial={{
                                    clipPath:"inset(0 100% 0 0)",
                                    opacity:0
                                }}
                                whileInView={{
                                    clipPath:"inset(0 0 0 0)",
                                    opacity:1,
                                    transition:{
                                        delay:1.2,
                                        duration:1,
                                        ease:[0.4,0.2,0.6,1]
                                    }
                                }}
                                viewport={{once:true}}
                            >{currentProject.title}</motion.h1>
                            <Reveal delay={1}>
                            <p className='text-white/70 text-xs sm:text-base md:text-lg font font-medium tracking-widest mb-5 md:mb-10 md:mt-5 mt-2 max-w-[840px]'>{currentProject.description}</p>
                            </Reveal>
                            <motion.button onClick={handleClick} className='w-fit py-3 px-5 md:py-5 group md:px-10 border relative border-white/70 cursor-pointer before:absolute before:content-[""] before:transition-transform before:block before:origin-left before:h-full before:w-full before:bg-white before:top-0 before:left-0 before:scale-x-0 before:duration-400 before:-z-30 hover:before:scale-x-100 active:before:scale-x-100'
                                initial={{
                                    clipPath:"inset(0 0 100% 0)",
                                    opacity: 0
                                }}
                                whileInView={{
                                    clipPath:"inset(0 0 0 0)",
                                    opacity:1,
                                    transition:{
                                        delay:0.4,
                                        duration:0.5,
                                        ease:[0.4,0.2,0.6,1]
                                    }
                                }}
                                viewport={{once:true}}
                            >
                                <motion.p className='text-white font-bold tracking-wider text-xs md:text-base group-hover:text-black duration-150 transition-colors group-active:text-black'
                                    initial={{
                                        opacity:0
                                    }}
                                    whileInView={{
                                        opacity:1,
                                        transition:{
                                            duration:0.4,
                                            delay:0.6
                                        }
                                    }}
                                    viewport={{once:true}}
                                >READ MORE</motion.p>    
                            </motion.button>
                    </div>
                </motion.div>
            </motion.header>
            <main className="">
                <div className="w-full py-30 bg-neutral-300">
                    <div className="grid md:grid-cols-2 gap-[5em] sm:gap-[10em] md:gap-[10em] container mx-auto px-2">
                        <Reveal delay={0.3}>
                        <img src={currentProject.imageFirst} loading='lazy' className='md:h-full w-full object-cover object-center' alt={currentProject.title}/>
                        </Reveal>
                        <div className="w-full flex flex-col justify-center text-black/50 border-l-2 border-l-black/20 px-10">
                            <Reveal>
                            <h3 className='text-5xl mb-10'>{currentProject.title}</h3>
                            </Reveal>
                            <Reveal>
                            <p className=' text-lg max-w-[500px] whitespace-pre-line'>{currentProject.contentFirst}</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="w-full py-30">
                    <div className="grid md:grid-cols-2 gap-[5em] sm:gap-[10em] md:gap-[4em] lg:gap-[10em] container mx-auto px-2">
                        <motion.img src={currentProject.imageSecond} loading='lazy' className='md:order-1 md:h-full w-full object-cover object-center' alt={currentProject.title}
                        initial="hidden"
                        whileInView="visible"
                        transition={{delay:0.3}}
                        variants={{
                            visible:{opacity:1,transform:"translateX(0px)"},
                            hidden:{opacity:0,transform:"translateX(-100px)"}
                        }}
                        viewport={{once: true}}
                        />
                        <div className="w-full flex flex-col justify-center text-black/50 border-l-2 border-l-black/20 px-10">
                            <Reveal>
                            <h3 className='text-5xl mb-10'>{currentProject.title}</h3>
                            </Reveal>
                            <Reveal>
                            <p className=' text-lg max-w-[500px] whitespace-pre-line'>{currentProject.contentSecond}</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}