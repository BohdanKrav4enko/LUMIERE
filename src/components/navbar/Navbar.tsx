import {Header, Logo, Nav, NavLink, NavLinks} from "./styles/NavbarStyle";
import {Container} from "../container";
import {scrollToSection} from "../../utils";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {type RefObject, useState} from "react";
import type Lenis from "lenis";

export interface PropsLenisRef {
    lenisRef: RefObject<Lenis | null>;
}

export const Navbar = ({ lenisRef  }: PropsLenisRef) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Header>
            <Container>

                <Nav>
                    <Logo>
                        <img alt={'logo'} src={'/images/logo.webp'}/>
                        L U M I È R E
                    </Logo>

                    <NavLinks>
                        <NavLink onClick={() => scrollToSection("about")}>
                            About
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("signature")}>
                            Menu
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("gallery")}>
                            Gallery
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("reservation")}>
                            Reserve
                        </NavLink>
                    </NavLinks>
                    <MobileMenu
                        lenisRef={lenisRef}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </Nav>
            </Container>
        </Header>
    );
};