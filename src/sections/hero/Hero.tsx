import * as S from "./styles/HeroStyle";
import {MotionSection} from "../../components";
import {scrollToSection} from "../../utils";
import {useTranslation} from "react-i18next";


export const Hero = () => {

    const {t} = useTranslation();

    return (
        <MotionSection>
            <S.HeroWrapper>

                <S.Overlay/>

                <S.Content>

                    <S.Title>
                        L U M I È R E
                    </S.Title>

                    <S.Title>
                        K Y I V
                    </S.Title>

                    <S.Subtitle>
                        {t("hero.subtitle")}
                    </S.Subtitle>

                    <S.Description>
                        {t("hero.description")}
                    </S.Description>

                    <S.Button onClick={() => scrollToSection("reservation")}>
                        {t("hero.button")}
                    </S.Button>

                </S.Content>

            </S.HeroWrapper>
        </MotionSection>
    );
};