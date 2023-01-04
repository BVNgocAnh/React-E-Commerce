// import React from "react";
// import styled from "styled-components";
// import logo from "../assets/FoodYummy6.png";
// import { AiFillInstagram } from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { GrLinkedinOption } from "react-icons/gr";

// export default function Footer() {
//   return (
//     <div className="footer">
//       <Section>
//         <div className="brand container">
//           <img src={logo} />
//           <ul>
//             <li>
//               <AiFillInstagram />
//             </li>
//             <li>
//               <FaFacebookF />
//             </li>
//             <li>
//               <GrLinkedinOption />
//             </li>
//             <li>
//               <BsTwitter />
//             </li>
//           </ul>
//         </div>

//         <div className="about container">
//           <div className="title">
//             <h3>About Us</h3>
//           </div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
//             eligendi repellat laudantium blanditiis iure nulla, ut aliquam
//             itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
//           </p>
//         </div>

//         <div className="contact container">
//           <div className="title">
//             <h3>Contact Us</h3>
//           </div>
//           <p>+84 99999999999</p>
//           <p>cavacoffee@gmail.com</p>
//           <p>@cavacoffee</p>
//           <p>89/89E The Mars street</p>
//         </div>
//       </Section>
//       <LowerFooter className="lower__footer">
//         <h3>
//           Copyright &copy; 2021 <span>CAVA Coffee Specialty</span>
//         </h3>
//       </LowerFooter>
//     </div>
//   );
// }

// const Section = styled.footer`
//   margin: 0;
//   background: linear-gradient(to right, #fc4958, #e85d04);
//   color: white;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10vw;
//   padding: 1vw;
//   p {
//     font-size: 1.1rem;
//     line-height: 2rem;
//     letter-spacing: 0.1rem;
//   }
//   ul {
//     display: flex;
//     list-style-type: none;
//     gap: 4vw;
//     margin-top: 2vw;
//     li {
//       padding: 0.8rem;
//       border-radius: 2rem;
//       background-color: white;
//       transition: 0.3s ease-in-out;
//       cursor: pointer;
//       &:hover {
//         background-color: black;
//         svg {
//           transform: scale(1.2);
//         }
//       }
//       svg {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         color: #fc4958;
//         font-size: 1.6rem;
//         transition: 0.3s ease-in-out;
//         &:hover {
//         }
//       }
//     }
//   }
//   img {
//     // filter: brightness(0) invert(1);
//     width: 7vw;
//     margin-left: 11.5vw;
//   }
//   .container {
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     h3 {
//       font-size: 2rem;
//     }
//   }
//   @media screen and (min-width: 260px) and (max-width: 1080px) {
//     grid-template-columns: 1fr;
//     .container {
//       img {
//         height: 4rem;
//         width: 10rem;
//       }
//     }
//   }
// `;
// const LowerFooter = styled.div`
//   margin: 0;
//   text-align: center;
//   background-color: black;
//   color: white;
//   padding: 0.5rem;
//   h3 {
//     span {
//       color: #fc4958;
//       text-transform: uppercase;
//     }
//   }
//   @media screen and (min-width: 260px) and (max-width: 450px) {
//     h2 {
//       span {
//         display: block;
//       }
//     }
//   }
// `;
import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>CAVA Specialty Coffee</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Pham Ngu Lao street, District
          1, Ho Chi Minh City
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> cava@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
