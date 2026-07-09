import styled from "styled-components";

export const Container = styled.div<{ $open: boolean }>`
    position: fixed;

    right: 40px;
    bottom: 40px;

    width: 380px;

    padding: 28px 32px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};

    backdrop-filter: blur(20px);

    z-index: 9999;

    transform: ${({ $open }) =>
    $open
        ? "translateY(0)"
        : "translateY(30px)"};

    opacity: ${({ $open }) =>
    $open
        ? 1
        : 0};

    pointer-events: ${({ $open }) =>
    $open
        ? "auto"
        : "none"};

    transition: all .5s ease;

    @media(max-width:${({ theme }) => theme.media.mobile}) {
        left: 20px;
        right: 20px;

        width: auto;

        bottom: 20px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.gold};

    font-family: ${({ theme }) => theme.fonts.heading};

    font-size: 32px;

    font-weight: 400;

    margin-bottom: 12px;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.muted};

    line-height: 1.8;

    font-size: 15px;
`;