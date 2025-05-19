import { Reveal } from "../utils/Reveal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {motion} from 'motion/react'
import {useProjects} from '../utils/ProjectContext'


export default function Projects(){
    const [animateProject, setAnimateProject] = useState(null)
    const [hoverAnim, setHoverAnim] = useState(true)
    const navigate = useNavigate()
    const [canClick, setCanClick] = useState(true)
    const projectsArr = useProjects()


    const handlePageTransition = (element,event)=> {
        if(!canClick) return;

        document.body.classList.add("overflow-hidden")
        document.documentElement.classList.remove("scroll-smooth")

        const rect = event.currentTarget.getBoundingClientRect();

        setAnimateProject({
            index: element.index,
            src: element.src,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        })

        setHoverAnim(false)
        setCanClick(false)
    }


    return(<>
        <section id="projects" className="container px-2 mx-auto mt-28">
            <div>
                <Reveal>
                <h2 className="font-alta text-4xl tracking-widest text-gray-600">Projects<span className="tracking-tight">||</span></h2>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-[1em] max-w-[400px] md:max-w-[1000px] w-full mx-auto mt-25">
                    <div className="flex w-full flex-col gap-[1em]">
                    {projectsArr.filter((_,i)=> i%2===0).map((e,i)=>{
                        return(
                        <motion.div  key={`even-${e.index}`} 
                        whileHover={hoverAnim ? { scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
                                    transition:{
                                        duration:0.28
                                    }
                                 } : {}}
                        >
                            <motion.div onClick={(event)=>handlePageTransition(e,event)} className={` text-white bg-center bg-no-repeat bg-cover ${hoverAnim?`cursor-pointer`:''}`} 
                                style={{backgroundImage:`url(${e.src})`,height:e.height}}
                                whileHover={hoverAnim ? { scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
                                    transition:{
                                        duration:0.28
                                    }
                                 } : {}}
                                initial={{transform:"translateX(-100px)", opacity:0}}
                                whileInView={{transform:"translateX(0)",opacity:1, transition:{delay:0.2, ease:[0.4,0.2,0.6,1]}}}
                                viewport={{once:true}}
                            />
                       </motion.div>
                    )})}
                    </div>
                    <div className="flex w-full flex-col gap-[1em]">
                    {projectsArr.filter((_,i)=> i%2!==0).map((e,i)=>{
                        return(
                        <motion.div  key={`odd-${e.index}`}
                        whileHover={hoverAnim ? { scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
                                    transition:{
                                        duration:0.28
                                    }
                                 } : {}}
                        >
                            <motion.div onClick={(event)=>handlePageTransition(e,event)} className={` text-white bg-center bg-no-repeat bg-cover ${hoverAnim?`cursor-pointer`:''}`} 
                                whileHover={hoverAnim ? { scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
                                    transition:{
                                        duration:0.28
                                    }
                                 } : {}}
                                style={{backgroundImage:`url(${e.src})`,height:e.height}}
                                initial={{transform:"translateX(100)", opacity:0}}
                                whileInView={{transform:"translateX(0)",opacity:1, transition:{delay:0.2, ease:[0.4,0.2,0.6,1]}}}
                                viewport={{once:true}}
                            />
                       </motion.div>
                    )})}
                    </div>
                    {animateProject && (
                        <motion.div
                            initial={{
                            position: "fixed",
                            top: animateProject.top,
                            left: animateProject.left,
                            width: animateProject.width,
                            height: animateProject.height,
                            backgroundImage: `url(${animateProject.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            zIndex: 9999,
                            }}
                            animate={{
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
                            }}
                            onAnimationComplete={() => {
                            navigate(`/project/${animateProject.index}`);
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    </>)
} 