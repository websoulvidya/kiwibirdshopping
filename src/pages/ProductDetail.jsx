import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import KurthiMat1 from "../assets/kurthimat1.jpg"
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;


const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})}
`;

const ImageContainer = styled.div`
flex:1;

`;

const Image = styled.img`
width:90%;
object-fit: cover;
${mobile({height:"40vh",width:"100%"})}
`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}
`;

const Title = styled.h1`
font-weight: 200;

`;

const Description = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-size: 40px;
font-weight: 100;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})}
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FiltrTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding:5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.div`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500; 

&:hover{
  background-color: teal;
  color: white;
}
`;


function ProductDetail() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
          <ImageContainer>
              <Image src={KurthiMat1}/>
          </ImageContainer>
          <InfoContainer>
              <Title> Kurthi Material</Title>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem. adipisicing elit. 
                Impedit, quidem. adipisicing elit.
                 Impedit, quidem. adipisicing elit. Impedit, quidem. adipisicing elit. Impedit, quidem.</Description>
               <Price>850+$</Price>
               <FilterContainer>
                 <Filter>
                   <FiltrTitle>Color</FiltrTitle>
                   <FilterColor color="black"/>
                   <FilterColor color="red"/>
                   <FilterColor color="darkgreen"/>
                   <FilterColor color="darkblue"/>
                 </Filter>
                 <Filter>
                   <FiltrTitle>Size</FiltrTitle>
                 <FilterSize>
                   <FilterSizeOption>XS</FilterSizeOption>
                   <FilterSizeOption>S</FilterSizeOption>
                   <FilterSizeOption>M</FilterSizeOption>
                   <FilterSizeOption>L</FilterSizeOption>
                   <FilterSizeOption>XL</FilterSizeOption>
                 </FilterSize>
                 </Filter>
               </FilterContainer>
               <AddContainer>
                 <AmountContainer>
                   <Remove />
                   <Amount>1</Amount>
                   <Add />
                 </AmountContainer>
                 <Button>ADD TO CART</Button>
               </AddContainer>
          </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  );
}

export default ProductDetail;
