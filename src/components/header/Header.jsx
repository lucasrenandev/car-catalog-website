import { Header, HeaderContainer, Logo, Nav, 
NavList, List, LinkNav, 
LoginBtn, CarContainer, CarText,
H1, Paragraph, CarImage, Image, MenuIcon} from "./styled";
import { BiMenu } from "react-icons/bi"
import { IoClose} from "react-icons/io5"
import { useEffect, useRef, useState } from "react";
import carHeader from "../../assets/car-header.png"
import { HashLink as Link } from "react-router-hash-link";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(BiMenu)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(IoClose)
        }
    }

    const hidleMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        })
    }

    useEffect(hidleMenu)

    return(
        <Header>
            <HeaderContainer>
                <Nav>
                    <Logo href="/">Dev<span>Superior</span></Logo>

                    <NavList ref={navRef} onScroll={hidleMenu}>
                        <List><Link smooth to={'#catalog'}><LinkNav>Catalog</LinkNav></Link></List>
                        <List><Link smooth to={'#about'}><LinkNav>About</LinkNav></Link></List>
                        <List><Link smooth to={'#fe'}><LinkNav>Feature</LinkNav></Link></List>
                        <LoginBtn href="#">Login</LoginBtn>
                    </NavList>

                    <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
                </Nav>

                <CarContainer>
                    <CarText>
                        <H1>The perfect car for you</H1>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nemo.
                        </Paragraph>
                    </CarText>

                    <CarImage>
                        <Image src={carHeader} alt="Header image"/>
                    </CarImage>
                </CarContainer>
            </HeaderContainer>
        </Header>
    )
}