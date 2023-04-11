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
                            <List><Link smooth to={'#catalog'}><ListLink>Catalog</ListLink></Link></List>
                            <List><Link smooth to={'#about'}><ListLink>About</ListLink></Link></List>
                            <List><Link smooth to={'#fe'}><ListLink>Feature</ListLink></Link></List>
                        </NavList>
                    </Nav>
                </Box>

                <Box>
                    <H6>Rental</H6>

                    <Nav>
                        <NavList>
                            <List><Link smooth to={'#'}><ListLink>Self-Drive</ListLink></Link></List>
                            <List><Link smooth to={'#'}><ListLink>Chauffer-Driven</ListLink></Link></List>
                            <List><Link smooth to={"#"}><ListLink>Help</ListLink></Link></List>
                        </NavList>
                    </Nav>
                </Box>

                <Box>
                    <H6>Stay Connected</H6>

                    <Nav>
                        <SocialLink>
                            <List><Link smooth to={'#'}><ListLink><Image src={instaImage} alt="Instagram"/></ListLink></Link></List>
                            <List><Link smooth to={'#'}><ListLink><Image src={faceImage} alt="Facebook"/></ListLink></Link></List>
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