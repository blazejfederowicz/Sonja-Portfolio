import {motion,useAnimation,useInView} from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export const Reveal = ({children, customStyle})=>{
    const ref = useRef(null)
    const view = useInView(ref,{once:true})
    const [styles, setStyles]= useState(`h-full ${customStyle}`)
    const controls = useAnimation()

    useEffect(()=>{
        if(view){
            controls.start("visible")//.then(()=>setStyles(""))
        }
    },[view])

    return(
        <div ref={ref} className={styles}>
            <motion.div
                className='w-fit h-full'
                initial="hidden"
                animate={controls}
                transition={{ 
                    duration: 0.8,
                    ease: [0, 0.41, 0.2, 1.01],}}
                variants={{
                    visible:{opacity:1,transform:"translateX(0px)"},
                    hidden:{opacity:0,transform:"translateX(-100px)"}
                }}
                viewport={{once: true}}
            >{
                children
            }
            </motion.div>   
        </div>
    )
} 