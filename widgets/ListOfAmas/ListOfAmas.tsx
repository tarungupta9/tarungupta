import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "clsx";
import type { ListOfAmasType, AmaType } from "./ListOfAmas.types";

function ListOfAmas({ amas, selectedId }: ListOfAmasType) {
	const router = useRouter();
	return <div>{getAmas(amas, selectedId)}</div>;

	function getAmas(amas: AmaType[], selectedId?: string) {
		return amas.map(({ id, query, name, image }) => (
			<div
				key={id}
				className={clsx(
					"flex-col",
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
		));
	}
}

export default ListOfAmas;
