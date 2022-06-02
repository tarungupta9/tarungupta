import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useIsBrowser from "hooks/useIsBrowser";
import { IoCloseSharp } from "react-icons/io5";
import { ModalTypes } from "./Modal.types";
import clsx from "clsx";

function Modal({ show = false, onClose, children, title, footer }: ModalTypes) {
	const [showModal, setShowModal] = useState<boolean>(show);
	const isBrowser = useIsBrowser();

	useEffect(() => {
		setShowModal(show);
	}, [show]);

	if (isBrowser) {
		return ReactDOM.createPortal(
			showModal ? ModalUI({ title, footer, onClose, children }) : null,
			document.getElementById("modal-root")
		);
	} else {
		return null;
	}
}

function ModalUI({ title, footer, onClose, children }) {
	return (
		<div
			data-id="modal-ui"
			className={clsx(
				"fixed",
				"inset-0",
				"flex",
				"justify-center",
				"items-center",
				"text-primary",
				"bg-stone-900/70"
			)}
			onClick={(e: React.SyntheticEvent<EventTarget>) => {
				if ((e.target as HTMLDivElement).dataset?.id == "modal-ui") {
					onClose();
				}
			}}
		>
			<div
				className={clsx(
					"border",
					"border-secondary",
					"rounded",
					"bg-stone-800",
					"bg-opacity-100",
					"w-4/12"
				)}
			>
				<div
					className={clsx(
						"flex",
						"justify-between",
						"items-center",
						"border-b",
						"border-secondary",
						"px-4",
						"py-2"
					)}
				>
					<h3>{title}</h3>
					<IoCloseSharp
						className={clsx("cursor-pointer")}
						onClick={() => {
							onClose();
						}}
					/>
				</div>
				<div className="p-4">{children}</div>
				{footer && (
					<div
						className={clsx(
							"border-t",
							"border-secondary",
							"px-4",
							"py-2",
							"text-tertiary",
							"text-xs"
						)}
					>
						{footer}
					</div>
				)}
			</div>
		</div>
	);
}

export default Modal;
