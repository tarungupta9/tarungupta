import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST" && req.body) {
		const session = await getSession({ req });

		if (!session) {
			res.status(401).send("You are not authenticated");
		}

		if (!req.body.name || !req.body.email || !req.body.query) {
			res.status(400).send("Missing required fields");
		}

		const { name, email, image, query, description = "" } = req.body;

		try {
			const posts = await prisma.ama.create({
				data: {
					name,
					email,
					image,
					query,
					description,
				},
			});
			res.status(201).json(posts);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	} else if (req.method === "GET") {
		let { id } = req.query;

		id = Array.isArray(id) ? id[0] : id;

		try {
			const ama = await prisma.ama.findUnique({
				where: {
					id,
				},
				select: {
					createdAt: true,
					description: true,
					id: true,
					query: true,
					email: true,
					image: true,
					name: true,
				},
			});
			res.status(200).json(ama);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	} else {
		res.status(405).send("Unrecognized API method");
	}
};
