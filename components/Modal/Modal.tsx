import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useIsBrowser from "hooks/useIsBrowser";
import { ModalTypes } from "./Modal.types";
import clsx from "clsx";

function Modal({ show = false, onClose, children, title }: ModalTypes) {
	const [showModal, setShowModal] = useState<boolean>(show);
	const isBrowser = useIsBrowser();

	useEffect(() => {
		setShowModal(show);
	}, [show]);

	if (isBrowser) {
		return ReactDOM.createPortal(
			showModal ? ModalUI({ title, onClose, children }) : null,
			document.getElementById("modal-root")
		);
	} else {
		return null;
	}
}

function ModalUI({ title, onClose, children }) {
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
					"border-white",
					"rounded",
					"bg-stone-700",
					"bg-opacity-100"
				)}
			>
				<h3 className="border-b p-4">{title}</h3>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
}

export default Modal;
