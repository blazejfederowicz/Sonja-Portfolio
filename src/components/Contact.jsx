import Navbar from "./Navbar";
import { Reveal } from "../utils/Reveal";
import { useEffect } from "react";
import contact from '../assets/images/contact.jpg'
import Footer from "./Footer";
import {motion} from "motion/react"

export default function Contact(){

    useEffect(()=>{
        
        window.scrollTo(0,0)
    },[])

    return(<>
            <motion.header className="w-full h-lvh bg-center bg-no-repeat bg-cover min-h-[200px] md:min-h-[250px]" style={{backgroundImage:`url(${contact})`}}
                initial={{
                    height:"100vh",
                }}

                whileInView={{
                    height:"25vh",
                    transition:{
                        duration:0.4,
                        ease:[0.4,0.2,0.6,1],
                        delay:2
                    }
                }}
                onAnimationComplete={()=>document.body.classList.remove("overflow-hidden")}
                viewport={{once:true}}
            >
                <Navbar delay={0.5} home={true}/>
                <motion.div className="md:px-20 px-5 mx-auto container flex flex-col items-start justify-end h-full"
                    initial={{
                        paddingBottom:"10em"
                    }}
                    whileInView={{
                        paddingBottom:"3em",
                        transition:{
                            delay:2,
                            duration:0.4,
                            ease:[0.4,0.2,0.6,1]
                        }
                    }}
                    viewport={{once:true}}
                >
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
                        <p className='text-white font-bold tracking-widest text-xs sm:text-base text-shadow-[0px_2px_10px_rgba(0,0,0,0.5)]'>CONTACT</p>
                        <div className="h-[2em] md:h-[3em] w-[1px] bg-white/70 mx-5"></div>
                        <p className='text-white/70 font-bold tracking-widest text-xs sm:text-base text-shadow-[0px_2px_10px_rgba(0,0,0,0.5)]'>STAY CONNECTED</p>
                    </motion.div>
                    <motion.h1 className="text-white text-shadow-[0px_10px_20px_rgba(0,0,0,0.5)] text-4xl md:text-7xl tracking-widest font-bold font-alta "
                        initial={{
                            clipPath:"inset(0 100% 0 0)",
                            opacity:0
                        }}
                        whileInView={{
                            clipPath:"inset(0 0 0 0)",
                            opacity:1,
                            transition:{
                                delay:1.2,
                                duration:0.6,
                                ease:[0.4,0.2,0.6,1]
                            }
                        }}
                        viewport={{once:true}}
                    >Get In Touch</motion.h1>
                </motion.div>
            </motion.header>
            <main className="container mx-auto px-2 mt-20">
                <Reveal>
                    <h2 className="font-alta text-4xl tracking-widest text-gray-600 mb-10">Contact<span className="tracking-tight">||</span></h2>
                </Reveal>
                <div className="container max-w-xl lg:max-w-5xl px-5 sm:px-6 lg:px-8 mx-auto mb-40 mt-10 md:mt-0 md:mb-42">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mx-auto">
                        <div className="rounded-lg border text-gray-800 shadow-sm bg-neutral-100 backdrop-blur-sm border-zinc-50">
                        <Reveal custom="overflow-hidden h-full">
                        <div className="p-6 space-y-6">
                            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                            <div className="space-y-4 text-sm sm:text-base">
                            <div className="flex items-start gap-3">
                                <div className="py-1 px-2 rounded-md bg-indigo-200/10 text-salmon shrink-0 ">
                                <i className="bi bi-geo-alt"></i>
                                </div>
                                <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-gray-600">State, USA</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                            <div className="py-1 px-2 rounded-md bg-indigo-200/10 text-salmon shrink-0">
                                <i className="bi bi-envelope"></i>
                            </div>
                                <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="" className="text-gray-600 hover:text-salmon2 active:text-salmon2 transition-colors break-all">email@gmail.com</a>
                                </div>
                            </div>
                            </div>
                            <div className="pt-4 border-t border-border/50">
                            <h4 className="font-medium mb-3">Social Profiles</h4>
                            <div className="flex gap-3">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-neutral-200 hover:bg-salmon2/30 text-salmon hover:text-salmon2 active:text-salmon2 transition-colors">
                                    <i className="bi bi-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-neutral-200 hover:bg-salmon2/30 text-salmon hover:text-salmon2 active:text-salmon2 transition-colors">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="mailto:email@gmail.com" target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-neutral-200 hover:bg-salmon2/30 text-salmon hover:text-salmon2 active:text-salmon2 transition-colors">
                                    <i className="bi bi-envelope"></i>
                                </a>
                                </div>
                            </div>
                        </div>
                        </Reveal>
                        </div>
                        <Reveal custom="overflow-hidden">
                        <div className="rounded-lg border text-gray-800 shadow-sm bg-neutral-100 backdrop-blur-sm border-zinc-50">
                            <div className="p-6"><h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                <label className="text-sm font-medium leading-none " htmlFor="name">Name</label>
                                <input className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium ring-offset-salmon2 ring-salmon file:text-white text-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-400/20 border-zinc-50 mt-2" id="name" name="name" placeholder="Your name"/>
                                </div>
                                <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                                <input type="text" className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium ring-offset-salmon2 ring-salmon file:text-white text-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-400/20 border-zinc-50 mt-2" id="email" name="email" placeholder="your.email@example.com" />
                                </div>
                                <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="title">Title</label>
                                <input type="text" className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium ring-offset-salmon2 ring-salmon file:text-white text-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-400/20 border-zinc-50 mt-2" id="title" name="title" placeholder="Your title" />
                                </div>
                                <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Message</label>
                                <textarea className="flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background text-gray-800 focus-visible:outline-none focus-visible:ring-1 ring-offset-salmon2 ring-salmon  focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] bg-gray-400/20 border-zinc-50 mt-2" id="message" name="message" placeholder="Your message" style={{height: "21px"}}>
                                </textarea>
                                </div>
                                <button className="inline-flex overflow-hidden items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-salmon ring-salmon/50 transition-colors focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-salmon2 hover:bg-salmon/70 h-10 px-4 py-2 w-full" type="submit" value="Send">
                                <span className="flex items-center me-1 text-white">Send Message</span>
                                {/* {isSubmitting?
                                <svg className="spinner" viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                </svg>:
                                <i className="bi bi-send-fill"></i>
                                } */}
                                </button>
                            </form>
                            </div>
                        </div>
                        </Reveal>
                    </div>
                </div>
            </main>
            <Footer/>
    </>)
}