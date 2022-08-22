import React, { useRef } from "react";
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

const ProfileForm = () => {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;

    const response = await fetch("/api/auth/changePassword", {
      method: "PATCH",
      body: JSON.stringify({ oldPassword, newPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.message) alert(data.message);
    console.log(response.status);
    if (response.status === 200) {
      oldPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
    }
  };

  const signOutHandler = () => {
    signOut();
  };

  return (
    <>
      <FormWrap>
        <form onSubmit={submitHandler}>
          <Input>
            <label htmlFor="oldPassword">CUR PW</label>
            <input type="password" id="oldPassword" ref={oldPasswordRef} />
          </Input>
          <Input>
            <label htmlFor="newPassword">NEW PW</label>
            <input type="password" id="newPassword" ref={newPasswordRef} />
          </Input>
          <Button>Change</Button>
        </form>
      </FormWrap>
      <Button onClick={signOutHandler}>SignOut</Button>
    </>
  );
};

export default ProfileForm;
