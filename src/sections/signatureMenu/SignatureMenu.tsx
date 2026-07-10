import {MotionSection} from "../../components";
import * as S from "./styles/SignatureMenuStyle";
import {useState} from "react";
import {signatureDishes} from "../../data/signatureMenu.ts";

export const SignatureMenu = () => {

    const [page, setPage] = useState(0);

    const cardsPerPage =
        window.innerWidth <= 768
            ? 1
            : window.innerWidth <= 1024
                ? 2
                : 3;

    const totalPages = Math.ceil(
        signatureDishes.length / cardsPerPage
    );

    const visibleDishes = signatureDishes.slice(
        page * cardsPerPage,
        page * cardsPerPage + cardsPerPage
    );

    const next = () => {
        if (page < totalPages - 1) {
            setPage(prev => prev + 1);
        }
    };

    const prev = () => {
        if (page > 0) {
            setPage(prev => prev - 1);
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
                        Signature Menu
                    </S.Title>

                    <S.Subtitle>
                        A collection of our chef's
                        finest creations.
                    </S.Subtitle>

                    <S.Slider>
                        <S.Track>
                            {visibleDishes.map((dish) => (
                                <S.Card key={dish.id}>
                                    <S.Image
                                        src={dish.image}
                                        alt={dish.name}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "/images/placeholder.avif";
                                        }}
                                    />

                                    <S.Name>{dish.name}</S.Name>

                                    <S.Description>
                                        {dish.description}
                                    </S.Description>

                                    <S.Price>
                                        {dish.price}
                                    </S.Price>
                                </S.Card>
                            ))}
                        </S.Track>
                    </S.Slider>

                    <S.Controls>
                        <S.ArrowButton
                            onClick={prev}
                            disabled={page === 0}
                        >
                            ←
                        </S.ArrowButton>

                        <S.Pagination>
                            {String(page + 1).padStart(2, "0")}
                            {" / "}
                            {String(totalPages).padStart(2, "0")}
                        </S.Pagination>

                        <S.ArrowButton
                            onClick={next}
                            disabled={page === totalPages - 1}
                        >
                            →
                        </S.ArrowButton>
                    </S.Controls>
                </S.Wrapper>
            </S.Section>
        </MotionSection>
    );
}