import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";

export default function Home(){

    return(
        <>
            <header className="h-lvh">
                <Navbar/>
                <Hero/>
            </header>
            <main className="h-lvh">
                <About/>
            </main>
        </>
    )
}