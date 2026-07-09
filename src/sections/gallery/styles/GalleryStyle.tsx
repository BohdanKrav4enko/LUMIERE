import styled from "styled-components";


export const Section = styled.section`
    padding: 220px 0;

    background:
        radial-gradient(
            circle at 80% 20%,
            rgba(198,161,91,0.05),
            transparent 35%
        ),
        ${({ theme }) => theme.colors.surface};
`;



export const Wrapper = styled.div`
    max-width: 1400px;

    margin: 0 auto;

    padding: 0 ${({ theme }) => theme.container.padding};
`;



export const Header = styled.div`
    margin-bottom: 120px;
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
    color:
        ${({ theme }) => theme.colors.text};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size:
        clamp(60px, 8vw, 100px);


    font-weight: 400;

    text-transform: uppercase;

    letter-spacing: 0.08em;
`;



export const Grid = styled.div`
    display: grid;


    grid-template-columns:
        repeat(12, 1fr);


    grid-auto-rows: 120px;


    gap: 25px;



    @media(max-width:${({ theme }) => theme.media.tablet}) {

        grid-template-columns: 1fr;

        grid-auto-rows: auto;
    }
`;



export const ImageWrapper = styled.div`
    overflow: hidden;

    position: relative;


    &:nth-child(1) {
        grid-column: span 7;

        grid-row: span 4;
    }


    &:nth-child(2) {
        grid-column: span 5;

        grid-row: span 3;
    }


    &:nth-child(3) {
        grid-column: span 5;

        grid-row: span 3;
    }


    &:nth-child(4) {
        grid-column: span 7;

        grid-row: span 4;
    }



    &::after {
        content: "";

        position: absolute;

        inset: 0;


        background:
                linear-gradient(
                        180deg,
                        transparent 40%,
                        rgba(8,8,8,0.7)
                );


        opacity: 0;

        transition:
            ${({ theme }) => theme.transition.default};
    }



    &:hover::after {
        opacity: 1;
    }



    &:hover img {
        transform: scale(1.06);
    }



    @media(max-width:${({ theme }) => theme.media.tablet}) {

        grid-column: auto;

        grid-row: auto;

        height: 500px;
    }


    @media(max-width:${({ theme }) => theme.media.mobile}) {

        height: 350px;
    }
    
`;



export const Image = styled.img`
    width: 100%;

    height: 100%;
    
    filter: brightness(0.9);

    object-fit: cover;
    
    transition:
        transform 1.2s ease;

    &:hover {
        filter: brightness(1);
    }
`;


export const Description = styled.p`
    margin-top: 30px;

    max-width: 500px;

    color: ${({ theme }) => theme.colors.muted};

    font-size: 18px;

    font-weight: 300;

    line-height: 1.8;

    letter-spacing: 0.08em;

    font-style: italic;
`;