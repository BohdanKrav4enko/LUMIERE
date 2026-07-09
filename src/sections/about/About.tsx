import { MotionSection } from "../../components";
import * as S from "./styles/AboutStyle";


export const About = () => {
    return (
        <MotionSection>
            <S.Section id="about">

                <S.Wrapper>

                    <S.Content>

                        <S.Number>
                            01
                        </S.Number>

                        <S.Title>
                            A story of
                            timeless elegance
                        </S.Title>

                        <S.Text>
                            Lumière is a place where
                            culinary tradition meets modern
                            creativity.

                            Every dish is carefully crafted
                            with the finest ingredients,
                            creating an unforgettable dining
                            experience.
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