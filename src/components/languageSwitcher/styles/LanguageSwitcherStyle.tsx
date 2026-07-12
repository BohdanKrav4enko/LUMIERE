import styled from "styled-components";


export const Wrapper = styled.div`

    position:relative;

`;



export const Current = styled.button`

    display:flex;

    align-items:center;

    gap:6px;


    height:32px;

    padding:0 10px;


    background:transparent;


    border:
        1px solid rgba(198,161,91,.4);


    color:
        ${({theme})=>theme.colors.gold};


    font-size:11px;

    letter-spacing:.15em;


    cursor:pointer;

`;



export const Dropdown = styled.div`

    position:absolute;

    top:40px;

    right:0;


    display:flex;

    flex-direction:column;


    width:55px;


    border:
        1px solid rgba(198,161,91,.3);


    background:
        ${({theme})=>theme.colors.background};


`;



export const Item = styled.button`

    height:30px;


    background:transparent;


    border:none;


    color:
        ${({theme})=>theme.colors.gold};


    font-size:11px;


    cursor:pointer;


    &:hover{

        background:
            rgba(198,161,91,.1);

    }

`;