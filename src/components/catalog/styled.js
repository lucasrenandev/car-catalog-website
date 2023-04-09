import styled from "styled-components";

export const Catalog = styled.section`
    padding: 100px;
`
export const CatalogContainer = styled.main`
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
`
export const CatalogText = styled.div`
    margin: 2rem 0 10px;
`
export const H3 = styled.h3`
    font-size: 1rem;
    font-weight: 400;
`
export const H2 = styled.h2`
    font-size: 19px;
    font-weight: 700;
`
export const CatalogInput = styled.div`
    background-color: var(--gray);
    padding: 60px;
    border-radius: 10px;
`
export const SearchInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InputText = styled.input`
    display: inline-block;
    width: 700px;
    max-width: 100%;
    height: 50px;
    border: none;
    outline: none;
    text-indent: 10px;
    font-size: 13px;
    font-weight: 400;
    border-radius: 5px 0 0 5px;
`
export const SearchButton = styled.button`
    display: inline-block;
    background-color: var(--blue);
    padding: 15px 50px;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 0 5px 5px 0;
    font-size: 1.1rem;
    font-weight: 500;
    transition: 0.7s ease;
    
    &:hover {
        background-color: transparent;
        color: var(--blue);
        cursor: pointer;
    }
`
export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
`
export const CardBox = styled.div`
    background-color: var(--gray);
    padding: 20px 25px;
    text-align: center;
    border-radius: 10px;
`
export const Image = styled.img`
    width: 260px;
    max-width: 100%;
    height: auto;
`
export const H4 = styled.h4`
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
`
export const Paragraph = styled.p`
    margin: 20px 0 10px;
    color: #858585;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 25px;
`
export const WantButton = styled.a`
    display: inline-block;
    background-color: var(--blue);
    width: 100%;
    padding: 15px;
    color: #fff;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    transition: all 0.7s ease;

    &:hover {
        background-color: transparent;
        color: var(--blue);
    }
`