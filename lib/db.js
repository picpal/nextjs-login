import { MongoClient } from "mongodb";

const connectDB = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_DB_ID}:${process.env.NEXT_PUBLIC_DB_PW}@cluster0.ep82q6k.mongodb.net/auth-demo?retryWrites=true&w=majority`
  );

  return client;
};

export default connectDB;
