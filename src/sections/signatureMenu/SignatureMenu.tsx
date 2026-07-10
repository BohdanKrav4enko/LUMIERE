import { MotionSection } from "../../components";
import * as S from "./styles/SignatureMenuStyle";
import { signatureDishes } from "../../data/signatureMenu";
import {useEffect, useRef} from "react";

export const SignatureMenu = () => {

    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth,
            behavior: "smooth",
        });

    };

    const scrollPrev = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: -sliderRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const loopDishes = [
        ...signatureDishes,
        ...signatureDishes,
        ...signatureDishes,
    ];

    useEffect(() => {
        if (!sliderRef.current) return;
        const slider = sliderRef.current;
        slider.scrollLeft = slider.scrollWidth / 3;
    }, []);

    const handleScroll = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        const width = slider.scrollWidth / 3;
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = width;
        }


        if (slider.scrollLeft >= width * 2) {

            slider.scrollLeft = width;

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

                        <S.Track
                            ref={sliderRef}
                            onScroll={handleScroll}
                        >

                            {loopDishes.map((dish)=>(

                                <S.Card key={dish.id}>


                                    <S.Image
                                        src={dish.image}
                                        alt={dish.name}
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/placeholder.avif";
                                        }}

                                    />


                                    <S.Name>
                                        {dish.name}
                                    </S.Name>


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

                        <S.ArrowButton onClick={scrollPrev}>
                            ←
                        </S.ArrowButton>

                        <S.ArrowButton onClick={scrollNext}>
                            →
                        </S.ArrowButton>

                    </S.Controls>

                </S.Wrapper>

            </S.Section>

        </MotionSection>
    );
};