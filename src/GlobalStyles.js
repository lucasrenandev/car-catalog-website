import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    #root {
        width: 100%;
        min-height: 100vh;
        background-color: #fff;
    }

    :root {
        --orange: #f78b00;
        --blue: #00285f;
        --gray: #ededed;
    }

    img {
        display: inline-block;
    }

`