import { Catalog, CatalogContainer, CatalogText,
H3, H2, CatalogInput, InputText, 
SearchInput, SearchButton, CardContainer,
CardBox, Image, H4, Paragraph, WantButton } from "./styled";
import carCard from "../../assets/car-card.png"

export default function catalog() {
    return(
        <Catalog id="catalog">
            <CatalogContainer>
                <CatalogText>
                    <H3>Find what you want</H3>
                    <H2>Catalog</H2>
                </CatalogText>

                <CatalogInput>
                    <SearchInput>
                        <InputText type="text" placeholder="Choose your favorite model"></InputText>
                        <SearchButton type="button">Search</SearchButton>
                    </SearchInput>
                </CatalogInput>

                <CardContainer>
                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>

                    <CardBox>
                        <Image src={carCard}></Image>
                        <H4>Audi Supra TT</H4>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo!</Paragraph>
                        <WantButton href="#">I want this!</WantButton>
                    </CardBox>
                </CardContainer>
            </CatalogContainer>
        </Catalog>
    )
}