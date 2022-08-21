import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NaviWrap = styled.nav`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const NaviItem = styled.ul`
  display: flex;
  width: 40%;
  margin: 0 auto;

  li {
    flex: 1 1 100px;
    text-align: center;
    padding: 10px 20px;
  }

  li a {
    text-decoration: none;
    color: #000;
  }

  li a:hover {
    color: blue;
  }
`;

const Navigation = () => {
  return (
    <NaviWrap>
      <NaviItem>
        <li>
          <Link href="/">메인</Link>
        </li>
        <li>
          <Link href="/auth/signIn">로그인</Link>
        </li>
        <li>
          <Link href="/auth/signUp">회원가입</Link>
        </li>
        <li>
          <Link href="/profile">프로필</Link>
        </li>
      </NaviItem>
    </NaviWrap>
  );
};

export default Navigation;
