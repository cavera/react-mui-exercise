import { useState } from "react";
import { IconButton } from "@mui/material";
import PontoIcon from "../PontoIcon";

const VisibilityToggle = ({ initialState, onToggle }) => {
	const [visibility, setVisibility] = useState(initialState);

	let visibilityIcon = null;

	if (visibility) {
		visibilityIcon = <PontoIcon name='visibility' />;
	} else {
		visibilityIcon = (
			<PontoIcon
				name='visibilityOff'
				color='disabled'
			/>
		);
	}

	const handleToggle = () => {
		setVisibility(!visibility);
		onToggle();
	};

	return <IconButton onClick={handleToggle}>{visibilityIcon}</IconButton>;
};

export default VisibilityToggle;
