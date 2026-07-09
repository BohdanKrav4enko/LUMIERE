import styled from "styled-components";


export const Section = styled.section`
    padding: 160px 0;

    background:
            radial-gradient(
                    circle at 80% 30%,
                    rgba(198,161,91,0.06),
                    transparent 35%
            ),
            ${({ theme }) => theme.colors.background};
`;


export const Wrapper = styled.div`
    max-width: ${({ theme }) => theme.container.width};

    margin: 0 auto;

    padding: 0 ${({ theme }) => theme.container.padding};


    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;


    @media(max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: 1fr;
    }
`;



export const Content = styled.div`
    display: flex;

    flex-direction: column;

    justify-content: center;
`;




export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text};

    font-size: clamp(45px,5vw,70px);

    line-height: 1.1;

    margin-bottom: 35px;
`;



export const Text = styled.p`
    color: ${({ theme }) => theme.colors.muted};

    font-size: 18px;

    line-height: 1.9;

    max-width: 500px;
`;



export const ImageWrapper = styled.div`
    height: 700px;

    overflow: hidden;

    position: relative;


    &::after {
        content: "";

        position: absolute;

        inset: 0;

        background:
                linear-gradient(
                        180deg,
                        transparent,
                        rgba(8,8,8,0.35)
                );
    }
`;



export const Image = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 1.2s ease;


    &:hover {
        transform: scale(1.04);
    }
`;
export const Number = styled.span`
    color: ${({ theme }) => theme.colors.gold};

    font-size: 14px;

    letter-spacing: 0.5em;

    display: flex;
    align-items: center;
    gap: 20px;


    &::after {
        content: "";

        width: 60px;

        height: 1px;

        background: ${({ theme }) => theme.colors.gold};
    }
`;