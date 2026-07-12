import * as S from "./styles/NotificationStyle";

interface NotificationProps {
    open: boolean;
    title: string;
    message: string;
}

export const Notification = ({
                                 open, title, message,
                             }: NotificationProps) => {
    return (
        <S.Container $open={open}>
            <S.Title>
                {title}
            </S.Title>

            <S.Text>
                {message}
            </S.Text>
        </S.Container>
    );
};