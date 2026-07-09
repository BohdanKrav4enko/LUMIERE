import styled from "styled-components";


export const FooterWrapper = styled.footer`
    position: relative;

    padding: 100px 0 40px;


    background:
        ${({ theme }) => theme.colors.background};


    text-align: center;


    border-top:
        1px solid rgba(198,161,91,0.15);
`;



export const Logo = styled.h2`
    color:
        ${({ theme }) => theme.colors.text};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size:
        clamp(50px, 7vw, 90px);


    font-weight: 400;


    letter-spacing: 0.35em;


    margin-bottom: 25px;


    padding-left: 0.35em;
`;



export const Description = styled.p`
    color:
        ${({ theme }) => theme.colors.gold};


    font-family:
        ${({ theme }) => theme.fonts.heading};


    font-size: 24px;


    font-style: italic;


    font-weight: 300;


    margin-bottom: 60px;
`;



export const Links = styled.div`
    display: flex;


    justify-content: center;


    gap: 50px;


    margin-bottom: 80px;



    @media(max-width:${({ theme }) => theme.media.mobile}) {

        flex-direction: column;

        gap: 25px;
    }
`;



export const Link = styled.a`
    cursor: pointer;
    color:
        ${({ theme }) => theme.colors.muted};


    text-decoration: none;


    font-size: 13px;


    letter-spacing: 0.3em;


    text-transform: uppercase;


    transition:
        ${({ theme }) => theme.transition.default};



    &:hover {

        color:
            ${({ theme }) => theme.colors.gold};
    }
`;



export const Bottom = styled.p`
    padding-top: 30px;


    border-top:
        1px solid rgba(255,255,255,0.08);


    color:
        ${({ theme }) => theme.colors.muted};


    font-size: 12px;


    letter-spacing: 0.2em;


    text-transform: uppercase;
`;