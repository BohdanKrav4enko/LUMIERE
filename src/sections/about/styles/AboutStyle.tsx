import styled from "styled-components";


export const Section = styled.section`

    padding:160px 0;


    background:
            radial-gradient(
                    circle at 80% 30%,
                    rgba(198,161,91,0.06),
                    transparent 35%
            ),
            ${({theme})=>theme.colors.background};



    @media(max-width:${({theme})=>theme.media.mobile}) {

        padding:90px 0;

    }

`;

export const Wrapper = styled.div`
    max-width: ${({ theme }) => theme.container.width};

    margin: 0 auto;

    padding: 0 ${({ theme }) => theme.container.padding};


    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;



    @media(max-width:${({theme})=>theme.media.tablet}) {

        grid-template-columns:1fr;

        gap:60px;

    }



    @media(max-width:${({theme})=>theme.media.mobile}) {

        padding:
                0 20px;

        gap:45px;

    }
`;



export const Content = styled.div`
    display: flex;

    flex-direction: column;

    justify-content: center;
`;




export const Title = styled.h2`

    color:${({theme})=>theme.colors.text};


    font-family:
            ${({theme})=>theme.fonts.heading};


    font-size:
            clamp(42px,10vw,70px);


    line-height:1.05;


    font-weight:400;


    margin-bottom:30px;


    letter-spacing:.02em;



    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:42px;

    }

`;



export const Text = styled.p`

    color:${({theme})=>theme.colors.muted};

    font-size:18px;

    line-height:1.9;

    max-width:500px;


    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:16px;

        line-height:1.8;

    }

`;



export const ImageWrapper = styled.div`

    height:700px;


    overflow:hidden;


    position:relative;



    &::after {

        content:"";


        position:absolute;

        inset:0;


        background:
                linear-gradient(
                        180deg,
                        transparent,
                        rgba(8,8,8,.35)
                );

    }



    @media(max-width:${({theme})=>theme.media.tablet}) {

        height:600px;

    }



    @media(max-width:${({theme})=>theme.media.mobile}) {

        height:480px;

    }

`;



export const Image = styled.img`

    width:100%;

    height:100%;


    object-fit:cover;


    transition:
            transform 1.5s cubic-bezier(.2,.8,.2,1);



    &:hover {

        transform:scale(1.05);

    }

`;
export const Number = styled.span`

    color:${({theme})=>theme.colors.gold};


    font-size:13px;


    letter-spacing:.5em;


    display:flex;


    align-items:center;


    gap:20px;


    margin-bottom:30px;



    &::after {

        content:"";


        width:50px;


        height:1px;


        background:${({theme})=>theme.colors.gold};

    }

`;