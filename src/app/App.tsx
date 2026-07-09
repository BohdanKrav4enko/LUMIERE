import {Footer, Navbar, ScrollToTop} from "../components";
import {About, Gallery, Hero, Menu, Reservation, SignatureMenu} from "../sections";
import {useLenis} from "../hooks";

export const App = () => {
    const lenisRef = useLenis();
    return <>
        <Navbar lenisRef={lenisRef} />
        <Hero/>
        <About/>
        <SignatureMenu/>
        <Menu/>
        <Gallery/>
        <Reservation/>
        <Footer/>
        <ScrollToTop/>
    </>
}

