import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST" && req.body) {
		if (!req.body.userName || !req.body.userEmail || !req.body.query) {
			res.status(400).send("Missing required fields");
		}

		const { userName, userEmail, query, description = "" } = req.body;

		const posts = await prisma.ama.create({
			data: {
				userName,
				userEmail,
				query,
				description,
			},
		});
	} else {
		res.send("Unrecognized API method");
	}
};
