import {motion} from 'motion/react'
import photoshop from '../assets/images/photoshop.svg'
import indesign from '../assets/images/indesign.svg'
import illustrator from '../assets/images/illustrator.svg'
import autocad from '../assets/images/autocad.png'
import rhinoceros from '../assets/images/rhinoceros.svg'
import lumion from '../assets/images/Lumion.svg'
import revit from '../assets/images/Revit.png'
import enscape from '../assets/images/enscape.png'
import sketchup from '../assets/images/sketchup.svg'

export default function Marquee(){

    const softwares=[{
        src: photoshop,
        name:"Photoshop"
    },
    {
        src:indesign,
        name:"InDesign"
    },
    {
        src: illustrator,
        name:"Adobe illustrator"
    },
    {
        src: autocad,
        name:"Autocad"
    },
    {
        src: rhinoceros,
        name:"Rhinoceros"
    },
    {
        src: lumion,
        name:"Lumion"
    },
    {
        src: revit,
        name:"Revit"
    },
    {
        src: enscape,
        name:"Enscape"
    },
    {
        src: sketchup,
        name:"Sketchup"
    },
]

    return(<>
    <div className="relative overflow-hidden pointer-events-none"></div>
        <div className="pointer-events-none absolute top-full -translate-y-1/2 flex justify-center items-center overflow-hidden w-full h-full ">
            <div className=" absolute bottom-1/2  -left-2 -right-2 -rotate-4 md:-rotate-2 h-[4em] md:h-[7em] bg-wood-brown"></div>
        </div>
        <div className="w-full bg-gray-sky before-custom h-[4em] md:h-[7em] relative overflow-hidden">
            <motion.div className={`flex -right-4 gap-10 absolute flex-nowrap w-fit whitespace-nowrap top-1/2 -translate-y-1/2`}
                initial="off"
                animate="on"
                variants={{
                    off: {right:`0%`,x:"100%"},
                    on:{right:"100%", x:"0%"}
                }}
                transition={{ ease: "linear", duration: 40, repeat: Infinity, repeatType:"loop" }}
            >
            {softwares.map((software,index)=>(
                <div key={index} className="flex items-center gap-10 ">
                    <h3 className="text-2xl md:text-4xl font-alta text-wood-brown">{software.name}</h3>
                    <div className="md:w-[4em] w-[2.5em]">
                        <img  src={software.src} alt={software.name}/>
                    </div>
                </div>
            ))}
            </motion.div>
        </div>
    </>)
}