import React from "react";

import HamburgerNav from "./HamburgerNav";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <HamburgerNav />
      <h1 className={styles.header}>Please open with mobile devices.</h1>
    </>
  );
}

export default App;
