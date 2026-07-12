import {useState} from "react";
import * as S from "./styles/MenuAccordionStyle";
import {menu} from "../../data/menu";
import {useTranslation} from "react-i18next";


export const MenuAccordion = () => {

    const { t } = useTranslation();

    const [openCategory, setOpenCategory] = useState<string | null>(null);


    const toggleCategory = (id: string) => {
        setOpenCategory(prev =>
            prev === id
                ? null
                : id
        );
    };


    return (
        <S.Container>

            {menu.map((category) => (

                <S.Item key={category.id}>


                    <S.Header
                        onClick={() => toggleCategory(category.id)}
                    >

                        <S.CategoryTitle>
                            {t(`menuCategories.${category.category}`)}
                        </S.CategoryTitle>


                        <S.Count>
                            {category.dishes.length}
                        </S.Count>


                        <S.Arrow
                            $open={openCategory === category.id}
                        >
                            ↓
                        </S.Arrow>

                    </S.Header>


                    <S.Content
                        $open={openCategory === category.id}
                    >

                        <S.Inner>

                            {category.dishes.map((dish) => (

                                <S.Dish>
                                    <S.Image
                                        src={dish.image}
                                        alt={dish.name}
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/placeholder.avif";
                                        }}
                                    />
                                    <S.DishInfo>

                                        <S.DishHeader>
                                            <S.Name>
                                                {dish.name}
                                            </S.Name>

                                            <S.Price>
                                                {dish.price} ₴
                                            </S.Price>
                                        </S.DishHeader>


                                        <S.Description>
                                            {t(`${category.id}.${dish.id}`)}
                                        </S.Description>

                                    </S.DishInfo>

                                </S.Dish>

                            ))}

                        </S.Inner>

                    </S.Content>


                </S.Item>

            ))}


        </S.Container>
    );
};