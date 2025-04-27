import {motion} from 'motion/react'

export default function Marquee(){
    const softwares=[{
        src:"",
        name:"Photoshop"
    },
    {
        src:"",
        name:"In design"
    },
    {
        src:"",
        name:"Adobe illustrator"
    },
    {
        src:"",
        name:"Autocad"
    },
    {
        src:"",
        name:"Rhinoceros"
    },
    {
        src:"",
        name:"Lumion"
    },
    {
        src:"",
        name:"Revit"
    },
    {
        src:"",
        name:"Enscape"
    },
    {
        src:"",
        name:"Sketchup"
    },
]

    return(<>
    <div className="relative mt-96 "></div>
        <div className="w-lvw absolute -left-2 -rotate-2 h-[7em] bg-wood-brown"></div>
        <div className="w-full bg-gray-sky h-[7em] relative overflow-hidden">
            <motion.div className="flex gap-10 absolute top-1/2 -translate-y-1/2"
                initial={{x:"-100%"}}
                animate={{x:"100%"}}
                transition={{ ease: "linear", duration: 15, repeat: Infinity, repeatType:"loop" }}
            >
            {softwares.map((sofware,index)=>(
                <div key={index} className="flex">
                    <h3 className="text-4xl font-alta text-wood-brown">{sofware.name}</h3>
                    <img/>
                </div>
            ))}
            </motion.div>
        </div>
    </>)
}