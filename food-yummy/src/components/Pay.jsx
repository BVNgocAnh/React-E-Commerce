import StripeCheckout from "react-stripe-checkout";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//public_key
const KEY =
  "pk_test_51M9t4hKFAxqQdTRC99zi4I6RDYLYxQa6rcJnxz2ijTp9pTvkkuebDFInJUgM3sx9CtB22zR7Y5CLNHKPSwmDyqDF00tjx8mwx4";

const BASE_URL = "http://localhost:3000/auth/"; // my api is on 5000
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzYyYmNlYTllMjRkMjdiNzA3ZWE0NyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk4MjQwNzAsImV4cCI6MTY3MDA4MzI3MH0.VJSp8Z3Q4nwb-q_znqx5T8c9CSdw-FfgUl_QJWnQnE0";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `thisistoken ${TOKEN}` },
});

export default function Pay() {
  const [stripeToken, setStripeToken] = useState("");
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/server/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);

        navigate("/success", {
          replace: true,
        });
      } catch (error) {
        console.log("Catch error!");
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="CAVA shop"
        image="https://i.pinimg.com/564x/d2/9a/77/d29a77c8479d8173c9957c589141734b.jpg"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "red",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          CHECKOUT NOW!
        </button>
      </StripeCheckout>
    </div>
  );
}
