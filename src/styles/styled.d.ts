import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            surface: string;
            gold: string;
            goldLight: string;
            text: string;
            muted: string;
            border: string;
        };

        fonts: {
            heading: string;
            body: string;
        };

        container: {
            width: string;
            padding: string;
        };

        transition: {
            default: string;
        };

        media: {
            desktop: string;
            tablet: string;
            mobile: string;
        };
    }
}