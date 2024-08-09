import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #ffffff;
    
        --gray-100: #e1e1e6;
        --gray-300: #c4c4cc;
        --gray-400: #8d8d99;
        --gray-600: #323238;
        --gray-700: #29292e;
        --gray-800: #202024;
        --gray-900: #121214;

        --green-300: #00B37E;
        --green-500: #00875f;

        --red-500: #F75A68;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px var(--green-300);
    }

    body{
        background-color: var(--white);
        color: var(--gray-900);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }

`