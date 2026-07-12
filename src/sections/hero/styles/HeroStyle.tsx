import styled from "styled-components";


export const HeroWrapper = styled.section`
    position: relative;

    height: 100vh;
    min-height: 700px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("/images/restaurant.jpg");
    background-size: cover;
    background-position: center;

`;


export const Overlay = styled.div`
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(8,8,8,0.55),
            rgba(8,8,8,0.85)
        );
`;


export const Content = styled.div`
    position: relative;
    z-index: 1;

    text-align: center;

    max-width: 800px;

    padding: 0 20px;
`;


export const Title = styled.h1`
    font-size: clamp(40px, 10vw, 80px);

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: 0.25em;

    white-space: nowrap;

    margin-bottom: 25px;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        letter-spacing: 0.15em;
    }
`;


export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.colors.gold};

    font-size: clamp(22px, 3vw, 36px);

    font-weight: 400;

    margin-bottom: 25px;
`;


export const Description = styled.p`
    color: ${({ theme }) => theme.colors.muted};

    font-size: 18px;

    line-height: 1.8;

    max-width: 550px;

    margin: 0 auto 45px;
`;


export const Button = styled.button`
    padding: 18px 45px;

    border: 1px solid ${({ theme }) => theme.colors.gold};

    color: ${({ theme }) => theme.colors.gold};

    text-transform: uppercase;
    letter-spacing: 0.2em;

    transition: ${({ theme }) => theme.transition.default};


    &:hover {
        background: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.background};
    }
`;