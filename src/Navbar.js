import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  padding: 20px 40px;
  z-index: 10;
  li {
    padding: 10px;
    margin: 15px;
    width: fit-content;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
  background-color: #696969;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    width: 250px;
    height: 100vh;
    background-color: #256860;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.2s ease-out;
    transform: ${(props) =>
      props.close ? "translateX(-100%)" : "translateX(0)"};
    opacity: ${(props) => (props.close ? 0 : 1)};
    padding: 3.5rem 1.5rem;
    li {
      color: #fff;
    }
  }
`;

const Navbar = ({ close }) => {
  return (
    <Ul close={close}>
      <li>Home</li>
      <li>Store</li>
      <li>Donate us</li>
      <li>About us</li>
    </Ul>
  );
};

export default Navbar;
