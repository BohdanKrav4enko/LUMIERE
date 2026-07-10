import { MotionSection } from "../../components";
import * as S from "./styles/GalleryStyle";
import {images} from "../../data/gallery.ts";

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