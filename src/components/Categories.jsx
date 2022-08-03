import React from 'react';
import styled from "styled-components";
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';
import { tablet } from '../responsive';
import { laptop } from '../responsive';
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({margin:"0px 0px",display:"flex",flexDirection:"column"})}
${tablet({flexWrap: "wrap",display:"flex"})}
${laptop({flexWrap: "wrap",display:"flex"})}
`
function Categories() {
  return (
         <Container>
          {categories.map((item)=>{
              return(
             <CategoryItem item={item} key={item.id}/>
              )
              
          })}
      </Container>
   
  );
}

export default Categories;
