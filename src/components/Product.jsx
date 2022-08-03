import {   FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import React from 'react';
import { mobile } from '../responsive';

const Info  =styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 1000;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 380px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
${mobile({height:"30vh",minWidth:"300px"})}


&:hover ${Info}{
    opacity: 1;
}
`;
const Circle  =styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image  =styled.img`
height: 65%;
${mobile({height:"30vh"})}
z-index: 2;

`;

const Icon  =styled.div`
width: 40px;
height: 40px;
display: flex;
border-radius: 50%;
background-color: white;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color: #E9F5F5;
        transform: scale(1.1);
}

`;
function Product({item}) {
  return (
    <NavLink to="/details" style={{color: 'black', textDecoration: 'none'}}>
    <Container>
      {/* <Circle /> */}
      <Image src={item.img}/>
      <Info>
          <Icon>
              <ShoppingCartOutlined />
          </Icon>
          <Icon>
              <SearchOutlined />    
          </Icon>
          <Icon>
              <FavoriteBorderOutlined />
          </Icon>
      </Info>
    </Container>
    </NavLink>
  );
}

export default Product;
