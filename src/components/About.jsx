import { useEffect, useRef, useState } from "react"
import { Reveal } from "../utils/Reveal"


export default function About(){
    const parentRef = useRef(null)
    const [childWidth, setChildWidth] = useState(0)

    const aboutContent = [{
        title:"Conceptual Design",
        message:"Transforming ideas into strong, creative spatial concepts."
    },
    {
        title:"Technical Drafting",
        message:"Creating precise drawings for clear construction guidance."
    },
    {
        title:"Modeling & Visualization",
        message:"Building detailed models to visualize design intent clearly."
    },
    {
        title:"Project Coordination",
        message:"Managing tasks and teams to ensure smooth project delivery. "
    },
]

    useEffect(()=>{
        const updateWidth = ()=>{
            if(parentRef.current){
                setChildWidth(`${parentRef.current.offsetWidth}px`)
            }
        }

        updateWidth();
        window.addEventListener("resize",updateWidth);

        return()=>{
            window.removeEventListener("resize",updateWidth);
        }
    },[])

    return(
        <section id="about" className="container mx-auto px-2 pt-22 mb-22">
            <div className="flex">
                <Reveal>
                <h2 className="font-alta text-4xl tracking-widest text-gray-600">About<span className="tracking-tight">||</span></h2>
                </Reveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-[2em] max-w-[420px] sm:max-w-[700px] w-full mt-24">
                {aboutContent.map((e,i)=>(
                    <div key={i}>
                        <div ref={parentRef} className="relative h-[3em]">
                            <Reveal>
                            <div className="h-[2.5em] w-[2.5em] border-salmon relative border-2 rounded-full after:content-[''] after:block after:h-[2px] after:w-[calc(var(--child-width)-2.5em)] after:bg-salmon after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 before:content-['skill'] before:font-alta before:text-salmon sm:before:text-xl before:absolute sm:before:-top-2 sm:before:left-[130%] before:-top-1 before:left-[110%]" style={{'--child-width': childWidth}}>
                                <i className="bi bi-check absolute flex top-1/2 left-1/2 -translate-1/2 text-3xl text-salmon"></i>
                            </div>
                            </Reveal>
                        </div>
                        <div className="flex flex-col items-start justify-center mx-10 sm:mx-5 md:mx-10 text-gray-800">
                            <Reveal>
                            <h4 className="font-bold text-2xl sm:text-2xl">{e.title}</h4>
                            </Reveal>
                            <Reveal>
                            <p className="sm:text-2xl text-lg mt-2">{e.message}</p>
                            </Reveal>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}