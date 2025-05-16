import { Reveal } from "../utils/Reveal"
import image1 from '../assets/images/image1.png'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {motion, useAnimation} from 'motion/react'
import {useProjects} from '../utils/ProjectContext'


export default function Projects(){
    const [screenWidth, setScreenWidth] = useState(0)
    const [animateProject, setAnimateProject] = useState(null)
    const [hoverAnim, setHoverAnim] = useState(true)
    const navigate = useNavigate()
    const [canClick, setCanClick] = useState(true)
    const projectsArr = useProjects()

    const variants =(e) => {

        return {
            hidden:{opacity:0, translateX:"-100px",width:"100%",height:e.height, position:"static"},
            visible:{opacity:1, translateX:"0px",
                transition:{ 
                    duration: 0.8,
                    ease: [0.3, 0.41, 0.45, 1.01],
                    delay:0.2
                }
            },
            anim1:{scale:2, position:"absolute",x:"90%", width:"200px", transition:{
                duration: 1
            },},
            anim2:{ position:"fixed", height:"100vh", zIndex:1000, top:0, left:0, transition:{
                delay:1,
            }},
        }
        
    }

    const handlePageTransition = (element,event)=> {
        if(!canClick) return;

        document.body.classList.add("overflow-hidden")
        const rect = event.currentTarget.getBoundingClientRect();


        console.log(element.index)
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

    useEffect(()=>{
        const handleResize = ()=>setScreenWidth(window.innerWidth);
        handleResize()

        window.addEventListener("resize",handleResize);
        
        return()=> window.removeEventListener("resize",handleResize)
    },[])

    return(<>
        <section id="projects" className="container px-2 mx-auto h-lvh mt-50">
            <div>
                <Reveal>
                <h2 className="font-alta text-4xl tracking-widest text-gray-600">Projects<span className="tracking-tight">||</span></h2>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-[1em] max-w-[400px] md:max-w-[1000px] w-full mx-auto mt-25">
                    <div className="flex w-full flex-col gap-[1em]">
                    {projectsArr.filter((_,i)=> i%2===0).map((e,i)=>{
                        return(
                        <div  key={`even-${e.index}`}>
                            <motion.div layout onClick={(event)=>handlePageTransition(e,event)} className={` text-white bg-center bg-no-repeat bg-cover ${hoverAnim?`cursor-pointer transition-[transform_box-shadow] duration-400 ease-out hover:shadow-2xl hover:scale-102`:''}`} 
                                style={{backgroundImage:`url(${e.src})`,height:e.height}}
                            />
                       </div>
                    )})}
                    </div>
                    <div className="flex w-full flex-col gap-[1em]">
                    {projectsArr.filter((_,i)=> i%2!==0).map((e,i)=>{
                        return(
                        <div  key={`odd-${e.index}`}>
                            <motion.div layout onClick={(event)=>handlePageTransition(e,event)} className={` text-white bg-center bg-no-repeat bg-cover ${hoverAnim?`cursor-pointer transition-[transform_box-shadow] duration-400 ease-out hover:shadow-2xl hover:scale-102`:''}`} 
                                style={{backgroundImage:`url(${e.src})`,height:e.height}}
                            />
                       </div>
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
                            transition: { duration: 3, ease: [0.4, 0, 0.2, 1] },
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