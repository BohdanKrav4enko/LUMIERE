import * as S from "./styles/MenuStyle";
import {MenuAccordion} from "../../components/menuAccordion";

export const Menu = () => {
    return (
            <S.Section id="menu">

                <S.Wrapper>

                    <S.Number>
                        03
                    </S.Number>

                    <S.Title>
                        Menu
                    </S.Title>


                    <MenuAccordion/>


                </S.Wrapper>

            </S.Section>
    );
};