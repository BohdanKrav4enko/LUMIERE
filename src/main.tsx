import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './app/App.tsx'
import {GlobalStyle} from "./styles/GlobalStyle.ts";
import {theme} from "./styles/theme.ts";
import {ThemeProvider} from "styled-components";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
            <GlobalStyle/>
        </ThemeProvider>
    </StrictMode>,
)
