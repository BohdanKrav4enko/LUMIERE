import { MotionSection } from "../../components";
import * as S from "./styles/GalleryStyle";


const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
];


export const Gallery = () => {
    return (
        <MotionSection>
            <S.Section id="gallery">

                <S.Wrapper>

                    <S.Header>

                        <S.Number>
                            04
                        </S.Number>

                        <S.Title>
                            Gallery
                        </S.Title>
                        <S.Description>Every detail tells a story.</S.Description>
                    </S.Header>


                    <S.Grid>

                        {images.map((image) => (

                            <S.ImageWrapper key={image}>

                                <S.Image
                                    src={image}
                                    alt="Restaurant"
                                />

                            </S.ImageWrapper>

                        ))}

                    </S.Grid>


                </S.Wrapper>

            </S.Section>
        </MotionSection>
    );
};