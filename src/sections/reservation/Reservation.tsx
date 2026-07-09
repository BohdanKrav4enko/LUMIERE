import { MotionSection } from "../../components";
import * as S from "./styles/ReservationStyle";


export const Reservation = () => {
    return (
        <MotionSection>
            <S.Section id="contact">

                <S.Wrapper>

                    <S.Number>
                        05
                    </S.Number>


                    <S.Title>
                        Reserve your table
                    </S.Title>


                    <S.Description>
                        An unforgettable evening
                        awaits you.
                    </S.Description>


                    <S.Button>
                        Book a table
                    </S.Button>


                    <S.Info>
                        Paris, France
                        <br/>
                        +33 1 42 00 00 00
                    </S.Info>

                </S.Wrapper>

            </S.Section>
        </MotionSection>
    );
};