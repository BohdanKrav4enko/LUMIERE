import styled from "styled-components";


export const Section = styled.section`

    padding:220px 0;


    background:
            radial-gradient(
                    circle at 70% 30%,
                    rgba(198,161,91,.08),
                    transparent 40%
            ),
            ${({theme})=>theme.colors.background};



    @media(max-width:${({theme})=>theme.media.mobile}){

        padding:100px 0;

    }

`;



export const Wrapper = styled.div`

    max-width:${({theme})=>theme.container.width};

    margin:0 auto;

    padding:0 ${({theme})=>theme.container.padding};



    @media(max-width:${({theme})=>theme.media.mobile}){

        padding:0 20px;

    }

`;



export const Header = styled.div`

    margin-bottom:120px;


    @media(max-width:${({theme})=>theme.media.mobile}){

        margin-bottom:60px;

    }

`;



export const Number = styled.span`

    display:flex;

    align-items:center;

    gap:25px;


    color:${({theme})=>theme.colors.gold};


    font-size:14px;

    letter-spacing:.5em;


    margin-bottom:35px;



    &::after{

        content:"";

        width:80px;

        height:1px;

        background:${({theme})=>theme.colors.gold};

    }

`;



export const Title = styled.h2`

    color:${({theme})=>theme.colors.text};


    font-family:${({theme})=>theme.fonts.heading};


    font-size:
            clamp(60px,8vw,100px);


    font-weight:400;


    text-transform:uppercase;


    letter-spacing:.08em;


    line-height:1;


`;



export const Description = styled.p`

    margin-top:30px;


    max-width:400px;


    color:${({theme})=>theme.colors.muted};


    font-family:${({theme})=>theme.fonts.heading};


    font-size:32px;


    font-style:italic;


    line-height:1.5;



    @media(max-width:${({theme})=>theme.media.mobile}){

        font-size:24px;

    }

`;



export const Grid = styled.div`

    display:grid;


    grid-template-columns:repeat(12,1fr);


    grid-auto-rows:120px;


    gap:30px;



    @media(max-width:${({theme})=>theme.media.tablet}){

        grid-template-columns:repeat(2,1fr);

        grid-auto-rows:auto;

    }



    @media(max-width:${({theme})=>theme.media.mobile}){

        grid-template-columns:1fr;

    }

`;
export const ImageWrapper = styled.div`

    position:relative;

    overflow:hidden;


    &:nth-child(1){

        grid-column:span 7;

        grid-row:span 5;

    }


    &:nth-child(2){

        grid-column:span 5;

        grid-row:span 2;

    }


    &:nth-child(3){

        grid-column:span 5;

        grid-row:span 3;

    }


    &:nth-child(4){

        grid-column:span 4;

        grid-row:span 3;

    }


    &:nth-child(5){

        grid-column:span 8;

        grid-row:span 3;

    }


    &:nth-child(6){

        grid-column:span 6;

        grid-row:span 4;

    }


    &:nth-child(7){

        grid-column:span 6;

        grid-row:span 4;

    }


    &:nth-child(8){

        grid-column:span 12;

        grid-row:span 5;

    }



    @media(max-width:${({theme})=>theme.media.tablet}){


        height:450px;


        grid-column:auto!important;

        grid-row:auto!important;

    }



    @media(max-width:${({theme})=>theme.media.mobile}){


        height:380px;


    }

`;
export const Image = styled.img`

    width:100%;

    height:100%;


    object-fit:cover;


    filter:brightness(.85);


    transition:
        transform 1.2s ease,
        filter .5s ease;



    ${ImageWrapper}:hover &{

        transform:scale(1.06);

        filter:brightness(1);

    }

`;
export const Caption = styled.div`

    position:absolute;


    left:30px;

    bottom:30px;


    color:${({theme})=>theme.colors.text};


    font-family:${({theme})=>theme.fonts.heading};


    font-size:32px;


    opacity:0;


    transform:translateY(20px);


    transition:${({theme})=>theme.transition.default};



    ${ImageWrapper}:hover &{

        opacity:1;

        transform:translateY(0);

    }



    @media(max-width:${({theme})=>theme.media.mobile}){

        opacity:1;

        transform:none;

        font-size:26px;

    }

`;