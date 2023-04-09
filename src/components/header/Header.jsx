import { Header, HeaderContainer, Logo, Nav, 
NavList, List, LinkNav, 
LoginBtn, CarContainer, CarText,
H1, Paragraph, CarImage, Image, MenuIcon} from "./styled";
import { BiMenu } from "react-icons/bi"
import { useState } from "react";
import carHeader from "../../assets/car-header.png"
import { HashLink as Link } from "react-router-hash-link";

export default function header() {
    const [menuIcon] = useState(BiMenu)

    return(
        <Header>
            <HeaderContainer>
                <Nav>
                    <Logo href="/">Dev<span>Superior</span></Logo>

                    <NavList>
                        <List><Link smooth to={'#catalog'}><LinkNav>Catalog</LinkNav></Link></List>
                        <List><Link smooth to={'#about'}><LinkNav>About</LinkNav></Link></List>
                        <List><Link smooth to={'#fe'}><LinkNav>Feature</LinkNav></Link></List>
                        <LoginBtn href="#">Login</LoginBtn>
                    </NavList>

                    <MenuIcon>{menuIcon}</MenuIcon>
                </Nav>

                <CarContainer>
                    <CarText>
                        <H1>The perfect car for you</H1>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nemo.
                        </Paragraph>
                    </CarText>

                    <CarImage>
                        <Image src={carHeader}/>
                    </CarImage>
                </CarContainer>
            </HeaderContainer>
        </Header>
    )
}