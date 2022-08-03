import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from '../responsive';

const Continer = styled.div``;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;  
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})}
`;
const Option = styled.option`

`;
function ProductList() {
  return (
    <Continer>
    <Navbar />
      <Announcement />
      
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
            <Option  selected>Color</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Black</Option>
        </Select>
        <Select>
            <Option  selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Continer>
  );
}

export default ProductList;
