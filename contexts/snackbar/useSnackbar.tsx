import { useContext } from "react";
import SnackbarContext from "./SnackbarContext";

export default function useSnackbar() {
	try {
		return useContext(SnackbarContext);
	} catch (e) {
		throw new Error("useSnackbar must be used inside Snackbar Provider...");
	}
}
