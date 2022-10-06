// TODO: WIP
import Modal from "@components/Modal/Modal";
import { ConfirmModalTypes } from "./ConfirmModal.types";

function ConfirmModal({
	show,
	title,
	onClose,
	onSuccess,
	onReject,
}: ConfirmModalTypes) {
	return (
		<Modal show={show} title={title} onClose={onClose}>
			<div>Hello</div>
		</Modal>
	);
}

export default ConfirmModal;
