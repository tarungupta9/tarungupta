import PropTypes from "prop-types";
import clsx from "clsx";
import { BsArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/router";

export default function ListOfHyperlinks({ heading, hyperlinks }) {
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
}

function getHyperlinks(hyperlinks) {
	const router = useRouter();

	return hyperlinks.map(function hyperlinksMapper(
		{ isExternal, isSelected, Icon, label, slug },
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
					"hover:bg-hover",
					"hover:cursor-pointer",
					isSelected && "bg-hover"
				)}
				onClick={(e) => {
					handleClick(e, slug);
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

	function handleClick(e, slug) {
		e.stopPropagation();
		router.push(slug);
	}
}

ListOfHyperlinks.propTypes = {
	heading: PropTypes.string,
	hyperlinks: PropTypes.arrayOf(
		PropTypes.shape({
			isExternal: PropTypes.bool,
			isSelected: PropTypes.bool,
			Icon: PropTypes.func.isRequired,
			label: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
		})
	),
};

ListOfHyperlinks.defaultProps = {
	isSelected: false,
	isExternal: false,
};
