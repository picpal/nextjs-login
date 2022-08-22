import React from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import AuthForm from "../../components/auth/AuthForm";

const AuthPage = () => {
  const router = useRouter();
  const {
    query: { sign },
  } = router;

  return <AuthForm signStat={sign} />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default AuthPage;
