import Navbar from "./Navbar";
import About from "./About";

export default function Home(){

    return(
        <>
            <header className="h-lvh">
                <Navbar/>
            </header>
            <main className="h-lvh">
                <About/>
            </main>
        </>
    )
}