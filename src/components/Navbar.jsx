import brand from "/brandIcon.svg"
import { Reveal } from "../utils/Reveal"
import { useEffect, useRef, useState } from "react"
import { useAnimation, motion, easeIn } from "motion/react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({delay=0,home=false,text="black"}){
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [ navLink, setNavLink] = useState(false);
    const ref = useRef(null)
    const controls = useAnimation()

    useEffect(()=>{
        const handleClickOutside=(e,ref,func)=>{
          if(ref.current && !ref.current.contains(e.target)){
            func(false)
          }
        }
  
        document.addEventListener("mousedown",(e)=> handleClickOutside(e, ref, setNavLink));
        return()=>{
          document.removeEventListener("mousedown",(e)=> handleClickOutside(e, ref, setNavLink)); 
        }
      },[])

    useEffect(()=>{
        if(navLink){
            controls.start("visible")
        } else{
            controls.start("hidden")
        }

        if (navLink && window.innerWidth<641) {
            setShowMenu(true);
        } else {
            setTimeout(() => setShowMenu(false), 300);
        }
    }, [navLink])

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


    return(<>
        <nav ref={ref} className={`fixed top-0 inset-x-0 z-[100] duration-300 overflow-hidden ${
        isScrolled || showMenu ? "bg-neutral-100/50 backdrop-blur-sm shadow-lg " : "bg-transparent "
      } ${isScrolled?"py-4":"py-5"} ${navLink && window.innerWidth<641 ? "max-h-[400px]" : "max-h-[80px]"}`}>
            <div className="container px-2 h-full flex justify-between items-center mx-auto">
                <Reveal delay={delay}>
                    <Link to="/" className="flex gap-5">
                        <img src={brand} className="h-[2.5em]"  alt="brand"/>
                        <p className="mt-3 font-alta text-[#525351]">Baroque</p>
                    </Link>
                </Reveal>
                <Reveal delay={delay}>
                    <div className="h-full custom-width flex items-center gap-6">
                        <div className="overflow-hidden w-full hidden sm:block">
                            <motion.ol
                                className="text-sm w-full lg:text-base flex justify-between"
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    visible:{opacity:1, x:0},
                                    hidden:{opacity:0, x:"100px"}
                                }}

                                transition={[easeIn]}
                            >
                                <li className="flex justify-center lg:w-[52px] w-[48px] opacity-80 mx-2 overflow-hidden tracking-widest cursor-pointer">
                                    <NavLink  to="/" className={`hover:font-semibold animLink duration-150 ease-in-out active:font-semibold text-${text}`}>Home</NavLink>
                                </li>
                                <li className={`lg:w-[55px] w-[49px] flex justify-center overflow-hidden duration-300 ${navLink?'mx-2 ease-in delay-75':'ms-1 ease-out'} opacity-80 tracking-widest`}>
                                    <a href={home?"/":"#about"} className={`hover:font-semibold animLink duration-150 ease-in-out active:font-semibold text-${text}`}>About</a>
                                </li>
                                <li className={`lg:w-[62px] w-[53px] flex justify-center duration-300 overflow-hidden ${navLink?'mx-2 ease-in delay-[50ms]':'ms-1 ease-out'} opacity-80 tracking-widest`}>
                                    <a href={home?"/":"#events"} className={`hover:font-semibold animLink duration-150 ease-in-out active:font-semibold text-${text}`}>Events</a>
                                </li>
                                <li className={`flex justify-center w-[65px] lg:w-[75px] duration-300 overflow-hidden ${navLink?'mx-2 ease-in delay-[25ms]':'ms-1 ease-out'} opacity-80 tracking-widest`}>
                                    <a href={home?"/":"#projects"} className={`hover:font-semibold animLink duration-150 ease-in-out active:font-semibold text-${text}`}>Projects</a>
                                </li>
                                <li className={`flex justify-center lg:w-[72px] w-[62px] duration-300 overflow-hidden ${navLink?'mx-2 ease-in delay-[25ms]':'ms-1 ease-out'} opacity-80 tracking-widest`}>
                                    <NavLink to="/contact" className={`hover:font-semibold animLink duration-150 ease-in-out active:font-semibold text-${text}`}>Contact</NavLink>
                                </li>
                            </motion.ol>
                        </div>
                        
                        <div className="nav-links order-1 sm:order-0 group relative cursor-pointer" onClick={()=>setNavLink(prev=> !prev)}>
                        <motion.div className="ease-in-out transition-colors duration-150 group-hover:bg-salmon2 group-active:bg-salmon2 h-[4px] bg-salmon mb-1"
                            initial="off"
                            animate={navLink?"on":"off"}
                            variants={{
                                on:{x:"-4px",y:"3px",rotate:"45deg", width:"2em"},
                                off:{x:0,y:0,rotate:0, width:"3em"}
                            }}
                        />
                        <motion.div className="w-[2em] transition-colors ease-in-out duration-150 group-hover:bg-salmon2 group-active:bg-salmon2 ms-auto h-[4px] bg-salmon "
                            initial="off"
                            animate={navLink?"on":"off"}
                            variants={{
                                on:{x:"-5px",y:"-5px",rotate:"-45deg"},
                                off:{x:0,y:0,rotate:0}
                            }}
                        />
                    </div>
                    <a className="sm:h-[2.5em] h-[2em] w-fit cursor-pointer">
                        <svg className="h-full w-fit" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g className="fill-salmon hover:fill-salmon2 active:fill-salmon2  ease-in-out duration-150" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M2310 5099 c-297 -28 -589 -110 -865 -243 -273 -131 -477 -277 -701
                        -500 -387 -388 -615 -826 -721 -1386 -15 -79 -18 -149 -18 -420 0 -352 4 -386
                        65 -630 59 -235 182 -525 306 -720 204 -321 503 -620 824 -824 100 -64 351
                        -186 475 -232 133 -49 372 -108 521 -129 159 -22 650 -17 784 9 268 52 465
                        117 695 231 283 140 495 294 711 518 195 201 334 398 458 648 309 621 350
                        1331 115 1993 -47 133 -163 373 -235 486 -197 310 -472 591 -774 791 -130 87
                        -410 226 -550 274 -352 121 -735 168 -1090 134z m372 -1397 c190 -51 349 -145
                        484 -284 131 -135 203 -258 261 -444 25 -84 27 -100 27 -279 0 -179 -2 -195
                        -27 -279 -33 -106 -83 -217 -126 -280 -17 -24 -31 -48 -31 -53 0 -4 97 -105
                        216 -223 118 -118 222 -228 231 -244 35 -66 9 -159 -57 -203 -39 -27 -116 -31
                        -158 -9 -15 8 -124 112 -242 230 -118 119 -219 216 -223 216 -5 0 -29 -14 -53
                        -31 -174 -119 -438 -183 -659 -159 -139 15 -230 41 -360 105 -208 101 -368
                        261 -471 470 -29 61 -63 146 -74 190 -109 425 50 865 405 1117 122 87 276 152
                        419 178 90 16 351 5 438 -18z"/>
                        <path d="M2242 3390 c-449 -118 -673 -641 -447 -1045 97 -173 271 -306 460
                        -351 91 -22 248 -22 340 0 229 55 434 243 510 467 37 111 46 279 20 394 -56
                        254 -267 470 -521 535 -102 26 -261 26 -362 0z"/>
                        </g>
                        </svg>
                    </a>
                    </div>
                </Reveal>
            </div>
            <div className="container px-2">
            { showMenu && (
                <div className="space-y-1 sm:hidden px-2 pt-2 pb-3 mt-6">
                <NavLink to="/" className="block rounded-md py-2 text-base font-medium text-gray-700 hover:text-gray-400 active:text-gray-400">
                    <Reveal>
                    Home
                    </Reveal>
                </NavLink>
                <a href={home?"/":"#about"} className="block rounded-md  py-2 text-base font-medium text-gray-700 hover:text-gray-400 active:text-gray-400">
                    <Reveal>
                    About
                    </Reveal>
                </a>
                <a href={home?"/":"#events"} className="block rounded-md  py-2 text-base font-medium text-gray-700 hover:text-gray-400 active:text-gray-400">
                    <Reveal>
                    Events
                    </Reveal>
                </a>
                <a href={home?"/":"#projects"} className="block rounded-md  py-2 text-base font-medium text-gray-700 hover:text-gray-400 active:text-gray-400">
                    <Reveal>
                    Projects
                    </Reveal>
                </a>
                <NavLink to="/contact" className="block rounded-md py-2 text-base font-medium text-gray-700 hover:text-gray-400 active:text-gray-400">
                    <Reveal>
                    Contact
                    </Reveal>
                </NavLink>
                </div>
            )}
            </div>
        </nav>
    </>)
}