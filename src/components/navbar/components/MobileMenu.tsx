import * as S from "../styles/NavbarStyle";
import {scrollToSection} from "../../../utils";
import type Lenis from "lenis";
import {type RefObject} from "react";
import {useLockBodyScroll} from "../../../hooks";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

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
                    {t("mobileMenu.navigation")}
                </S.MobileMenuSubtitle>

                <S.MobileLink onClick={() => {
                    scrollToSection("about");
                    setIsOpen(false);
                }}>
                    {t("navbar.about")}
                </S.MobileLink>

                <S.MobileLink onClick={() => {
                    scrollToSection("menu");
                    setIsOpen(false);
                }}>
                    {t("navbar.menu")}
                </S.MobileLink>

                <S.MobileLink onClick={() => {
                    scrollToSection("gallery");
                    setIsOpen(false);
                }}>
                    {t("navbar.gallery")}
                </S.MobileLink>

                <S.MobileLink onClick={() => {
                    scrollToSection("reservation");
                    setIsOpen(false);
                }}>
                    {t("navbar.reserve")}
                </S.MobileLink>

                <S.MobileFooter>
                    LUMIÈRE KYIV
                    <br />
                    {t("mobileMenu.footer")}
                </S.MobileFooter>

            </S.MobileMenu>
        </>
    );
};