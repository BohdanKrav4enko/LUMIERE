import * as S from "../styles/NavbarStyle";
import {scrollToSection} from "../../../utils";
import type Lenis from "lenis";
import {type RefObject} from "react";
import {useLockBodyScroll} from "../../../hooks";


interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    lenisRef: RefObject<Lenis | null>;
}

export const MobileMenu = ({
                               isOpen,
                               setIsOpen,
                               lenisRef
                           }: MobileMenuProps) => {

    useLockBodyScroll(
        isOpen,
        lenisRef,
    );

    return (
        <>
            <S.Burger
                onClick={() => setIsOpen(!isOpen)}
            >
                <S.BurgerLine $open={isOpen}/>
                <S.BurgerLine $open={isOpen}/>
                <S.BurgerLine $open={isOpen}/>
            </S.Burger>


            <S.MobileMenu $open={isOpen}>

                <S.MobileMenuSubtitle>
                    Navigation
                </S.MobileMenuSubtitle>

                <S.MobileLink onClick={() => {
                    scrollToSection("about")
                    setIsOpen(!isOpen)
                }}>
                    About
                </S.MobileLink>

                <S.MobileLink onClick={() => {
                    scrollToSection("menu")
                    setIsOpen(!isOpen)
                }}>
                    Menu
                </S.MobileLink>

                <S.MobileLink onClick={() => {
                    scrollToSection("gallery")
                    setIsOpen(!isOpen)
                }}>
                    Gallery
                </S.MobileLink>

                <S.MobileLink onClick={() => {
                    scrollToSection("contact")
                    setIsOpen(!isOpen)
                }}>
                    Contact
                </S.MobileLink>

                <S.MobileFooter>
                    LUMIÈRE
                    <br/>
                    Fine Dining Experience
                </S.MobileFooter>

            </S.MobileMenu>
        </>
    );
};