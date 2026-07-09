import * as S from "./styles/FooterStyle";
import {scrollToSection} from "../../utils";

export const Footer = () => {
    return (
        <S.FooterWrapper>

            <S.Logo>
                LUMIÈRE
            </S.Logo>


            <S.Description>
                Fine dining experience
            </S.Description>


            <S.Links>

                <S.Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </S.Link>

                <S.Link onClick={() => scrollToSection("reservation")}>
                    Reserve
                </S.Link>

                <S.Link onClick={() => scrollToSection("signature")}>
                    Menu
                </S.Link>

            </S.Links>


            <S.Bottom>
                © 2026 Lumière.
                All rights reserved.
            </S.Bottom>

        </S.FooterWrapper>
    );
};