export type ConfirmModalTypes = {
	show: boolean;
	title?: string;
	footer?: string;
	onClose: Function;
	onSuccess: Function;
	onReject: Function;
};
