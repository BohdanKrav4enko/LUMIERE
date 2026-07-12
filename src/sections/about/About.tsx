import { MotionSection } from "../../components";
import * as S from "./styles/AboutStyle";
import {useTranslation} from "react-i18next";


export const About = () => {

    const { t } = useTranslation();

    return (
        <MotionSection>
            <S.Section id="about">

                <S.Wrapper>

                    <S.Content>

                        <S.Number>
                            01
                        </S.Number>

                        <S.Title>
                            {t("about.title")}
                        </S.Title>

                        <S.Text>
                            {t("about.text")}
                        </S.Text>

                    </S.Content>


                    <S.ImageWrapper>
                        <S.Image
                            src="/images/chef.jpg"
                            alt="Chef"
                        />
                    </S.ImageWrapper>

                </S.Wrapper>

            </S.Section>
        </MotionSection>
    );
};