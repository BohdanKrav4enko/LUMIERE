import * as S from "./styles/NotificationStyle";

interface NotificationProps {
    open: boolean;
}

export const Notification = ({
                                 open,
                             }: NotificationProps) => {
    return (
        <S.Container $open={open}>
            <S.Title>
                Reservation confirmed
            </S.Title>

            <S.Text>
                Thank you for choosing Lumière.
                We look forward to welcoming you.
            </S.Text>
        </S.Container>
    );
};