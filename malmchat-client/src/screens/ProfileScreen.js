import React from "react";

import styles from "../css/cssScreens/profile-screen.module.css";

import MyNavbar from "../components/MyNavbar";
import { Container } from "react-bootstrap";

function ProfileScreen(props) {
  return (
    <>
      <MyNavbar />
      <Container className={styles.mainContainer}>
        <h1>Coming Soon...</h1>
      </Container>

        
    </>
  );
}

export default ProfileScreen;
