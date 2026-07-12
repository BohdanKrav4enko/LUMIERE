import * as S from "./styles/ReservationModalStyle"
import {Controller, useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {GuestSelect} from "../guestSelect";
import {useLockBodyScroll} from "../../hooks";
import type {RefObject} from "react";
import type Lenis from "lenis";
import {useTranslation} from "react-i18next";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    lenisRef: RefObject<Lenis | null>;
    onSuccess: () => void;
}

type ReservationFormData = {
    name: string;
    phone: string;
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

    const { t } = useTranslation();

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
            {
                ...data,
                message: data.message ||  t("reservationModal.defaultMessage"),
            },
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
                    {t("reservationModal.subtitle")}
                </S.Subtitle>

                <S.Title>
                    {t("reservationModal.title")}
                </S.Title>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Field>
                        <S.Input
                            placeholder={t("reservationModal.namePlaceholder")}
                            {...register("name", {
                                required: t("reservationModal.errors.nameRequired"),
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
                            placeholder={t("reservationModal.phonePlaceholder")}
                            {...register("phone", {
                                required: t("reservationModal.errors.phoneRequired"),
                                pattern: {
                                    value: /^[+]?[0-9\s\-()]{7,20}$/,
                                    message: t("reservationModal.errors.phoneInvalid"),
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
                            <S.Label>{t("reservationModal.date")}</S.Label>

                            <S.Input
                                type="date"
                                min={minDate}
                                max={maxDate}
                                {...register("date", {
                                    required: t("reservationModal.errors.dateRequired"),
                                })}
                            />

                            {errors.date && (
                                <S.Error>
                                    {errors.date.message}
                                </S.Error>
                            )}
                        </S.Field>

                        <S.Field>
                            <S.Label>{t("reservationModal.time")}</S.Label>

                            <S.Input
                                type="time"
                                {...register("time", {
                                    required: t("reservationModal.errors.timeRequired"),
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
                            defaultValue=""
                            rules={{
                                required: t("reservationModal.errors.guestsRequired")
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
                            placeholder={t("reservationModal.messagePlaceholder")}
                            {...register("message")}
                        />
                    </S.Field>
                    <S.Submit
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? t("reservationModal.sending")
                            : t("reservationModal.submit")}
                    </S.Submit>

                </S.Form>
            </S.Content>
        </S.Modal>
    );
};