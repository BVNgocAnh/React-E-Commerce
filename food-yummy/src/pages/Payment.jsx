import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Container = styled.div``;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Wrapper = styled.div`
  height: 70px;
  padding: 20px;
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

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  margin-right: 50px;
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 220px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductCategory = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.category};
`;

const ProductWeight = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
// `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  margin-right: 50px;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Hr = styled.hr``;

const KEY =
  "pk_test_51M9t4hKFAxqQdTRC99zi4I6RDYLYxQa6rcJnxz2ijTp9pTvkkuebDFInJUgM3sx9CtB22zR7Y5CLNHKPSwmDyqDF00tjx8mwx4";

const BASE_URL = "http://localhost:3000/server/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc0YWVkOWIyM2NjYzY3MDM1ODc4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTkwMTM4MiwiZXhwIjoxNjcwMTYwNTgyfQ.8haKRLHGJe4Xki208SDLeohL3R-yUbHumcSbL1M6DjY";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `thisistoken ${TOKEN}` },
});

export default function Payment() {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [stripeToken, setStripeToken] = useState("");
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/server/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        console.log(res.data);

        navigate(
          "/success",
          { stripeData: res.data, product: cart },
          {
            replace: true,
          }
        );
      } catch (error) {
        console.log("Catch error!");
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  console.log(stripeToken);
  return (
    <>
      <Navbar />
      <Hr />
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
        </Wrapper>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.nameProduct}
                    </ProductName>
                    <ProductID>
                      <b>Price: </b>${product.price}
                    </ProductID>
                    <ProductCategory>
                      <b>Category: </b>
                      {product.category}
                    </ProductCategory>
                    <ProductWeight>
                      <b>Weight: </b>
                      {product.weight}
                    </ProductWeight>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <RemoveIcon onClick={() => handleQuantity("dec")} />
                    <Amount>{product.quantity}</Amount>
                    <AddIcon onClick={() => handleQuantity("inc")} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="CAVA shop"
              image="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/292210900_1388242474989999_9150660370707905097_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZgVmLpclicAX_W1yrk&_nc_ht=scontent.fhan14-1.fna&oh=00_AfC78jyUSf0pGVP43zsnGr3P3dohLgK6A4XWB0mOHTErJw&oe=638DFDF5 "
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
        <Footer />
      </Container>
    </>
  );
}
