import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #FFFFFF;
        --font: #F5F5FF;
        --black: #121214;
        --green: #00FF7E;
        --gray-100: #3D3D3D;
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
        background-color: var(--black);
        color: var(--font);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`