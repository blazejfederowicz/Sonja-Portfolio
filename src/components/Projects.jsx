import { Reveal } from "../utils/Reveal"
import image1 from '../assets/images/image1.png'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {motion, useAnimation} from 'motion/react'


export default function Projects(){
    const [screenWidth, setScreenWidth] = useState(0)
    const [hoverAnim, setHoverAnim] = useState(true)
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(null)
    const [canClick, setCanClick] = useState(true)
    const controls = useAnimation()

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
            anim2:{ position:"fixed", height:"100%", zIndex:1000, top:0, left:0, bottom:0, transition:{
                delay:1,
            }},
        }
        
    }

    const handlePageTransition = async (index)=> {
        setCanClick(false)
        setActiveIndex(index)
        setHoverAnim(false)
        await controls.start("anim1")
        await controls.start('anim2')
        await navigate(`/project${index}`)
    }

    const projectsArr = [
        {
            index:1,
            height:400,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            index:2,
            height:200,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            index:3,
            height:200,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            index:4,
            height:400,
            title:"Lorem Ipsum",
            src:image1
        },
        {
            index:5,
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
                    {projectsArr.filter((_,i)=> i%2===0).map((e,i)=>{
                        const isActive = e.index === activeIndex
                        return(
                            <div  key={`even-${e.index}`}>
                            <motion.div layout onClick={()=>canClick?handlePageTransition(e.index):false} className={` text-white bg-center bg-no-repeat bg-cover ${hoverAnim?`cursor-pointer transition-[transform_box-shadow] duration-400 ease-out hover:shadow-2xl hover:scale-95`:''}`} 
                                style={{backgroundImage:`url(${e.src})`}}
                                initial="hidden"
                                whileInView="visible"
                                animate={isActive?controls:false}
                                variants={variants(e)}
                                viewport={{once:true}}
                            />
                       </div>
                    )})}
                    </div>
                    <div className="flex w-full flex-col gap-[1em]">
                    {projectsArr.filter((_,i)=> i%2!==0).map((e,i)=>{
                        return(
                        <div key={`odd-${e.index}`}>
                        <motion.div  className=" w-full cursor-pointer text-white bg-center bg-no-repeat bg-cover transition-[transform_box-shadow] duration-400 ease-out hover:shadow-2xl hover:scale-95" style={{backgroundImage:`url(${e.src})`, height:e.height}}
                        />
                        </div>
                    )})}
                    </div>
                </div>
            </div>
        </section>
    </>)
} 