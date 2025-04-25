import brand from "/brandIcon.svg"
import { Reveal } from "../utils/Reveal"
import { useEffect, useState } from "react"
import { useAnimation, motion, easeIn } from "motion/react";

export default function Navbar(){
    const [ navLink, setNavLink] = useState(false);
    const controls = useAnimation()

    useEffect(()=>{
        if(navLink){
            controls.start("visible")
        }
    }, [navLink])

    return(<>
        <div className="w-full bg-gray-500 h-[4em]">
            <div className="container px-2 py-3 h-full flex justify-between items-center mx-auto">
                <Reveal>
                    <img src={brand} className="h-full"  alt="brand"/>
                </Reveal>
                <Reveal>
                    <div className="h-full flex items-center gap-6">
                    <motion.div
                        className="overflow-hidden relative -z-10"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible:{opacity:1, x:0},
                            hidden:{opacity:0, x:"100px"}
                        }}

                        transition={[easeIn]}
                    >
                        <ol className="">
                            <li className="inline">Home</li>
                            <li className="inline ms-3">About</li>
                            <li className="inline ms-3">Events</li>
                            <li className="inline ms-3">Projects</li>
                        </ol>
                    </motion.div>
                    <div className="nav-links cursor-pointer" onClick={()=>setNavLink(prev=> !prev)}>
                        <div className="w-[3em] h-[4px] bg-light-pink mb-1"></div>
                        <div className="w-[2em] ms-auto h-[4px] bg-light-pink "></div>
                    </div>
                    <svg className="h-full w-fit" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g className="fill-light-pink" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
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
                    </div>
                </Reveal>
            </div>
        </div>
    </>)
}