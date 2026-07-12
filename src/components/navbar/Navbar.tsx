import {Header, Logo, Nav, NavLink, NavLinks} from "./styles/NavbarStyle";
import {Container} from "../container";
import {scrollToSection} from "../../utils";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {type RefObject, useState} from "react";
import type Lenis from "lenis";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "../languageSwitcher";

export interface PropsLenisRef {
    lenisRef: RefObject<Lenis | null>;
}

export const Navbar = ({ lenisRef  }: PropsLenisRef) => {

    const { t } = useTranslation();

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
                            {t("navbar.about")}
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("signature")}>
                            {t("navbar.menu")}
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("gallery")}>
                            {t("navbar.gallery")}
                        </NavLink>

                        <NavLink onClick={() => scrollToSection("reservation")}>
                            {t("navbar.reserve")}
                        </NavLink>
                    </NavLinks>
                    <LanguageSwitcher />
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