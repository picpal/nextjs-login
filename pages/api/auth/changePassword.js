import { getSession } from "next-auth/client";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import connectDB from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "인증되지 않은 사용자 입니다!!" });
    return;
  }

  const userEmail = session.user.email;
  const { oldPassword, newPassword } = req.body;

  console.log(oldPassword, newPassword);

  const client = await connectDB();
  const userCollection = client.db().collection("users");
  const user = await userCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "등록되지 않은 사용자 입니다" });
    client.close();
    return;
  }

  const curPassword = user.password;
  const isEqual = await verifyPassword(oldPassword, curPassword);

  if (!isEqual) {
    res.status(403).json({ message: "기존 비밀번호가 일치하지 않습니다." });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  const result = await userCollection.updateOne(
    {
      email: userEmail,
    },
    {
      $set: { password: hashedPassword },
    }
  );

  client.close();
  res.status(200).json({ message: "비밀번호 변경완료!!!!" });
}

export default handler;
