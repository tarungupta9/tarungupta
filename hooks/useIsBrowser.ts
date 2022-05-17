// import { useEffect, useState } from "react";

export default function useIsBrowser() {
	// const [isBrowser, setIsBrowser] = useState<boolean>(false);

	// useEffect(() => {
	// 	setIsBrowser(true);
	// }, []);

	// return isBrowser;

	return typeof window != "undefined";
}
