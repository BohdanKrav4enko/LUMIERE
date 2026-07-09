import { ContainerWrapper } from "./styles/ContainerStyles";
import * as React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
};