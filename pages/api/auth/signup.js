import { hashPassword } from "../../../lib/auth";
import connectDB from "../../../lib/db";

const handler = async (req, res) => {
  const { email, password } = req.body;

  const validate = (email, password) => {
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "이메일 형식이 맞지 않습니다" });
      return;
    }
    if (!password || password.trim().length < 7) {
      res.status(422).json({ message: "비밀번호 문자열의 길이가 짧아요" });
      return;
    }
  };

  if (req.method !== "POST") {
    return;
  }

  // 유효성 검증 ( 최소한의 검증만 있음 )
  validate(email, password);

  // MongoDB 연결
  const client = await connectDB();
  const db = client.db();

  const registUser = await db.collection("users").findOne({ email });
  if (registUser) {
    res.status(422).json({ message: "해당 email 사용자가 존재합니다" });
    client.close();
    return;
  }

  // 비밀번호 암호화
  const hashedPassword = await hashPassword(password);

  // 사용자 정보 db저장
  const result = await db
    .collection("users")
    .insertOne({ email, password: hashedPassword });

  res.status(201).json({ message: "유저 생성완료!!!!" });
  client.close();
};

export default handler;
