import * as S from "./styles/ReservationModalStyle"
import {Controller, useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {GuestSelect} from "../guestSelect";
import {useLockBodyScroll} from "../../hooks";
import type {RefObject} from "react";
import type Lenis from "lenis";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    lenisRef: RefObject<Lenis | null>;
    onSuccess: () => void;
}

type ReservationFormData = {
    name: string;
    phone: number;
    date: string;
    time: string;
    guests: string;
    message: string;
};

export const ReservationModal = ({
                                     isOpen,
                                     onClose,
                                     lenisRef,
                                     onSuccess,
                                 }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: {errors, isSubmitting},
    } = useForm<ReservationFormData>();

    useLockBodyScroll(isOpen, lenisRef);

    const onSubmit = async (data: ReservationFormData) => {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        onSuccess();

        reset();

        onClose();
    };

    const today = new Date();

    const minDate = today.toISOString().split("T")[0];

    const maxDate = new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        today.getDate()
    )
        .toISOString()
        .split("T")[0];

    return (
        <S.Modal $open={isOpen}>
            <S.CloseButton
                onClick={() => {
                    onClose();
                    reset();
                }}
            >
                ×
            </S.CloseButton>

            <S.Content>
                <S.Subtitle>
                    Reservation
                </S.Subtitle>

                <S.Title>
                    Reserve your table
                </S.Title>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Field>
                        <S.Input
                            placeholder="Your name"
                            {...register("name", {
                                required: "Please enter your name",
                            })}
                        />
                        {errors.name && (
                            <S.Error>
                                {errors.name.message}
                            </S.Error>
                        )}
                    </S.Field>
                    <S.Field>
                        <S.Input
                            type="tel"
                            placeholder="Phone number"
                            {...register("phone", {
                                required: "Please enter your phone number",
                                pattern: {
                                    value: /^[+]?[0-9\s\-()]{7,20}$/,
                                    message: "Please enter a valid phone number",
                                },
                            })}
                        />
                        {errors.phone && (
                            <S.Error>
                                {errors.phone.message}
                            </S.Error>
                        )}
                    </S.Field>
                    <S.Row>
                        <S.Field>
                            <S.Label>Date</S.Label>

                            <S.Input
                                type="date"
                                min={minDate}
                                max={maxDate}
                                {...register("date", {
                                    required: "Please select a date",
                                })}
                            />

                            {errors.date && (
                                <S.Error>
                                    {errors.date.message}
                                </S.Error>
                            )}
                        </S.Field>

                        <S.Field>
                            <S.Label>Time</S.Label>

                            <S.Input
                                type="time"
                                {...register("time", {
                                    required: "Please select a time",
                                })}
                            />

                            {errors.time && (
                                <S.Error>
                                    {errors.time.message}
                                </S.Error>
                            )}
                        </S.Field>
                    </S.Row>
                    <S.Field>
                        <Controller
                            name="guests"
                            control={control}
                            rules={{
                                required: "Please select number of guests"
                            }}
                            render={({field}) => (
                                <GuestSelect
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                        {errors.guests && (
                            <S.Error>
                                {errors.guests.message}
                            </S.Error>
                        )}
                    </S.Field>
                    <S.Field>
                        <S.TextArea
                            placeholder="Special requests"
                            {...register("message")}
                        />
                    </S.Field>
                    <S.Submit
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Sending..."
                            : "Reserve"}
                    </S.Submit>

                </S.Form>
            </S.Content>
        </S.Modal>
    );
};