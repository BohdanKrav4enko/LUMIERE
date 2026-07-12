import { MotionSection } from "../../components";
import * as S from "./styles/SignatureMenuStyle";
import { signatureDishes } from "../../data/signatureMenu";
import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";

export const SignatureMenu = () => {

    const { t } = useTranslation();

    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 768) {
                setCardsPerPage(1);
            } else if (window.innerWidth < 820) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(3);
            }
        };

        updateCardsPerPage();

        window.addEventListener("resize", updateCardsPerPage);

        return () => {
            window.removeEventListener("resize", updateCardsPerPage);
        };
    }, []);

    const totalPages = Math.ceil(
        signatureDishes.length / cardsPerPage
    );

    const startIndex = currentPage * cardsPerPage;

    const visibleDishes = signatureDishes.slice(
        startIndex,
        startIndex + cardsPerPage
    );

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <MotionSection>

            <S.Section id="signature">

                <S.Wrapper>

                    <S.Number>
                        02
                    </S.Number>

                    <S.Title>
                        {t("signature.title")}
                    </S.Title>

                    <S.Subtitle>
                        {t("signature.subtitle")}
                    </S.Subtitle>

                    <S.Track>

                        {visibleDishes.map((dish) => (

                            <S.Card key={dish.id}>

                                <S.Image
                                    src={dish.image}
                                    alt={dish.name}
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "/images/placeholder.avif";
                                    }}
                                />

                                <S.Name>
                                    {dish.name}
                                </S.Name>

                                <S.Description>
                                    {t(`signatureDishes.${dish.id}`)}
                                </S.Description>

                                <S.Price>
                                    {dish.price} ₴
                                </S.Price>

                            </S.Card>

                        ))}

                    </S.Track>

                    <S.Controls>

                        <S.ArrowButton
                            onClick={prevPage}
                            disabled={currentPage === 0}
                        >
                            ←
                        </S.ArrowButton>

                        <S.Dots>

                            {Array.from({
                                length: totalPages
                            }).map((_, index) => (

                                <S.Dot
                                    key={index}
                                    active={currentPage === index}
                                    onClick={() => setCurrentPage(index)}
                                />

                            ))}

                        </S.Dots>

                        <S.ArrowButton
                            onClick={nextPage}
                            disabled={
                                currentPage === totalPages - 1
                            }
                        >
                            →
                        </S.ArrowButton>

                    </S.Controls>

                </S.Wrapper>

            </S.Section>

        </MotionSection>
    );
};