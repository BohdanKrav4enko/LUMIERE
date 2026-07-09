import styled from "styled-components";


export const Section = styled.section`
    padding: 160px 0;

    background:
            radial-gradient(
                    circle at 50% 20%,
                    rgba(198, 161, 91, 0.06),
                    transparent 35%
            ),
            ${({ theme }) => theme.colors.surface};
`;


export const Wrapper = styled.div`
    max-width: 900px;

    margin: 0 auto;

    padding: 0 ${({ theme }) => theme.container.padding};

    text-align: center;
`;


export const Number = styled.span`
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 25px;

    color: ${({ theme }) => theme.colors.gold};

    font-size: 14px;

    letter-spacing: 0.5em;

    margin-bottom: 35px;


    &::before,
    &::after {
        content: "";

        width: 60px;

        height: 1px;

        background: ${({ theme }) => theme.colors.gold};
    }
`;


export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text};

    font-size: clamp(50px, 6vw, 80px);

    text-transform: uppercase;

    line-height: 1;

    margin-bottom: 25px;
`;


export const Subtitle = styled.p`
    max-width: 500px;

    margin: 0 auto 80px;


    color: ${({ theme }) => theme.colors.muted};

    font-size: 18px;

    line-height: 1.8;
`;



export const MenuList = styled.div`
    display: flex;

    flex-direction: column;
`;



export const Item = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 30px;


    padding: 35px 0;


    border-bottom:
        1px solid rgba(198,161,91,0.2);


    transition: ${({ theme }) => theme.transition.default};


    &:hover {
        padding-left: 15px;

        border-color:
            ${({ theme }) => theme.colors.gold};
    }


    @media(max-width: ${({ theme }) => theme.media.mobile}) {
        flex-direction: column;

        align-items: flex-start;
    }
`;



export const Name = styled.h3`
    color: ${({ theme }) => theme.colors.text};

    font-size: 32px;

    font-weight: 400;

    margin-bottom: 12px;


    @media(max-width: ${({ theme }) => theme.media.mobile}) {
        font-size: 26px;
    }
`;



export const Description = styled.p`
    color: ${({ theme }) => theme.colors.muted};

    font-size: 16px;

    line-height: 1.7;
`;



export const Price = styled.span`
    color: ${({ theme }) => theme.colors.gold};

    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 32px;

    white-space: nowrap;
`;