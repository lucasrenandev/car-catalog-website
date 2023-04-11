import { About, AboutContainer, AboutText,
H2, H3, AboutBox, BoxImage, Image, 
BoxText, H5, Text } from "./styled";
import aboutImage from "../../assets/about.png"

export default function about() {
    return(
        <About id="about">
            <AboutContainer>
                <AboutText>
                    <H3>Know about us</H3>
                    <H2>About</H2>
                </AboutText>

                <AboutBox>
                    <BoxImage>
                        <Image src={aboutImage} alt="About image"/>
                    </BoxImage>

                    <BoxText>
                        <H5>Join technology and mobility</H5>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repellendus reprehenderit cum maiores mollitia natus optio quaerat quas accusamus suscipit, dolorem, aut quidem sed veritatis voluptate ex, inventore unde consequuntur fuga eveniet. Adipisci modi sit officiis commodi, accusamus asperiores iste eligendi praesentium dignissimos dolore mollitia animi corporis perferendis beatae consectetur repellat vel. Itaque id laboriosam commodi laudantium beatae cum error sed facere officiis quia non perspiciatis sequi harum, ut adipisci? Aliquid impedit voluptas corrupti repudiandae quae, delectus a fugit. Deserunt blanditiis deleniti ipsa velit nobis? Assumenda esse laudantium temporibus fugit repellat error nihil mollitia, quae aut consectetur vitae similique hic.</Text>
                    </BoxText>
                </AboutBox>
            </AboutContainer>
        </About>
    )
}