import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  margin: 20px 40px;
  z-index: 10;
  li {
    padding: 10px;
    margin: 15px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    width: 250px;
    height: 100vh;
    background-color: #256860;
    position: fixed;
    top: 0;
    left: 0;
    padding: 3.5rem 1.5rem;
    li {
      color: #fff;
    }
  }
`;

const Navbar = () => {
  return (
    <Ul>
      <li>Home</li>
      <li>Store</li>
      <li>Donate us</li>
      <li>About us</li>
    </Ul>
  );
};

export default Navbar;
