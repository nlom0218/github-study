import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";

// const Container = styled.div({
//   // display: "flex",
//   // flexDirection: "row",
//   // alignItems: "center",
//   // justifyContent: "center",
//   // borderBottom: `solid 1px ${colors.pink.light}`,
//   // boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
//   // padding: "5px 30px",
//   // minHeight: 80,
//   // backgroundColor: "white",
// });

const Container = styled.div({
  width: 200,
  backgroundColor: "hotpink",
  color: "white",
  borderRadius: "10%",
  padding: 20,
  margin: 10,
  boxShadow: "5px 5px 5px gray",
  textShadow: "3px 3px 3px black",
});

const Btn = styled.button`
  width: 20;
  height: 40;
  padding: 10px 20px;
  margin: 5px;
  color: white;
  background-color: black;
  border: none;
  font-size: 1em;
  border-radius: 10%;
  font-weight: 700;
`;

const Title = styled.h1`
  margin: auto;
  text-align: center;
`;

const Number = styled.h2`
  margin: auto;
  text-align: center;
  padding: 20px;
`;

const Kimoo = () => {
  const [cnt, setCnt] = React.useState(0);

  const plus = () => {
    setCnt((x) => x + 1);
  };

  const minus = () => {
    setCnt((x) => x - 1);
  };

  const makeZero = () => {
    setCnt((x) => (x = 0));
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Title>숫자 세기</Title>
        <Number>{cnt}</Number>
        <Btn onClick={plus}>+</Btn>
        <Btn onClick={makeZero}>0</Btn>
        <Btn onClick={minus}>-</Btn>
      </Container>
    </React.Fragment>
  );
};

export default Kimoo;
