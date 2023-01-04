import React from "react";
import styled from "styled-components";
import hero from "../assets/backgroundhero1.jpg";
import Announcement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import NewNavbar from "../components/NewNavbar";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <NewNavbar /> */}
      <Announcement />
      <Section id="home">
        <div className="background">
          <img src={hero} alt="Background Image" />
        </div>
        <div className="content">
          <div className="info">
            <h2>What we do?</h2>
            <em>
              We believe that self-discovery happens through experience, whether
              it be traveling the world in search of the finest coffees. Our
              mission is to engage people with an immensely satisfying
              experience. The craft of coffee brewing runs in our cores. At CAVA
              care deeply about the quality and taste of each cup. We are proud
              to be involved in the whole coffee making process — from picking
              the best beans to roasting and bringing out the unique flavors and
              aromas. We can't wait to welcome you for a comforting cup of
              coffee.
            </em>
          </div>
        </div>
      </Section>
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(75%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
