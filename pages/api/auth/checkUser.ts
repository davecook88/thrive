import { NextApiRequest, NextApiResponse } from "next";
import refreshToken from "../../../utils/GoogleRefreshToken";
import verify from "../../../utils/GoogleVerify";

import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body as AuthPostPayloads.AuthCheckUserPostPayload;

  const token = await getToken({ req, secret });

  // const payload = await verify(body.token);
  console.log("token", token);
  res.status(200).json({ token });
}
