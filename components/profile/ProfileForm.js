import React from "react";
import styled from "styled-components";
import { signOut } from "next-auth/client";

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
  background: #fff;
  border: 1px solid #ccc;

  &:hover {
    background-color: skyblue;
    border-color: skyblue;
    color: #fff;
  }
`;

const submitHandler = (event) => {
  event.preventDefault();
};

const signOutHandler = () => {
  signOut();
};

const ProfileForm = () => {
  return (
    <>
      <FormWrap>
        <form onSubmit={submitHandler}>
          <Input>
            <label htmlFor="email">CUR PW</label>
            <input type="text" id="email" name="email" />
          </Input>
          <Input>
            <label htmlFor="password">NEW PW</label>
            <input type="text" id="password" name="password" />
          </Input>
          <Button>Change</Button>
        </form>
      </FormWrap>
      <Button onClick={signOutHandler}>SignOut</Button>
    </>
  );
};

export default ProfileForm;
