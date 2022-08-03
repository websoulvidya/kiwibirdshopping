import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { mobile } from '../responsive';
import { tablet } from '../responsive';
import { laptop } from '../responsive';

const Container = styled.div`
flex: 1;
margin: 3px;
height: 50vh;
position: relative;
${tablet({flex:"0 0 50%",padding:"3px",margin:0})}
${laptop({flex:"0 0 50%",padding:"3px",margin:0})}
`
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
${mobile({height:"30vh"})}
`
const Info = styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`
function CategoryItem({item}) {
  return ( <NavLink to="/products" style={{color: 'black', textDecoration: 'none'}}>
      <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>

      </Container>
      </NavLink>

  );
}

export default CategoryItem;
