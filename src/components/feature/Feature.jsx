import { Feature, FeatureContainer, FeatureText,
H3, H2, FeatureBox, Box, BoxImage, Image,
BoxText, H5, Text } from "./styled";
import featureImage from "../../assets/feature-planet.png"

export default function feature() {
    return(
        <Feature id="fe">
            <FeatureContainer>
                <FeatureText>
                    <H3>What you can do</H3>
                    <H2>Features</H2>
                </FeatureText>

                <FeatureBox>
                    <Box>
                        <BoxImage>
                            <Image src={featureImage}/>
                        </BoxImage>

                        <BoxText>
                            <H5>Title</H5>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        </BoxText>
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src={featureImage}/>
                        </BoxImage>

                        <BoxText>
                            <H5>Title</H5>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        </BoxText>
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src={featureImage}/>
                        </BoxImage>

                        <BoxText>
                            <H5>Title</H5>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        </BoxText>
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src={featureImage}/>
                        </BoxImage>

                        <BoxText>
                            <H5>Title</H5>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        </BoxText>
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src={featureImage}/>
                        </BoxImage>

                        <BoxText>
                            <H5>Title</H5>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        </BoxText>
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src={featureImage}/>
                        </BoxImage>

                        <BoxText>
                            <H5>Title</H5>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        </BoxText>
                    </Box>
                </FeatureBox>
            </FeatureContainer>
        </Feature>
    )
}