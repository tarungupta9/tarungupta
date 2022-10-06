import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST" && req.body) {
		const session = await getSession({ req });
		const { ama_id, comment } = req.body;

		if (!session) {
			res.status(401).send("You are not authenticated");
		}

		if (!ama_id || !comment) {
			res.status(400).send("Missing required fields");
		}

		try {
			const comments = await prisma.comments.create({
				data: {
					ama_id,
					comment,
					name: session.user.name,
					email: session.user.email,
					image: session.user.image,
				},
			});
			res.status(201).json(comments);
		} catch (error) {
			res.status(500).json(error);
		}
	} else if (req.method === "PATCH" && req.body) {
		const session = await getSession({ req });

		if (!session) {
			res.status(401).send("You are not authenticated");
		}

		const {
			data: { id = undefined },
		} = req.body;

		if (!id) {
			res.status(400).send("Missing required fields");
		}

		try {
			const comments = await prisma.comments.update({
				where: {
					id,
				},
				data: {
					isDeleted: true,
				},
			});
			res.status(200).json(comments);
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
					isDeleted: false,
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
