import styled from "styled-components";
import Navbar from "../components/Navbar";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.customer);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    alert("Login Successfully");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Links>
              <Link to="/register">REGISTER HERE!</Link>
            </Links>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://i.pinimg.com/564x/15/1d/a8/151da8cc9abdac110ab4d3ffa924270b.jpg");
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  border: 1px solid teal;
`;
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
  margin: 10px 0px;
  padding: 10px;
`;

const Error = styled.span`
  color: red;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Links = styled.a`
  flex: 1;
  margin: 5px 0px;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;
