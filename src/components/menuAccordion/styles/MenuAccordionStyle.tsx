import styled from "styled-components";


export const Container = styled.div`
    display: flex;

    flex-direction: column;

    gap: 25px;
`;


export const Item = styled.div`
    border-bottom: 1px solid rgba(198, 161, 91, 0.2);
`;


export const Header = styled.button`
    width: 100%;

    display: flex;

    align-items: center;

    gap: 25px;

    padding: 35px 0;


    background: transparent;

    border: none;


    cursor: pointer;

    text-align: left;
`;


export const CategoryTitle = styled.h3`
    flex: 1;


    color: ${({theme}) => theme.colors.gold};


    font-family: ${({theme}) => theme.fonts.heading};


    font-size: 42px;

    font-weight: 400;


    text-transform: uppercase;


    letter-spacing: .08em;


    @media (max-width: ${({theme}) => theme.media.mobile}) {

        font-size: 30px;
    }
`;


export const Count = styled.span`
    color: ${({theme}) => theme.colors.muted};


    font-size: 13px;

    letter-spacing: .3em;
`;


export const Arrow = styled.span<{ $open: boolean }>`
    color: ${({theme}) => theme.colors.gold};


    font-size: 22px;


    transition: ${({theme}) => theme.transition.default};


    transform: ${({$open}) =>
            $open
                    ? "rotate(180deg)"
                    : "rotate(0)"
    };
`;


export const Content = styled.div<{ $open: boolean }>`
    display: grid;

    grid-template-rows:
        ${({$open}) =>
                $open
                        ? "1fr"
                        : "0fr"
        };
    overflow: hidden;


    opacity: ${({$open}) =>
            $open
                    ? 1
                    : 0
    };


    transition: grid-template-rows .5s ease,
    opacity .3s ease;
`;


export const Inner = styled.div`
    min-height: 0;

    overflow: hidden;

    padding-bottom: 35px;
`;


export const Dish = styled.div`
    display: flex;

    align-items: center;

    gap: 24px;

    width: 100%;

    padding: 25px 0;

    transition: ${({ theme }) => theme.transition.default};

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        padding: 20px 0;
        gap: 16px;
    }
`;


export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
`;


export const Name = styled.h4`
    color:
            ${({theme})=>theme.colors.text};


    font-family:
            ${({theme})=>theme.fonts.heading};


    font-size:32px;

    font-weight:400;


    line-height:1.2;


    margin:0;


    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:24px;

    }
`;

export const DishHeader = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    width: 100%;
`;

export const Description = styled.p`
    color: ${({theme}) => theme.colors.muted};


    font-size: 16px;

    line-height: 1.7;
`;


export const Price = styled.span`
    color:
            ${({theme})=>theme.colors.gold};


    font-family:
            ${({theme})=>theme.fonts.heading};


    font-size:28px;


    white-space:nowrap;


    flex-shrink:0;


    @media(max-width:${({theme})=>theme.media.mobile}) {

        font-size:22px;

    }
`;
export const Image = styled.img`
    width: 110px;
    height: 110px;

    border-radius: 20px;

    object-fit: cover;

    flex-shrink: 0;

    
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        width: 80px;
        height: 80px;

        border-radius: 14px;
    }
`;