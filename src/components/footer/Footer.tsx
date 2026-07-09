import * as S from "./styles/FooterStyle";

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

                <S.Link href="#">
                    Instagram
                </S.Link>

                <S.Link href="#">
                    Contact
                </S.Link>

                <S.Link href="#">
                    Location
                </S.Link>

            </S.Links>


            <S.Bottom>
                © 2026 Lumière.
                All rights reserved.
            </S.Bottom>

        </S.FooterWrapper>
    );
};