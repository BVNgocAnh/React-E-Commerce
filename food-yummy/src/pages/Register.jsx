import styled from "styled-components";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";

export default function Register() {
  const [nameCus, setNameCus] = useState("");
  const [phoneCus, setPhoneCus] = useState("");
  const [username, setUsername] = useState("");
  const [emailCus, setEmailCus] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [addressCus, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    try {
      register(dispatch, {
        nameCus,
        phoneCus,
        username,
        password,
        emailCus,
        sex,
        addressCus,
      });
      alert("Register Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input
              placeholder="name"
              onChange={(e) => setNameCus(e.target.value)}
            />
            <Input
              placeholder="phone number"
              onChange={(e) => setPhoneCus(e.target.value)}
            />
            <Input
              placeholder="email"
              onChange={(e) => setEmailCus(e.target.value)}
            />
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="your sexual"
              onChange={(e) => setSex(e.target.value)}
            />
            <Input
              placeholder="your address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleClick}>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://i.pinimg.com/564x/7a/6f/c4/7a6fc47ad5dfb748d0319e398c81c8e8.jpg");
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;
//   ${mobile({ width: "75%" })}
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
