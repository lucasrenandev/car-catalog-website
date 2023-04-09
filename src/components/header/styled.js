import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 500px;
    background-color: var(--orange);
`
export const HeaderContainer = styled.main`
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
`
export const Nav = styled.nav`
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.a`
    font-size: 27px;
    font-weight: 400;
    color: var(--blue);

    span {
        font-weight: 700;
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
`
export const List = styled.li`
    padding: 0 1rem;
`
export const LinkNav = styled.a`
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--blue);
    transition: all 0.4s ease;

    &:hover {
        color: #00000083;
    }
`
export const LoginBtn = styled.a`
    display: inline-block;
    background-color: transparent;
    padding: 10px 40px;
    border: 1px solid var(--blue);
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    margin-left: 1rem;
    color: var(--blue);
    transition: 0.7s ease;

    &:hover {
        background-color: var(--blue);
        border: 1px solid transparent;
        color: #fff;
    }
`
export const CarContainer = styled.section`
    background-color: var(--blue);
    height: 450px;
    z-index: 10;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.104);
`
export const CarText = styled.article`
    position: absolute;
    bottom: 150px;
    left: 90px;
`
export const H1 = styled.h1`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: right;
    transform: translateX(-20px);
    transition: 0.4s ease;
`
export const Paragraph = styled.p`
    color: #fff;
    max-width: 275px;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 26px;
    text-align: right;
    transform: translateX(-20px);
    transition: 0.4s ease;
`
export const CarImage = styled.figure`
    position: absolute;
    right: 30px;
    bottom: 10px;
`
export const Image = styled.img`
    width: 550px;
    max-width: 100%;
    height: auto;
`
export const MenuIcon = styled.div`
    font-size: 30px;
    cursor: pointer;
    display: none;
`