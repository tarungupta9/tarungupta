import { useLayoutEffect, useState } from "react";

function useIsMobile(width: number = 640) {
	const [isMobile, setIsMobile] = useState(true);

	useLayoutEffect(() => {
		window.addEventListener("resize", updateDevice);

		updateDevice();

		function updateDevice() {
			setIsMobile(window.innerWidth < width);
		}

		return () => window.removeEventListener("resize", updateDevice);
	}, [width]);

	return isMobile;
}

export default useIsMobile;
