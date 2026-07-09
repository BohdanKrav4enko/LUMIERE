import {MotionSection, ReservationModal, Notification} from "../../components";
import * as S from "./styles/ReservationStyle";
import {useState} from "react";
import type {PropsLenisRef} from "../../components/navbar/Navbar.tsx";


export const Reservation = ({ lenisRef  }: PropsLenisRef) => {

    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    return (<>
        <MotionSection>
            <S.Section id="reservation">

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


                    <S.Button onClick={() => setIsOpen(true)}>
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
        <ReservationModal
            lenisRef={lenisRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSuccess={() => {
                setShowNotification(true);

                setTimeout(() => {
                    setShowNotification(false);
                }, 4000);
            }}
        />
        <Notification open={showNotification} />
    </> );
};