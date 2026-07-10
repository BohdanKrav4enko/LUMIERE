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

export const Slider = styled.div`
    overflow: hidden;
`;

export const Track = styled.div`

    display: flex;
    gap: 30px;


    overflow-x: auto;


    scroll-snap-type: x mandatory;


    scrollbar-width: none;


    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {

        padding: 0 24px;

    }
`;

export const Card = styled.article`

    flex:0 0 calc(33.333% - 20px);


    scroll-snap-align:start;



    @media(max-width:${({theme})=>theme.media.tablet}) {

        flex:0 0 calc(50% - 15px);

    }



    @media(max-width:${({theme})=>theme.media.mobile}) {

        flex:0 0 88%;

    }

`;

export const Image = styled.img`

    width:100%;

    aspect-ratio: 4 / 5;

    object-fit:cover;


    margin-bottom:20px;


    filter:
            brightness(.85);



    transition:
            ${({theme})=>theme.transition.default};



    ${Card}:hover & {
        transform:scale(1.03);
    }



    @media(max-width:${({theme})=>theme.media.mobile}) {

        aspect-ratio:1 / 1.15;

    }

`;

export const Name = styled.h3`

    font-family:
            ${({theme})=>theme.fonts.heading};


    font-size:34px;

    font-weight:400;


    color:
            ${({theme})=>theme.colors.text};


    line-height:1.1;


    min-height:75px;



    @media(max-width:${({theme})=>theme.media.tablet}) {

        font-size:30px;

    }



    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:26px;

        min-height:58px;

    }

`;

export const Description = styled.p`

    color:
            ${({theme})=>theme.colors.muted};


    line-height:1.7;


    font-size:15px;


    min-height:51px;



    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:14px;

        min-height:48px;

    }

`;

export const Subtitle = styled.p`
    max-width: 500px;

    margin: 0 auto 80px;


    color: ${({ theme }) => theme.colors.muted};

    font-size: 18px;

    line-height: 1.8;
`;





export const Price = styled.span`

    display:block;


    margin-top:20px;


    color:
            ${({theme})=>theme.colors.gold};


    font-family:
            ${({theme})=>theme.fonts.heading};


    font-size:30px;



    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:26px;

    }

`;

export const Controls = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 25px;

    margin-top: 45px;
`;

export const ArrowButton = styled.button`
    width: 50px;
    height: 50px;

    display: flex;

    justify-content: center;
    align-items: center;

    background: transparent;

    border: 1px solid ${({ theme }) => theme.colors.gold};

    color: ${({ theme }) => theme.colors.gold};

    font-size: 20px;

    cursor: pointer;

    transition: ${({ theme }) => theme.transition.default};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.gold};

        color: ${({ theme }) => theme.colors.background};
    }

    &:disabled {
        opacity: 0.35;

        cursor: default;

        pointer-events: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        width: 44px;

        height: 44px;

        font-size: 18px;
    }
`;
export const Pagination = styled.div`
    min-width: 90px;

    color: ${({ theme }) => theme.colors.muted};

    font-size: 14px;

    letter-spacing: 0.35em;

    text-align: center;

    user-select: none;
`;