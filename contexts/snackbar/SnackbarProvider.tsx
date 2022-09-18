import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import {
	alertEnum,
	AlertProps,
	SnackbarProps,
} from "@components/Snackbar/Snackbar.types";
import SnackbarContainer from "@containers/SnackbarContainer";
import SnackbarContext from "./SnackbarContext";

export default function SnackbarProvider({ children }) {
	const [alerts, setAlerts] = useState<SnackbarProps[]>([]);

	const setAlert = useCallback((alert: AlertProps) => {
		const alertWithDefaults = {
			id: uuidv4(),
			autoHideDuration: 3000,
			type: alertEnum.info,
			...alert,
		};

		setAlerts((currAlerts) => [...currAlerts, alertWithDefaults]);

		setTimeout(() => {
			setAlerts((alerts) =>
				alerts.filter(({ id }) => id != alertWithDefaults.id)
			);
		}, alertWithDefaults.autoHideDuration);
	}, []);

	return (
		<SnackbarContext.Provider value={setAlert}>
			<SnackbarContainer alerts={alerts} />
			{children}
		</SnackbarContext.Provider>
	);
}
