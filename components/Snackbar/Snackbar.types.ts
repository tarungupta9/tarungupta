type AlertType = "info" | "success" | "error" | "warning";

export type SnackbarProps = {
	id: number;
	message: string;
	type?: AlertType;
	autoHideDuration?: number;
};

export type AlertProps = {
	message: string;
	type?: AlertType;
	autoHideDuration?: number;
};

export enum alertEnum {
	info = "info",
	success = "success",
	error = "error",
	warning = "warning",
}
