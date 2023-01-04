import React, { useState } from "react";
import styled from "styled-components";
import foodYummy from "../assets/FoodYummy6.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  const quantity = useSelector((state) => state.cart.quantity);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Container>
        <Nav>
          <div className="brand">
            <img src={foodYummy} alt="Icon" />
            <div className="toggle">
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu
                  onClick={(e) => {
                    e.stopPropagation();
                    setNavbarState(true);
                  }}
                />
              )}
            </div>
          </div>

          <ui className="links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link onClick={handleLogout} to="/login">
                Logout
              </Link>
            </li>
            <Link to="/payment">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <Link to="/payment">
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </MenuItem>
            </Link>
          </ui>
        </Nav>
      </Container>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={() => setNavbarState(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setNavbarState(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/payment" onClick={() => setNavbarState(false)}>
              Payment
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setNavbarState(false)}>
              Login
            </Link>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Container = styled.div`
  // position: fixed;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
      height: 4rem;
    }
    .toggle {
      display: none;
    }
  }

  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #483d8b;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
