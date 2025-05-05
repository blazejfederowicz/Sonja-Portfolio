import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../utils/Reveal';
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'


export default function Events(){
    const ref = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(()=>{

        const updateResize=()=>{
            if(ref.current){
                const width = ref.current.offsetWidth;
                setHeight(width)
            }
        }

        updateResize()

        window.addEventListener("resize",updateResize);
        
        return()=>window.removeEventListener("resize", updateResize);
    },[])

    const events =[
        {
            sideText:"Dolor sit amet",
            title:"Dolor sit amet consectetur adipiscing",
            message:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo ",
            src: image1
        },
        {
            sideText:"Dolor sit amet",
            title:"Dolor sit amet consectetur adipiscing",
            message:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo ",
            src: image2
        },
    ]

    return(
        <>
            <section id='events' className="container px-2 mx-auto pt-44">
                <div className="flex">
                    <Reveal>
                    <h2 className="font-alta text-4xl tracking-widest text-gray-600">Events<span className="tracking-tight">||</span></h2>
                    </Reveal>
                </div>
                <div className="grid gap-[2em] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] mt-10">
                    <div className="">
                        <div className="h-full w-0 border-dashed mx-auto border-2 border-salmon2"></div>
                    </div>
                    <div className="">
                        {
                            events.map((e,i,arr)=>(
                                <div key={i}>
                                    <div className="w-full flex relative pe-10 sm:pe-20">
                                        <div ref={ref} className={`grow ${height<400?'h-[var(--height)]':'h-[25em]'} sm:h-[30em] bg-no-repeat bg-cover bg-center flex items-end sm:block`} style={{backgroundImage:`url(${e.src})`,'--height':`${height}px`}}>
                                            <div className="w-[15em] md:w-[22em] bg-white-almost h-[280px] sm:h-full py-10 sm:py-20 px-5 md:px-0 flex justify-center text-wood-brown flex-col shadow-2xl translate-y-1/3 sm:translate-0">
                                                <Reveal>
                                                <h5 className='md:text-xl sm:text-lg text-base tracking-wider md:ps-14 md:pe-5 font-semibold'>{e.title}</h5>
                                                </Reveal>
                                                <Reveal>
                                                <p className='mt-4 md:ps-14 md:pe-22 text-sm md:text-base'>{e.message}</p>
                                                </Reveal>
                                            </div>
                                        </div>
                                        <h3 className="rotate-90 tracking-wider w-[1.5em] h-fit box-border flex items-center justify-center text-salmon2 font-alta text-4xl sm:text-6xl leading-none whitespace-nowrap absolute right-0 top-1/2 -translate-y-1/2"><Reveal>{e.sideText}</Reveal></h3>
                                    </div>
                                    {i < arr.length - 1 && (
                                        <div className="w-full pe-20">
                                            <Reveal>
                                            <div className="w-2/3 mx-auto h-[4px] rounded-full bg-salmon2 mt-35 mb-10 sm:my-10" />
                                            </Reveal>
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}