import {
	AiOutlineInfoCircle,
	AiOutlineWarning,
	AiOutlineCheckCircle,
} from "react-icons/ai";
import { SnackbarProps } from "./Snackbar.types";

function Snackbar({ message, type }: SnackbarProps) {
	const { style, Icon } = snackbarType[type];

	return (
		<div className={`flex items-center p-4 text-primary rounded-lg ${style}`}>
			<Icon size={20} />
			<span className="ml-2">{message}</span>
		</div>
	);
}

const snackbarType = {
	info: {
		style: "bg-sky-600 ",
		Icon: AiOutlineInfoCircle,
	},
	success: {
		style: "bg-green-600",
		Icon: AiOutlineCheckCircle,
	},
	warning: {
		style: "bg-amber-600",
		Icon: AiOutlineWarning,
	},
	error: {
		style: "bg-red-600",
		Icon: AiOutlineInfoCircle,
	},
};

export default Snackbar;
