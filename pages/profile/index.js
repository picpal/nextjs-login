import React from "react";
import ProfileForm from "../../components/profile/ProfileForm";
import { getSession } from "next-auth/client";

const Profile = () => {
  return <ProfileForm />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
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

export default Profile;
