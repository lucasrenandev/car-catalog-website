import styled from "styled-components";

export const Contact = styled.section`
    background-color: var(--orange);
    width: 100%;
    height: auto;
    padding: 60px 20px;
`
export const ContactContainer = styled.div`
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    align-items: flex-start;
    gap: 2rem;
`
export const Box = styled.div`

`
export const H6 = styled.h6`
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
`
export const Nav = styled.nav`

`
export const NavList = styled.ul`

`
export const List = styled.li`
    margin-bottom: 1rem;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
`
export const ListLink = styled.a`
    color: #fff;
    transition: all 0.4s ease;

    &:hover {
        color: var(--blue);
    }
`
export const SocialLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const Image = styled.img`
    width: 34px;
    height: auto;
`