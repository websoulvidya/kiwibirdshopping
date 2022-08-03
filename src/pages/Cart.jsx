import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import KurthiMat1 from "../assets/kurthimat1.jpg"
import Kid1 from "../assets/kid1.jpg"
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px"})}
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopTextArea = styled.div``;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
${mobile({display:"none"})}
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type=="filled" && "none"};
background-color: ${props=>props.type=="filled" ?  "black" : "transparent"};
color: ${props=>props.type=="filled" && "white"};
${mobile({marginRight:"5px",padding:"5px"})}

`;


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
flex:3;
`;

const Product =styled.div`
display: flex;
justify-content: space-around;
${mobile({flexDirection:"column"})}
`;
const ProductDetail =styled.div`
flex: 2;
display: flex;
`;

const Image =styled.img`
width: 200px;
`;

const Details =styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

`;

const ProductName =styled.span`
`;

const ProductId =styled.span``;

const ProductColor =styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;

const ProductSize =styled.span``;

const PriceDetail =styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer =styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount =styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"5px 15px"})}
`;

const ProductPrice =styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:"20px"})}
`;

const Hr =styled.hr`
margin:30px 0px;
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 30vh;
${mobile({margin:"10px 0px"})}
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type=="total" && "500"};
font-size: ${props=>props.type=="total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
`;


function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTextArea>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTextArea>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
              <Product>
                  <ProductDetail> 
                      <Image  src={KurthiMat1}/>
                      <Details>
                          <ProductName><b>Product:</b>Raw cotton</ProductName>
                          <ProductId><b>ID:</b>Raw 112222</ProductId>
                          <ProductColor color="red"/>
                          <ProductSize><b>Size:</b>L</ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <ProductAmountContainer>
                          <Add/>
                          <ProductAmount>2</ProductAmount>
                          <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$30</ProductPrice>
                  </PriceDetail>
              </Product>
            <Hr/>
              <Product>
                  <ProductDetail> 
                      <Image  src={Kid1}/>
                      <Details>
                          <ProductName><b>Product:</b>Raw cotton</ProductName>
                          <ProductId><b>ID:</b>Raw 112222</ProductId>
                          <ProductColor color="green"/>
                          <ProductSize><b>Size:</b>L</ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <ProductAmountContainer>
                          <Add/>
                          <ProductAmount>2</ProductAmount>
                          <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$30</ProductPrice>
                  </PriceDetail>
              </Product>
          </Info>
          <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$100</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$180</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
