import { MotionSection } from "../../components";
import * as S from "./styles/GalleryStyle";


const images = [
    {
        src: "/images/gallery-1.jpg",
        alt: "Restaurant exterior",
        title: "The Entrance",
    },
    {
        src: "/images/gallery-2.jpg",
        alt: "Main dining hall",
        title: "Main Hall",
    },
    {
        src: "/images/gallery-3.webp",
        alt: "Chef preparing dishes",
        title: "The Kitchen",
    },
    {
        src: "/images/gallery-4.jpg",
        alt: "Signature dish",
        title: "Signature Cuisine",
    },
    {
        src: "/images/gallery-5.webp",
        alt: "Wine collection",
        title: "Wine Selection",
    },
    {
        src: "/images/gallery-6.webp",
        alt: "Luxury table setting",
        title: "Table Experience",
    },
    {
        src: "/images/gallery-7.jpg",
        alt: "Private dining room",
        title: "Private Dining",
    },
    {
        src: "/images/gallery-8.jpg",
        alt: "Evening atmosphere",
        title: "Evening Moments",
    },
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


                        <S.Description>
                            Every detail tells a story.
                        </S.Description>

                    </S.Header>



                    <S.Grid>

                        {images.map(({src, alt, title}) => (

                            <S.ImageWrapper key={src}>

                                <S.Image
                                    src={src}
                                    alt={alt}
                                    onError={(e) => {
                                        e.currentTarget.src = "/images/placeholder.avif";
                                    }}
                                />


                                <S.Caption>
                                    {title}
                                </S.Caption>


                            </S.ImageWrapper>

                        ))}

                    </S.Grid>


                </S.Wrapper>

            </S.Section>

        </MotionSection>
    );
};