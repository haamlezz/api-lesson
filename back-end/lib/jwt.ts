import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export function createToken(
  userId: number,
  username: string
) {
  return jwt.sign(
    {
      userId,
      username,
    },
    SECRET,
    {
      expiresIn: "1d",
    }
  );
}