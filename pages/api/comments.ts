import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST" && req.body) {
		const session = await getSession({ req });

		if (!session) {
			res.status(401).send("You are not authenticated");
		}

		if (
			!req.body.ama_id ||
			!req.body.userName ||
			!req.body.userEmail ||
			!req.body.userImage ||
			!req.body.comment
		) {
			res.status(400).send("Missing required fields");
		}

		const { ama_id, comment, userEmail, userImage, userName } = req.body;

		try {
			const comments = await prisma.comments.create({
				data: {
					ama_id,
					comment,
					userName,
					userEmail,
					userImage,
				},
			});
			res.status(201).json(comments);
		} catch (error) {
			res.status(500).json(error);
		}
	} else if (req.method === "GET") {
		let { id } = req.query;

		id = Array.isArray(id) ? id[0] : id;

		try {
			const comments = await prisma.comments.findMany({
				where: {
					ama_id: id,
				},
			});
			res.status(200).json(comments);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(405).send("Unrecognized API method");
	}
};
