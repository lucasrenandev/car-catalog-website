import { Contact, ContactContainer, Box, 
H6, Nav, NavList, List, ListLink, SocialLink, Image } from "./styled";
import instaImage from "../../assets/instagram.png"
import faceImage from "../../assets/facebook.png"
import { HashLink as Link } from "react-router-hash-link";

export default function contact() {
    return(
        <Contact>
            <ContactContainer>
                <Box>
                    <H6>Company</H6>

                    <Nav>
                        <NavList>
                            <List><ListLink href="#">Catalog</ListLink></List>
                            <List><ListLink href="#">About</ListLink></List>
                            <List><ListLink href="#">Feature</ListLink></List>
                        </NavList>
                    </Nav>
                </Box>

                <Box>
                    <H6>Rental</H6>

                    <Nav>
                        <NavList>
                            <List><ListLink href="#">Self-Drive</ListLink></List>
                            <List><ListLink href="#">Chauffer-Driven</ListLink></List>
                            <List><ListLink href="#">Help</ListLink></List>
                        </NavList>
                    </Nav>
                </Box>

                <Box>
                    <H6>Stay Connected</H6>

                    <Nav>
                        <SocialLink>
                            <List><ListLink href="#"><Image src={instaImage} alt="Instagram"/></ListLink></List>
                            <List><ListLink href="#"><Image src={faceImage} alt="Facebook"/></ListLink></List>
                        </SocialLink>
                    </Nav>
                </Box>

                <Box>
                    <H6>Contact US</H6>

                    <NavList>
                        <List>+55 31 988776655</List>
                        <List>Contato@devsuperior.com.br</List>
                        <List>Belo Horizonte - MG</List>
                    </NavList>
                </Box>
            </ContactContainer>
        </Contact>
    )
}