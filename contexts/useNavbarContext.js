import { useState, useMemo, createContext } from "react";

export function useNavbarContext(defaultActiveHyperlink) {
	const [activeHyperlink, setActiveHyperlink] = useState(
		defaultActiveHyperlink
	);

	const memoizedDefault = useMemo(() => {
		return [activeHyperlink, setActiveHyperlink];
	}, [activeHyperlink]);

	const NavbarContext = createContext(memoizedDefault);

	return {
		NavbarContext,
		NavbarContextProvider({ children }) {
			return (
				<NavbarContext.Provider value={memoizedDefault}>
					{children}
				</NavbarContext.Provider>
			);
		},
	};
}
