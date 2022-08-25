import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "clsx";
import type { ListOfAmasType, AmaType } from "./ListOfAmas.types";

function ListOfAmas({ amas }: ListOfAmasType) {
	const router = useRouter();
	return <div>{getAmas(amas)}</div>;

	function getAmas(amas: AmaType[]) {
		return amas.map(({ id, query, userName, userImage }) => (
			<div
				key={id}
				className={clsx(
					"flex-col",
					"text-sm",
					"px-2",
					"py-2",
					"mt-1",
					"rounded-md",
					"text-primary",
					"hover:bg-stone-700",
					"hover:cursor-pointer",
					false && "bg-stone-700"
				)}
				onClick={() => router.push(`/ama/${id}`)}
			>
				<span className="block mb-1">{query}</span>
				<div className="flex items-center">
					<Image
						className="rounded-full"
						src={userImage}
						alt="profile"
						width={16}
						height={16}
					/>
					<span className="ml-2">{userName}</span>
				</div>
			</div>
		));
	}
}

export default ListOfAmas;
