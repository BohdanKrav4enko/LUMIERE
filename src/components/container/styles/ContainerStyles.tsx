import styled from "styled-components";

export const ContainerWrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.container.width};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.container.padding};

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        padding: 0 16px;
    }
`;