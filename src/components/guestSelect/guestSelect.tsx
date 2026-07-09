import { useState } from "react";
import * as S from "./styles/GuestSelectStyle";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const guests = [
    "1 Guests",
    "2 Guests",
    "3 Guests",
    "4 Guests",
];

export const GuestSelect = ({
                                value,
                                onChange,
                            }: Props) => {

    const [open, setOpen] = useState(false);


    const handleSelect = (item: string) => {
        onChange(item);
        setOpen(false);
    };


    return (
        <S.Wrapper>

            <S.SelectButton
                type="button"
                onClick={() => setOpen(!open)}
            >
                {value || "Number of guests"}

                <S.Arrow $open={open}>
                    ↓
                </S.Arrow>
            </S.SelectButton>


            <S.Options $open={open}>
                {guests.map((item) => (
                    <S.Option
                        key={item}
                        onClick={() => handleSelect(item)}
                    >
                        {item}
                    </S.Option>
                ))}
            </S.Options>

        </S.Wrapper>
    );
};