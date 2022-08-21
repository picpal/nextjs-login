import React from "react";
import { useRouter } from "next/router";
import AuthForm from "../../components/auth/AuthForm";

const Login = (props) => {
  const router = useRouter();
  const {
    query: { sign },
  } = router;

  return <AuthForm signStat={sign} />;
};

export default Login;
