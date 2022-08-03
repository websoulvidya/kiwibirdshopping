import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.png"
import NavTwo from '../components/NavTwo';
import { mobile } from '../responsive';


const Container = styled.div`
background-image:linear-gradient(#6febd07e,#69f0d27e) ;
height: 100vh;
object-fit: center;
width: 100%;
background-repeat: no-repeat;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;
const LogoContainer = styled.div` 
flex: 0 0 50%;
   display: flex;
   justify-content: flex-end;
position: relative;

`;

const LogoImg = styled.img`
position: absolute;
width: 80px;
`;

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: rgba(255,255,255,10);
opacity: 0.6;
${mobile({width:"75%"})}
`;

const Form = styled.form`
display: flex;
flex: 1;
flex-wrap: wrap;

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
display: flex;
flex: 1;
min-width: 60%;
margin: 20px 10px 0px 0px;
padding: 10px;
color: black;
font-size: 14px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
display:flex;

width: 50%;
border: none;
margin-top: 10px;
align-items: center;
justify-content: center;
background-color: teal;
color: white;
padding: 10px 0px;
font-size: 14px;
font-weight: 600;
cursor: pointer;
`;


function Register() {
  return (
    <>
    <NavTwo />
    <Container>
      
        <Wrapper>
          <LogoContainer>
          <LogoImg  src={Logo}/>
          </LogoContainer>
 
          <Title>CREATE AN ACCOUNT</Title>
   
          <Form>
              <Input placeholder="name"/>
              <Input placeholder="last name"/> 
              <Input placeholder="email"/> 
              <Input placeholder="username"/> 
              <Input placeholder="phone"/> 
              <Input placeholder="password"/>
              <Input placeholder="confirm password"/>
              <Button>Create</Button>
              <Agreement> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, placeat.<b>Privacy Policy</b></Agreement>
             
          </Form>
         
      </Wrapper>
    </Container>
    </>
  );
}

export default Register;
