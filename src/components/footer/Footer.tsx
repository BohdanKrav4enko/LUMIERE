import * as S from "./styles/FooterStyle";
import { scrollToSection } from "../../utils";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <S.FooterWrapper>

            <S.Logo>
                LUMIÈRE
            </S.Logo>

            <S.Description>
                {t("footer.description")}
            </S.Description>

            <S.Links>

                <S.Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("footer.instagram")}
                </S.Link>

                <S.Link onClick={() => scrollToSection("reservation")}>
                    {t("footer.reserve")}
                </S.Link>

                <S.Link onClick={() => scrollToSection("signature")}>
                    {t("footer.menu")}
                </S.Link>

            </S.Links>

            <S.Bottom>
                {t("footer.copyright", { year: new Date().getFullYear() })}
            </S.Bottom>

        </S.FooterWrapper>
    );
};