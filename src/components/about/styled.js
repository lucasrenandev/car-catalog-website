import styled from "styled-components";

export const About = styled.section`
    padding: 100px;

    @media screen and (max-width: 700px) {
        padding: 100px 20px;
    }
`
export const AboutContainer = styled.main`
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
`
export const AboutText = styled.div`
    margin-bottom: 10px;
`
export const H3 = styled.h3`
    font-size: 1rem;
    font-weight: 400;
`
export const H2 = styled.h2`
    font-size: 19px;
    font-weight: 700;
`
export const AboutBox = styled.div`
    background-color: var(--gray);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 10px 20px 10px 10px;
    border-radius: 10px;
`
export const BoxImage = styled.div`
    background-color: #5b5b5bf3;
    border-radius: 10px;
    flex: 1;

    @media screen and (max-width: 1010px) {
        display: none;
    }
`
export const Image = styled.img`
    
`
export const BoxText = styled.div`
    flex: 2;
    text-align: right;

    @media screen and (max-width: 1010px) {
        flex: 100%;
        text-align: center;
    }
`
export const H5 = styled.h5`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`
export const Text = styled.p`
    color: #949494;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 2px;

    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`