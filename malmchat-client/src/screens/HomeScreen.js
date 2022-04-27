import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import styles from "../css/cssScreens/home-screen.module.css";
import StandingsDisplay from "../components/StandingsDisplay";
import { getAllUsersOrderedByBalance } from "../api/users";
import MyNavbar from "../components/MyNavbar";
import GamesList from "../components/GamesList";
import ChatContainer from "../components/chat/ChatContainer";

function HomeScreen(props) {
  const [users, setUsers] = useState(null);

  const getData = async () => {
    //returns the data in order of the user's current balance
    const responseData = await getAllUsersOrderedByBalance();
    setUsers(responseData);
  };
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MyNavbar />
      <Container
        fluid
        style={{ paddingLeft: 0, paddingRight: 0 }}
        className={styles.screen}
      >
        <Container className={styles.chatboxcontainer}>
          <ChatContainer />
        </Container>
      </Container>
    </>
  );
}

export default HomeScreen;
