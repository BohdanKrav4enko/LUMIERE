import {MotionSection, ReservationModal, Notification} from "../../components";
import * as S from "./styles/ReservationStyle";
import {useState} from "react";
import type {PropsLenisRef} from "../../components/navbar/Navbar.tsx";
import {useTranslation} from "react-i18next";


export const Reservation = ({lenisRef}: PropsLenisRef) => {

    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const {t} = useTranslation();

    return (<>
        <MotionSection>
            <S.Section id="reservation">

                <S.Wrapper>

                    <S.Number>
                        05
                    </S.Number>


                    <S.Title>
                        {t("reservation.title")}
                    </S.Title>


                    <S.Description>
                        {t("reservation.description")}
                    </S.Description>


                    <S.Button onClick={() => setIsOpen(true)}>
                        {t("reservation.button")}
                    </S.Button>


                    <S.Info>
                        {t("reservation.location")}
                        <br/>
                        {t("reservation.phone")}
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
        <Notification title={t("notification.reservationConfirmed")}
                      message={t("notification.reservationMessage")}
                      open={showNotification}
        />
    </>);
};