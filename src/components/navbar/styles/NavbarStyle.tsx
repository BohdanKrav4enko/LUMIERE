import styled from "styled-components";


export const Header = styled.header`
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 10;

    padding: 35px 0;


    @media(max-width:${({ theme }) => theme.media.tablet}) {
        padding: 25px 0;
    }


    @media(max-width:${({ theme }) => theme.media.mobile}) {
        padding: 20px 0;
    }
`;



export const Nav = styled.nav`
    display: flex;

    justify-content: space-between;

    align-items: center;
`;



export const Logo = styled.a`
    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 28px;

    letter-spacing: 0.35em;

    color: ${({ theme }) => theme.colors.text};

    white-space: nowrap;


    @media(max-width:${({ theme }) => theme.media.tablet}) {
        font-size: 24px;
    }


    @media(max-width:${({ theme }) => theme.media.mobile}) {
        font-size: 20px;

        letter-spacing: 0.25em;
    }
`;



export const NavLinks = styled.div`
    display: flex;

    align-items: center;


    @media(max-width:${({ theme }) => theme.media.tablet}) {
        display: none;
    }
`;



export const NavLink = styled.a`
    margin-left: 40px;


    cursor: pointer;


    font-size: 14px;

    letter-spacing: 0.15em;

    text-transform: uppercase;


    color: ${({ theme }) => theme.colors.muted};


    transition:
        ${({ theme }) => theme.transition.default};



    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }


    @media(max-width:${({ theme }) => theme.media.desktop}) {

        margin-left: 30px;

        font-size: 13px;
    }
`;
export const Burger = styled.button`
    position: relative;

    width: 40px;
    height: 30px;

    display: none;

    background: transparent;
    border: none;

    cursor: pointer;

    z-index: 1001;

    @media(max-width: ${({ theme }) => theme.media.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;



export const BurgerLine = styled.span<{ $open: boolean }>`
    position: absolute;

    width: 100%;
    height: 2px;

    background: ${({ theme }) => theme.colors.gold};

    transition: 0.4s ease;

    &:nth-child(1) {
        transform: ${({ $open }) =>
                $open
                        ? "rotate(45deg)"
                        : "translateY(-10px)"};
    }

    &:nth-child(2) {
        opacity: ${({ $open }) =>
                $open
                        ? 0
                        : 1};
    }

    &:nth-child(3) {
        transform: ${({ $open }) =>
                $open
                        ? "rotate(-45deg)"
                        : "translateY(10px)"};
    }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
    position: fixed;

    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 45px;

    background:
            radial-gradient(
                    circle at top,
                    rgba(198,161,91,0.12),
                    transparent 35%
            ),
            rgba(8, 8, 8, 0.97);

    backdrop-filter: blur(30px);

    transform: ${({ $open }) =>
            $open
                    ? "translateX(0)"
                    : "translateX(100%)"};

    opacity: ${({ $open }) => ($open ? 1 : 0)};

    visibility: ${({ $open }) =>
            $open
                    ? "visible"
                    : "hidden"};

    transition:
            transform 0.6s cubic-bezier(0.76, 0, 0.24, 1),
            opacity 0.4s ease,
            visibility 0.4s ease;

    z-index: 1000;


    &::before {
        content: "";

        position: absolute;

        inset: 40px;

        border: 1px solid rgba(198,161,91,0.15);

        pointer-events: none;
    }
`;
export const MobileLink = styled.a`
    position: relative;

    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: clamp(42px, 7vw, 64px);

    font-weight: 400;

    letter-spacing: 0.08em;

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    transition:
        ${({ theme }) => theme.transition.default};


    &::after {
        content: "";

        position: absolute;

        left: 50%;
        bottom: -12px;

        width: 0;

        height: 1px;

        background:
            ${({ theme }) => theme.colors.gold};

        transform: translateX(-50%);

        transition: 0.4s ease;
    }


    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }


    &:hover::after {
        width: 80%;
    }
`;
export const MobileMenuSubtitle = styled.span`
    position: absolute;

    top: 120px;

    color: ${({ theme }) => theme.colors.gold};

    font-size: 12px;

    letter-spacing: 0.5em;

    text-transform: uppercase;
`;

export const MobileFooter = styled.div`
    position: absolute;

    bottom: 60px;

    text-align: center;

    color: ${({ theme }) => theme.colors.muted};

    font-size: 12px;

    letter-spacing: 0.3em;

    text-transform: uppercase;
`;