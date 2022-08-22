import Main from "../components/main/Main";
import { getSession } from "next-auth/client";

export default function Home(props) {
  return <Main session={props.session} />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: {
      session,
    },
  };
}
