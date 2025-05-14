import { Reveal } from "../utils/Reveal"
import image1 from '../assets/images/image1.png'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {motion, useAnimation} from 'motion/react'


export default function Projects(){
    const [screenWidth, setScreenWidth] = useState(0)
    const [hoverAnim, setHoverAnim] = useState(true)
    const controls = useAnimation()

    const handlePageTransition = ()=> controls.start("middle").then(()=> controls.start('end'))

    const projectsArr = [
        {
            height:400,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            height:200,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            height:200,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            height:400,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            height:200,
            title:"Lorem Ipsum",
            src:image1
        },
    ]

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
                    {projectsArr.filter((_,i)=> i%2===0).map((e,i)=>(
                        
                            <motion.div onClick={handlePageTransition} key={i} className={` text-white bg-center bg-no-repeat bg-cover ${hoverAnim?`cursor-pointer transition-[transform_box-shadow] duration-400 ease-out hover:shadow-2xl hover:scale-95`:''}`} 
                                style={{backgroundImage:`url(${e.src})`}}
                                initial="start"
                                onAnimationStart={()=> setHoverAnim(false)}
                                animate={controls}
                                variants={{
                                    start:{width:"100%",height:e.height, position:"static"},
                                    middle:{scale:2, transition:{
                                        duration: 1
                                    },},
                                    end:{ position:"fixed", height:"100%", zIndex:1000, top:0, left:0, bottom:0},
                                }}
                            />
                       
                    ))}
                    </div>
                    <div className="flex w-full flex-col gap-[1em]">
                    {projectsArr.filter((_,i)=> i%2!==0).map((e,i)=>(
                        <Reveal>
                            <motion.div key={i} className=" w-full cursor-pointer text-white bg-center bg-no-repeat bg-cover transition-[transform_box-shadow] duration-400 ease-out hover:shadow-2xl hover:scale-95" style={{backgroundImage:`url(${e.src})`, height:e.height}}/>
                        </Reveal>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    </>)
} 