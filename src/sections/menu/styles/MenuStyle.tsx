import styled from "styled-components";


export const Section = styled.section`
    padding: 160px 0;

    background:
        radial-gradient(
            circle at 20% 30%,
            rgba(198, 161, 91, 0.05),
            transparent 35%
        ),
        ${({ theme }) => theme.colors.background};
`;


export const Wrapper = styled.div`
    max-width: 1000px;

    margin: 0 auto;

    padding: 0 ${({ theme }) => theme.container.padding};
`;



export const Number = styled.span`
    display: flex;

    align-items: center;
    gap: 25px;


    color: ${({ theme }) => theme.colors.gold};

    font-size: 14px;

    letter-spacing: 0.5em;

    margin-bottom: 35px;


    &::after {
        content: "";

        width: 80px;

        height: 1px;

        background:
            ${({ theme }) => theme.colors.gold};
    }
`;



export const Title = styled.h2`
    font-family:
        ${({ theme }) => theme.fonts.heading};


    color:
        ${({ theme }) => theme.colors.text};


    font-size:
        clamp(60px, 8vw, 100px);


    font-weight: 400;

    text-transform: uppercase;

    letter-spacing: 0.08em;


    margin-bottom: 100px;
`;



export const Category = styled.div`
    margin-bottom: 90px;
`;



export const CategoryTitle = styled.h3`
    color:
        ${({ theme }) => theme.colors.gold};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size: 42px;

    font-weight: 400;


    margin-bottom: 35px;


    display: flex;

    align-items: center;

    gap: 30px;


    &::after {
        content: "";

        flex: 1;

        height: 1px;

        background:
            rgba(198,161,91,0.25);
    }


    @media(max-width:${({ theme }) => theme.media.mobile}) {
        font-size: 34px;
    }
`;



export const Item = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 30px;


    padding: 25px 0;


    border-bottom:
        1px solid rgba(255,255,255,0.08);


    transition:
        ${({ theme }) => theme.transition.default};



    &:hover {
        padding-left: 15px;

        border-color:
            ${({ theme }) => theme.colors.gold};
    }


    @media(max-width:${({ theme }) => theme.media.mobile}) {

        flex-direction: column;

        align-items: flex-start;

        gap: 15px;
    }
`;



export const Name = styled.h4`
    color:
        ${({ theme }) => theme.colors.text};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size: 34px;

    font-weight: 400;


    margin-bottom: 10px;


    @media(max-width:${({ theme }) => theme.media.mobile}) {
        font-size: 28px;
    }
`;



export const Description = styled.p`
    color:
        ${({ theme }) => theme.colors.muted};


    font-size: 16px;

    line-height: 1.7;
`;



export const Price = styled.span`
    color:
        ${({ theme }) => theme.colors.gold};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size: 32px;


    white-space: nowrap;
`;