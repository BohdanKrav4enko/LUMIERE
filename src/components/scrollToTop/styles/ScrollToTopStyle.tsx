import styled from "styled-components";


export const Button = styled.button`
    position: fixed;

    right: 40px;

    bottom: 40px;


    width: 55px;

    height: 55px;


    display: flex;

    align-items: center;

    justify-content: center;


    background:
        transparent;


    color:
        ${({ theme }) => theme.colors.gold};


    border:
        1px solid ${({ theme }) => theme.colors.gold};


    font-size: 24px;


    cursor: pointer;


    z-index: 100;


    transition:
        ${({ theme }) => theme.transition.default};



    &:hover {

        background:
            ${({ theme }) => theme.colors.gold};


        color:
            ${({ theme }) => theme.colors.background};


        transform:
            translateY(-5px);
    }



    @media(max-width:${({ theme }) => theme.media.mobile}) {

        right: 20px;

        bottom: 20px;

        width: 45px;

        height: 45px;
    }
`;