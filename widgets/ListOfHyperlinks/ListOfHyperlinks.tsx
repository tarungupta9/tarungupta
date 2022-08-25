import clsx from "clsx";
import { BsArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/router";
import type { ListOfHyperlinks } from "./ListOfHyperlinks.types";

export default function ListOfHyperlinks({
	heading,
	hyperlinks,
	setActiveHyperlink,
}: ListOfHyperlinks) {
	return (
		<div className={clsx("flex-col", "text-tertiary", "px-4")}>
			{heading && (
				<span
					className={clsx("block", "py-2", "text-sm", "font-normal")}
				>
					{heading}
				</span>
			)}
			<div className="mt-2">{getHyperlinks(hyperlinks)}</div>
		</div>
	);

	function getHyperlinks(hyperlinks) {
		const router = useRouter();

		return hyperlinks.map(function hyperlinksMapper(
			{ id, isExternal, isSelected, Icon, label, slug },
			index
		) {
			return (
				<div
					key={index}
					className={clsx(
						"flex",
						"justify-between",
						"items-center",
						"text-sm",
						"px-2",
						"py-1",
						"mt-1",
						"rounded-md",
						"text-primary",
						"hover:bg-stone-700",
						"hover:cursor-pointer",
						isSelected && "bg-stone-700"
					)}
					onClick={function handleClick(e) {
						e.stopPropagation();
						router.push(slug);
						!isExternal && setActiveHyperlink(id);
					}}
				>
					<div className="flex items-center">
						<Icon className="mr-2" />
						<span>{label}</span>
					</div>
					{isExternal && <BsArrowUpRight />}
				</div>
			);
		});
	}
}
