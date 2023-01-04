import styled from "styled-components";
import Announcement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>{cat}</Title>
      </Wrapper>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="weight" onChange={handleFilters}>
            <Option disabled>Weight</Option>
            <Option>200g</Option>
            <Option>500g</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}
