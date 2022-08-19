import { useCallback, useState } from "react";

export const useToggle = (defaultState = true) => {
	const [isToggled, setIsToggled] = useState(defaultState);

	const toggle = useCallback(() => setIsToggled((state) => !state), []);
	return [isToggled, toggle];
};
