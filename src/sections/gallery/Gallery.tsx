import * as S from "./styles/GalleryStyle";
import {images} from "../../data/gallery.ts";
import {useTranslation} from "react-i18next";

export const Gallery = () => {

    const { t } = useTranslation();

    return (
            <S.Section id="gallery">

                <S.Wrapper>


                    <S.Header>

                        <S.Number>
                            04
                        </S.Number>


                        <S.Title>
                            {t("gallery.title")}
                        </S.Title>


                        <S.Description>
                            {t("gallery.description")}
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
    );
};