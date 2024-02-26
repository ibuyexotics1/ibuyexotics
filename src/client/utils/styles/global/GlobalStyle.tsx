import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Poppins;
    }

    html { font-size: 100%; }

    button {
        border: none;
    }
`;
