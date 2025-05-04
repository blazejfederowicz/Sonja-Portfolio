import { useEffect, useRef, useState } from "react"


export default function About(){
    const parentRef = useRef(null)
    const [childWidth, setChildWidth] = useState(0)

    const aboutContent = [{
        title:"Lorem ipsum",
        message:"dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien "
    },
    {
        title:"Lorem ipsum",
        message:"dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien "
    },
    {
        title:"Lorem ipsum",
        message:"dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien "
    },
    {
        title:"Lorem ipsum",
        message:"dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien "
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
        <section className="container mx-auto px-2 pt-22">
            <div className="flex">
                <h2 className="font-alta text-4xl tracking-widest text-gray-600">About<span className="tracking-tight">||</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-[2em] max-w-[420px] sm:max-w-[700px] w-full mt-24">
                {aboutContent.map((e,i)=>(
                    <div key={i}>
                        <div ref={parentRef} className="relative h-[3em]">
                            <div className="h-[2.5em] w-[2.5em] border-light-pink relative border-2 rounded-full after:content-[''] after:block after:h-[2px] after:w-[calc(var(--child-width)-2.5em)] after:bg-light-pink after:absolute after:left-full after:top-1/2 after:-translate-y-1/2" style={{'--child-width': childWidth}}>
                                <i className="bi bi-check absolute flex top-1/2 left-1/2 -translate-1/2 text-3xl text-light-pink"></i>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center mx-10 sm:mx-5 md:mx-10 text-gray-800">
                            <h4 className="font-bold text-2xl sm:text-2xl">{e.title}</h4>
                            <p className="sm:text-2xl text-lg mt-2">{e.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}