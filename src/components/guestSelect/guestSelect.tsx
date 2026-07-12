import { useState } from "react";
import * as S from "./styles/GuestSelectStyle";
import {useTranslation} from "react-i18next";

interface Props {
    value: string;
    onChange: (value: string) => void;
}


export const GuestSelect = ({
                                value,
                                onChange,
                            }: Props) => {

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);


    const handleSelect = (item: string) => {
        onChange(item);
        setOpen(false);
    };

    const guests = [1, 2, 3, 4];


    return (
        <S.Wrapper>

            <S.SelectButton
                type="button"
                onClick={() => setOpen(!open)}
            >
                {value || t("guestSelect.placeholder")}

                <S.Arrow $open={open}>
                    ↓
                </S.Arrow>
            </S.SelectButton>


            <S.Options $open={open}>
                {guests.map((guest) => (
                    <S.Option
                        key={guest}
                        onClick={() =>
                            handleSelect(
                                t(`guestSelect.guests.${guest}`)
                            )
                        }
                    >
                        {t(`guestSelect.guests.${guest}`)}
                    </S.Option>
                ))}
            </S.Options>

        </S.Wrapper>
    );
};