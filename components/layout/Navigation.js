import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/client";

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
  const [session, loading] = useSession();

  return (
    <NaviWrap>
      <NaviItem>
        <li>
          <Link href="/">Go Main</Link>
        </li>
        {session && (
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </NaviItem>
    </NaviWrap>
  );
};

export default Navigation;
