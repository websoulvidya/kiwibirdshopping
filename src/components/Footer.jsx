
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components' 
import KiwiLogo from "../assets/logo.png"
import Googlepay  from "../assets/google-pay.png"
import { mobile } from '../responsive';
import { tablet } from '../responsive';

const Container = styled.div`
display: flex;
background-color:#eaf8f8;
${mobile({flexDirection:"column",backgroundColor:"white"})}
;
`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"
})}
${tablet({display: "none"
})}
`;

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#fcf5f5"})}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`;

const Logo = styled.div``;

const Image = styled.img`
 width: 150px;
`;

const Description = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;

display:flex;
align-items: center;
`;
const Payment = styled.img`
width: 50px;
height: 50px;
`;

    function Footer() {
      return (
        <Container>
          <Left>
              <Logo>
                  <Image src={KiwiLogo} />
              </Logo>
              <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, 
                  sunt numquam! Explicabo quis totam nam, dolore sit mollitia blanditiis ad!</Description>
                  <SocialContainer>
                      <SocialIcon color='3B5999'>
                          <Facebook/>
                      </SocialIcon>
                      <SocialIcon color='E4405F'>
                          <Instagram/>
                      </SocialIcon>
                      <SocialIcon color='E60023'>
                          <Pinterest/>
                      </SocialIcon>
                  </SocialContainer>
          </Left>
          <Center>
          <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Kids Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                   

                </List>
          </Center>
          <Right>
          <Title>Contact</Title>
            <ContactItem>
             <Room style={{marginRight:"10px"}}/>    KiwibirdTrends,S.N Puram P O,Cherthala,Alappuzha
            </ContactItem>
            <ContactItem>
                <Phone   style={{marginRight:"10px"}} />   7994333123
                </ContactItem>
                <ContactItem>
               <MailOutline  style={{marginRight:"10px"}} />   kiwibiredtrends@gmail.com
                </ContactItem>
                <Payment src={Googlepay}/>
          </Right>
        </Container>
      );
    }
    
    export default Footer;
    