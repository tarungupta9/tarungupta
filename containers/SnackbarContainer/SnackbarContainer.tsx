import Snackbar from "@components/Snackbar/Snackbar";
import { SnackbarProps } from "@components/Snackbar/Snackbar.types";

export default function SnackbarContainer({ alerts }) {
	return (
		<div className="absolute top-4 right-4 flex flex-col gap-2">
			{renderAlerts(alerts)}
		</div>
	);
}

function renderAlerts(alerts: SnackbarProps[]) {
	return alerts.map((alert) => <Snackbar key={alert.id} {...alert} />);
}
