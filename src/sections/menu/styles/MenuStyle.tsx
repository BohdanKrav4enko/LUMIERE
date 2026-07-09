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