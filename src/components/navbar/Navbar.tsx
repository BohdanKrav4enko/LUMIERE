import {Header, Logo, Nav, NavLink, NavLinks} from "./styles/NavbarStyle";
import {Container} from "../container";
import {scrollToSection} from "../../utils";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {type RefObject, useState} from "react";
import type Lenis from "lenis";

interface Props {
    lenisRef: RefObject<Lenis | null>;
}

export const Navbar = ({ lenisRef  }: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Header>
            <Container>
                <Nav>

                    <Logo>
                        L U M I È R E
                    </Logo>

                    <NavLinks>
                        <NavLink onClick={() => scrollToSection("about")}>
                            About
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("menu")}>
                            Menu
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("gallery")}>
                            Gallery
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("contact")}>
                            Contact
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