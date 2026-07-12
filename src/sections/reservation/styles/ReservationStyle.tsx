import styled from "styled-components";


export const Section = styled.section`
    position: relative;

    padding: 220px 0;


    background:
        radial-gradient(
            circle at center,
            rgba(198,161,91,0.12),
            transparent 35%
        ),
        ${({ theme }) => theme.colors.background};


    overflow: hidden;



    &::before {
        content: "";

        position: absolute;

        width: 500px;

        height: 500px;

        top: 50%;

        left: 50%;

        transform: translate(-50%, -50%);


        border-radius: 50%;


        background:
            rgba(198,161,91,0.05);


        filter: blur(100px);
    }
`;



export const Wrapper = styled.div`
    position: relative;

    z-index: 1;


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


    margin-bottom: 50px;



    &::before,
    &::after {

        content: "";


        width: 70px;


        height: 1px;


        background:
            ${({ theme }) => theme.colors.gold};
    }
`;



export const Title = styled.h2`
    color:
        ${({ theme }) => theme.colors.text};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size:
        clamp(40px, 8vw, 82px);


    font-weight: 400;


    line-height: 1;


    text-transform: uppercase;


    letter-spacing: 0.06em;


    margin-bottom: 40px;
`;



export const Description = styled.p`
    color:
        ${({ theme }) => theme.colors.muted};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size: 32px;


    font-style: italic;


    font-weight: 300;


    line-height: 1.5;


    margin-bottom: 70px;



    @media(max-width:${({ theme }) => theme.media.mobile}) {

        font-size: 24px;
    }
`;



export const Button = styled.button`
    position: relative;


    padding: 20px 55px;


    background:
        transparent;


    color:
        ${({ theme }) => theme.colors.gold};


    border:
        1px solid ${({ theme }) => theme.colors.gold};


    font-size: 14px;


    letter-spacing: 0.35em;


    text-transform: uppercase;


    cursor: pointer;


    transition:
        ${({ theme }) => theme.transition.default};



    &:hover {

        background:
            ${({ theme }) => theme.colors.gold};


        color:
            ${({ theme }) => theme.colors.background};
    }
`;



export const Info = styled.p`
    margin-top: 70px;


    color:
        ${({ theme }) => theme.colors.muted};


    font-size: 14px;


    line-height: 2;


    letter-spacing: 0.15em;


    text-transform: uppercase;
`;