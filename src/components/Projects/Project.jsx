import { motion } from 'motion/react'
import image1 from '../../assets/images/image1.png'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Project(){
    const {id} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <motion.div className="w-full h-lvh bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${image1})`}}>

            </motion.div>
            <div className="h-lvh"></div>
        </>
    )
}