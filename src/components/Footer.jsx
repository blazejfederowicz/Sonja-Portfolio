import paronama from '../assets/images/paronama.svg'
import { Link } from 'react-router-dom'
import { useProjects } from '../utils/ProjectContext'

export default function Footer (){
    const projects = useProjects()

    return(<>
        <footer className="bg-gray-sky relative">
            <div className="flex justify-between gap-[2em] mb-5">
                <div className="w-[4em] ms-5 h-[2em] rounded-full relative bg-white-almost -translate-y-1/2"></div>
                <div className="w-1/2 mx-auto -translate-y-1/2 h-[3em] rounded-b-full bg-white"></div>
                <div className="w-[4em] me-5 h-[2em] rounded-full relative bg-white-almost -translate-y-1/2"></div>
            </div>
            <div className="container px-2 mx-auto mb-5  w-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-start gap-[3em]  rounded-full ">
                <div className="h-[10em] flex justify-center col-span-2 sm:col-span-3 md:col-span-1 ">
                    <img src={paronama} className='h-full' loading="lazy" alt="Paronama"/>
                </div>
                <div className="flex flex-col items-center sm:items-end justify-center order-1 sm:order-none">
                    <div className="flex flex-col">
                        <h4 className='text-lg sm:text-xl md:text-3xl mb-3 font-bold text-wood-brown'>Links</h4>
                        <Link to="/" className='py-1 text-sm sm:text-base md:text-lg font-medium text-wood-brown/60 hover:text-wood-brown active:text-wood-brown/90'>Home</Link>
                        <Link to="/contact" className='py-1 text-sm sm:text-base md:text-lg font-medium text-wood-brown/60 hover:text-wood-brown active:text-wood-brown/90'>Contact</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col">
                        <h4 className='text-lg sm:text-xl md:text-3xl mb-3 font-bold text-wood-brown'>Socials</h4>
                        <Link to="https://github.com/" className='py-1 text-sm sm:text-base md:text-lg font-medium text-wood-brown/60 hover:text-wood-brown active:text-wood-brown/90'>Github</Link>
                        <Link to="https://www.linkedin.com/" className='py-1 text-sm sm:text-base md:text-lg font-medium text-wood-brown/60 hover:text-wood-brown active:text-wood-brown/90'>Linkedin</Link>
                        <Link to="https://www.instagram.com/" className='py-1 text-sm sm:text-base md:text-lg font-medium text-wood-brown/60 hover:text-wood-brown active:text-wood-brown/90'>Instagram</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:items-start justify-center col-span-2 sm:col-span-1 order-2 sm:order-none">
                    <h4 className='text-lg sm:text-xl md:text-3xl mb-3 font-bold text-wood-brown'>Projects</h4>
                    <div className="flex flex-col flex-wrap h-[8em]">
                        
                        {projects.map(e=>(
                            <Link key={e.index} to={`/project/${e.index}`} className='py-1 text-sm sm:text-base md:text-lg font-medium me-2 text-wood-brown/60 hover:text-wood-brown active:text-wood-brown/90'>Project {e.index}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="border-salmon"/>
            <div className="flex justify-center items-center px-5 py-7">
                <p className="text-wood-brown">©Copyright {new Date().getFullYear()} by Name. All rights reserved</p>
            </div>
        </footer>
    </>)
}