import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import clsx from "clsx";
import { FaRegTrashAlt } from "react-icons/fa";
import useSnackbar from "@contexts/snackbar/useSnackbar";
import type { ListOfAmasType, AmaType } from "./ListOfAmas.types";

function ListOfAmas({ amas, selectedId }: ListOfAmasType) {
	const router = useRouter();
	const { data: session } = useSession();
	const setAlert = useSnackbar();

	const [currentAmas, setCurrentAmas] = useState<AmaType[]>(amas);

	return <div>{getAmas(currentAmas, selectedId)}</div>;

	function getAmas(amas: AmaType[], selectedId?: string) {
		return amas.map(({ id, query, name, email, image }) => (
			<div
				key={id}
				className={clsx(
					"group",
					"flex",
					"items-center",
					"justify-between",
					"text-sm",
					"p-2",
					"m-2",
					"rounded-md",
					"text-primary",
					"hover:bg-stone-700",
					"hover:cursor-pointer",
					id == selectedId && "bg-stone-700 shadow-md shadow-stone-700/50"
				)}
				onClick={() => router.push(`/ama/${id}`)}
			>
				<div>
					<span className="block mb-1">{query}</span>
					<div className="flex items-center">
						<Image
							className="rounded-full"
							src={image}
							alt="profile"
							width={16}
							height={16}
						/>
						<span className="ml-2">{name}</span>
					</div>
				</div>
				{session && email === session.user.email && (
					<FaRegTrashAlt
						className="hidden cursor-pointer group-hover:block mr-2"
						onClick={() => handleAMADeletion(id)}
					/>
				)}
			</div>
		));
	}

	async function handleAMADeletion(amaId) {
		confirm("Do you want to delete this query?");
		try {
			await axios.patch("/api/ama", { data: { id: amaId } });

			setCurrentAmas((prevAllComments) =>
				prevAllComments.filter(({ id }) => id !== amaId)
			);

			router.push("/ama");
		} catch (error) {
			setAlert({
				message:
					"Sorry, couldn't delete the comment. Please try again in sometime!",
				type: "error",
			});
		}
	}
}

export default ListOfAmas;
