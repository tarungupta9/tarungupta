import { NextApiRequest, NextApiResponse } from "next";

export default function validateAuth(
	req: NextApiRequest,
	res: NextApiResponse
) {
	return req.cookies && req.cookies["next-auth.session-token"];
}
