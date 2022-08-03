import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {  Search,  ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import KiwiLogo from "../assets/logo.png"
import { mobile } from '../responsive';

const Container = styled.div`
height:60px;
${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
align-items: center;
${mobile({padding:"10px 20px"})}
`;
const Image = styled.img`
z-index:1;
width: 80px;
${mobile({width:"30px"})}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft:"1px"})}
`
const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`
const Logo = styled.div`

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
text-decoration: none;
${mobile({flex:2,justifyContent:"center"})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:"10px",
     marginLeft:"10px",
     marginRight:"5px",
       
  })}
`
const Navbar = () => {
  return (
   <Container>
    <Wrapper>
     <Left>
       <Language>EN</Language>
       <SearchContainer>
       <Input placeholder='Search'/>
      <Search style={{color:"grey" , fontSize: "16px"}} />
       </SearchContainer>
 
       
     </Left>
     <Center>
     <NavLink to="/">
        <Logo>
       <Image src={KiwiLogo}/>
       </Logo>
       </NavLink>
       </Center>
     <Right>
     <NavLink to="/register" style={{color: 'black', textDecoration: 'none'}}> <MenuItem>REGISTER</MenuItem></NavLink>
     <NavLink to="/login" style={{color: 'black', textDecoration: 'none'}}> <MenuItem>SIGN IN</MenuItem></NavLink>
     <NavLink to="/cart" style={{color: 'black', textDecoration: 'none'}}>
      <MenuItem>
       <Badge color="primary" badgeContent={4}>
      <ShoppingCartOutlined />
       </Badge>
       </MenuItem>
       </NavLink>
     </Right>
    </Wrapper>

   </Container>
     
  )
}

export default Navbar