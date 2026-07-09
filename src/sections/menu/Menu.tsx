import * as S from "./styles/MenuStyle";
import {MotionSection} from "../../components";


const menu = [
    {
        category: "Starters",
        dishes: [
            {
                name: "Burrata",
                description: "Italian tomatoes, basil oil",
                price: "€28"
            },
            {
                name: "Foie Gras",
                description: "Fig, brioche and aged balsamic",
                price: "€42"
            }
        ]
    },
    {
        category: "Main Course",
        dishes: [
            {
                name: "Wagyu Tenderloin",
                description: "Seasonal vegetables and truffle sauce",
                price: "€95"
            },
            {
                name: "Sea Bass",
                description: "Lemon butter sauce and herbs",
                price: "€58"
            }
        ]
    },
    {
        category: "Desserts",
        dishes: [
            {
                name: "Chocolate Soufflé",
                description: "Dark chocolate and vanilla cream",
                price: "€24"
            }
        ]
    }
];


export const Menu = () => {
    return (
        <MotionSection>
            <S.Section id="menu">

                <S.Wrapper>

                    <S.Number>
                        03
                    </S.Number>

                    <S.Title>
                        Menu
                    </S.Title>


                    {menu.map((section) => (

                        <S.Category key={section.category}>

                            <S.CategoryTitle>
                                {section.category}
                            </S.CategoryTitle>


                            {section.dishes.map((dish) => (

                                <S.Item key={dish.name}>

                                    <div>
                                        <S.Name>
                                            {dish.name}
                                        </S.Name>

                                        <S.Description>
                                            {dish.description}
                                        </S.Description>
                                    </div>


                                    <S.Price>
                                        {dish.price}
                                    </S.Price>

                                </S.Item>

                            ))}

                        </S.Category>

                    ))}


                </S.Wrapper>

            </S.Section>
        </MotionSection>
    );
};