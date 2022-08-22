import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Heading1 = styled.h1`
  text-align: center;
  padding: 30px 0;
  font-size: 60px;
`;
const Heading2 = styled.h2`
  text-align: center;
  padding: 30px 0;
  font-size: 30px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 20%;
  margin: 0 auto;

  a {
    padding: 10px 20px;
    display: block;
    min-width: 100px;
    margin: 30px auto 0 auto;
    background-color: skyblue;
    border-color: skyblue;
    text-align: center;
    color: #fff;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Main = (props) => {
  const { session } = props;

  return (
    <>
      <Heading1>Welcome My Home</Heading1>
      {session && <Heading2>Sign In!!!</Heading2>}
      {!session && (
        <ButtonWrap>
          <Link href="/auth/signIn">SignIn</Link>
          <Link href="/auth/signUp">SignUp</Link>
        </ButtonWrap>
      )}
    </>
  );
};

export default Main;
