import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import bg from '../assets/images/bg.jpg'

export default function Home(){

    return(
        <>
            <header className="h-lvh relative bg-no-repeat bg-cover" style={{background:`url(${bg})`}}>
                <div className="absolute inset-0 top-0 bg-white/70"></div>
                <Navbar/>
                <Hero/>
            </header>
            <main className="h-lvh">
                <About/>
            </main>
        </>
    )
}