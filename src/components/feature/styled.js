import styled from "styled-components";

export const Feature = styled.section`
    padding: 100px;
    background-color: var(--gray);
`
export const FeatureContainer = styled.main`
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
`
export const FeatureText = styled.div`
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
export const FeatureBox = styled.div`
    background-color: #fff;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    align-items: center;
    gap: 2rem;
    border-radius: 10px;
`
export const Box = styled.div`
    border: 1px solid var(--gray);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
export const BoxImage = styled.figure`
    flex: 1;
`
export const Image = styled.img`
    width: 65px;
    max-width: 100%;
    height: auto;
`
export const BoxText = styled.div`
    flex: 2;
`
export const H5 = styled.h5`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
`
export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;  
`