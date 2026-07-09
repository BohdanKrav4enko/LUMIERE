import * as S from "./styles/HeroStyle";
import {MotionSection} from "../../components";
import {scrollToSection} from "../../utils";


export const Hero = () => {
    return (
        <MotionSection>
            <S.HeroWrapper>

                <S.Overlay/>

                <S.Content>

                    <S.Title>
                        L U M I È R E
                    </S.Title>

                    <S.Subtitle>
                        A journey of exceptional taste
                    </S.Subtitle>

                    <S.Description>
                        Where culinary art meets timeless elegance.
                        Discover an unforgettable fine dining experience.
                    </S.Description>

                    <S.Button onClick={()=>scrollToSection("reservation")}>
                        Reserve a Table
                    </S.Button>

                </S.Content>

            </S.HeroWrapper>
        </MotionSection>
    );
};