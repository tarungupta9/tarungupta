import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST" && req.body) {
		const { id, name, email, image } = req.body;

		if (!(id && name && email && image)) {
			res.status(400).send("Missing required fields");
		}

		try {
			const user = await prisma.users.create({
				data: {
					oauthId: id,
					name,
					email,
					image,
				},
			});
			res.status(201).json(user);
		} catch (error) {
			res.status(500).json(error);
		}
	}
};
