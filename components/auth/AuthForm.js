import React, { useRef, useState } from "react";
import { signIn } from "next-auth/client";
import styled from "styled-components";

const FormWrap = styled.div`
  width: 50%;
  margin: 30px auto 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
`;
const Input = styled.span`
  display: flex;
  align-items: center;
  margin: 10px 0;
  label {
    flex: 0 1 100px;
  }
  input {
    flex: 0 1 200px;
    line-height: 25px;
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  display: block;
  min-width: 100px;
  margin: 30px auto 0 auto;
  border: 1px solid #ccc;
  color: #fff;
  &:hover {
    background-color: skyblue;
    border-color: skyblue;
    color: #ccc;
  }

  ${({ signStat }) => {
    return signStat === "signIn" ? `background: skyblue` : `background: green`;
  }}
`;

const AuthForm = ({ signStat }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const createUser = async (email, password) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const signInUser = async (email, password) => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(result);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (signStat === "signUp") {
      createUser(email, password);
    }

    if (signStat === "signIn") {
      signInUser(email, password);
    }
  };

  return (
    <FormWrap>
      <form onSubmit={submitHandler}>
        <Input>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" ref={emailRef} />
        </Input>
        <Input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </Input>
        <Button signStat={signStat}>{signStat}</Button>
      </form>
    </FormWrap>
  );
};

export default AuthForm;
