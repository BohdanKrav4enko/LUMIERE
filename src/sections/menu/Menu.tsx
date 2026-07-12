import * as S from "./styles/MenuStyle";
import {MenuAccordion} from "../../components/menuAccordion";
import {useTranslation} from "react-i18next";

export const Menu = () => {

    const { t } = useTranslation()

    return (
            <S.Section id="menu">

                <S.Wrapper>

                    <S.Number>
                        03
                    </S.Number>

                    <S.Title>
                        {t("menu.title")}
                    </S.Title>


                    <MenuAccordion/>


                </S.Wrapper>

            </S.Section>
    );
};