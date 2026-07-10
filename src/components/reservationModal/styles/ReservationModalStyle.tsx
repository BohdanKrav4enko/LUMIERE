import styled from "styled-components";

export const Modal = styled.div<{ $open: boolean }>`
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    padding:20px;

    overflow-y: auto;

    background:
            radial-gradient(
                    circle at top,
                    rgba(198,161,91,.12),
                    transparent 35%
            ),
            rgba(8,8,8,.97);

    backdrop-filter: blur(30px);

    z-index: 2000;

    transform: ${({ $open }) =>
            $open ? "translateX(0)" : "translateX(100%)"};

    opacity: ${({ $open }) => ($open ? 1 : 0)};

    visibility: ${({ $open }) =>
            $open ? "visible" : "hidden"};

    transition:
            transform .6s cubic-bezier(.76,0,.24,1),
            opacity .4s ease,
            visibility .4s ease;

    &::before {
        content: "";

        position: absolute;

        inset: 32px;

        border: 1px solid rgba(198,161,91,.15);

        pointer-events: none;

        @media(max-height: 700px) and (max-width: 480px) {
            align-items: flex-start;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
`;
export const CloseButton = styled.button`
    position: absolute;
    z-index: 100;
    top: 50px;
    right: 50px;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.gold};

    font-size: 42px;

    cursor: pointer;
`;
export const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: clamp(34px, 6vw, 58px);

    font-weight: 400;

    color: ${({ theme }) => theme.colors.text};

    text-transform: uppercase;

    letter-spacing: .08em;

    line-height: 1;

    text-align: center;

    margin-bottom: 15px;
    @media(max-height:700px) and (max-width:480px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;
export const Subtitle = styled.span`
    color: ${({ theme }) => theme.colors.gold};

    font-size: 10px;

    letter-spacing: .4em;

    text-transform: uppercase;

`;
export const Content = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 520px;

    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-height: 700px) and (max-width: 480px) {
        padding-top: 10px;
        padding-bottom: 20px;
    }
`;
export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 10px;
    @media(max-width:${({ theme }) => theme.media.tablet}) {
        gap: 2px;
    }
`;
export const Row = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 24px;

    @media(max-width:${({ theme }) => theme.media.tablet}) {
        grid-template-columns: 1fr;
        gap: 2px;
    }
`;
export const Input = styled.input`
    width:80%;

    height: 40px;

    padding:0;

    background:transparent;

    border:none;

    border-bottom:
            1px solid rgba(198,161,91,.25);

    color:${({theme})=>theme.colors.text};

    font-size:14px;

    text-align:center;

    transition:.3s ease;

    color-scheme: light;

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);

        cursor: pointer;
    }

    &:focus{
        outline:none;

        border-color:
                ${({theme})=>theme.colors.gold};
    }


    &::placeholder{
        color:${({theme})=>theme.colors.muted};

        text-transform:uppercase;

        letter-spacing:.12em;

        font-size:10px;
    }
`;
export const Label = styled.label`
    width: 80%;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.colors.muted};

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: .15em;

    text-align: center;
`;

export const TextArea = styled.textarea`
    width:80%;

    height:80px;

    resize:none;

    padding:15px 0;

    background:transparent;

    border:none;

    border-bottom:
            1px solid rgba(198,161,91,.25);

    color:${({theme})=>theme.colors.text};

    font-size:14px;

    text-align:center;


    &:focus{
        outline:none;

        border-color:
                ${({theme})=>theme.colors.gold};
    }


    &::placeholder{
        color:${({theme})=>theme.colors.muted};

        text-transform:uppercase;

        letter-spacing:.12em;

        font-size:10px;
    }
`;
export const Submit = styled.button`
    width:220px;

    margin:10px auto 0;

    padding:16px 20px;


    background:transparent;

    border:
            1px solid ${({theme})=>theme.colors.gold};


    color:${({theme})=>theme.colors.gold};


    font-size:11px;

    letter-spacing:.3em;

    text-transform:uppercase;


    cursor:pointer;


    transition:.4s ease;


    &:hover{
        background:
                ${({theme})=>theme.colors.gold};

        color:
                ${({theme})=>theme.colors.background};
    }


    @media(max-width:${({theme})=>theme.media.mobile}){

        width:50%;

    }
`;
export const Error = styled.span`
    height:14px;

    margin-top:5px;

    color:#d87a7a;

    font-size:9px;

    letter-spacing:.12em;

    text-transform:uppercase;

    text-align:center;
`;
export const Field = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    flex-direction:column;

    min-height:70px;
`;