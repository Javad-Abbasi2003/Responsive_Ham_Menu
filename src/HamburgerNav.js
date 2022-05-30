import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Div = styled.div`
  height: 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  z-index: 15;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    background-color: ${(props) => (props.close ? "#256860" : "#fff")};
    transform-origin: 1.5rem;
    transition: all 0.2s ease-out;
    &:nth-child(1) {
      transform: ${(props) => (props.close ? "rotate(0)" : "rotate(-45deg)")};
    }
    &:nth-child(2) {
      transition: all 0.1s ease-out;
      transform: ${(props) =>
        props.close ? "translateX(0)" : "translateX(100%)"};
      opacity: ${(props) => (props.close ? 1 : 0)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.close ? "rotate(0)" : "rotate(45deg)")};
    }
  }
`;

class HamburgerNav extends Component {
  constructor() {
    super();
    this.state = {
      close: true,
    };
  }

  clickHandler = () => {
    this.setState({ close: !this.state.close });
  };

  render() {
    return (
      <>
        <Div close={this.state.close} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar close={this.state.close} />
      </>
    );
  }
}

export default HamburgerNav;
