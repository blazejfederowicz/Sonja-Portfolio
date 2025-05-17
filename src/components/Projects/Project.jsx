import { motion } from 'motion/react'
import image1 from '../../assets/images/image1.png'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useProjects} from '../../utils/ProjectContext'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Project(){
    const {id} = useParams()
    const currentProject = useProjects().find(e=> e.index===parseInt(id,10))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <motion.header className="w-full h-lvh bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${image1})`}}>
                <motion.div className="w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    transition={{duration:0.3,ease:[0.4, 0, 0.9, 1]}}
                    variants={{
                        hidden:{backgroundColor:"rgba(0,0,0,0)"},
                        visible:{backgroundColor:"rgba(0,0,0,0.4)"}
                    }}
                >
                    <Navbar delay={0.5}/>

                </motion.div>
            </motion.header>
            <main className="h-lvh"></main>
            <Footer/>
        </>
    )
}