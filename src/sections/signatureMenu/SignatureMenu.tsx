import {MotionSection} from "../../components";
import * as S from "./styles/SignatureMenuStyle.tsx";


const dishes = [
    {
        name: "Truffle Risotto",
        description:
            "Wild mushrooms, parmesan and white truffle",
        price: "€48"
    },
    {
        name: "Wagyu Tenderloin",
        description:
            "Japanese wagyu with seasonal vegetables",
        price: "€95"
    },
    {
        name: "Ocean Selection",
        description:
            "Fresh seafood with chef's signature sauce",
        price: "€72"
    }
];


export const SignatureMenu = () => {
    return (
        <MotionSection>
            <S.Section id="menu">

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


                    <S.MenuList>

                        {dishes.map((dish) => (
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

                    </S.MenuList>

                </S.Wrapper>

            </S.Section>
        </MotionSection>
    );
};