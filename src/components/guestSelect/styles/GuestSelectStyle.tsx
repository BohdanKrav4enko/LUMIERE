import styled from "styled-components";


export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
`;
export const SelectButton = styled.button`
    width:80%;

    height:40px;

    background:transparent;

    border:none;

    border-bottom:
        1px solid rgba(198,161,91,.25);


    color:${({theme})=>theme.colors.text};

    font-size:14px;

    text-align:center;

    cursor:pointer;

    transition:.3s ease;


    &:hover {
        border-color:
            ${({theme})=>theme.colors.gold};
    }
`;
export const Arrow = styled.span<{ $open:boolean }>`
    position:absolute;

    right:48px;


    color:
        ${({theme})=>theme.colors.gold};


    transition:.3s ease;


    transform:
        ${({$open}) =>
    $open
        ? "rotate(180deg)"
        : "rotate(0)"
};
`;
export const Options = styled.div<{ $open:boolean }>`
    position:absolute;

    top:50px;

    width:80%;

    left:50%;

    transform:
            ${({$open}) =>
                    $open
                            ? "translate(-50%, 0)"
                            : "translate(-50%, -10px)"
            };


    background:#080808;

    border:
            1px solid rgba(198,161,91,.25);


    overflow:hidden;


    opacity:
            ${({$open})=>$open ? 1 : 0};


    visibility:
            ${({$open})=>$open ? "visible" : "hidden"};


    transition:.3s ease;


    z-index:20;
`;
export const Option = styled.div`
    padding:14px 20px;


    color:
        ${({theme})=>theme.colors.text};


    font-size:13px;


    letter-spacing:.12em;


    text-transform:uppercase;


    cursor:pointer;


    transition:.3s ease;


    &:hover {

        color:
            ${({theme})=>theme.colors.gold};


        background:
            rgba(198,161,91,.08);

    }
`;