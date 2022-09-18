import { useContext } from "react";
import SnackbarContext from "./SnackbarContext";

export default function useSnackbar() {
	try {
		let snackbarContext = useContext(SnackbarContext);
		console.log(snackbarContext, "@##@");
		return snackbarContext;
	} catch (e) {
		throw new Error("useSnackbar must be used inside Snackbar Provider...");
	}
}
