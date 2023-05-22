import { Box } from "@mui/material";
import React from "react";

const TextContainer = ({ children, space, ...props }) => {
	const spaceOptions = {
		top: "flex-end",
		bottom: "flex-start",
		middle: "space-between",
	};

	const justify = spaceOptions[space] || spaceOptions["middle"];
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: `${justify}`,
				alignSelf: "stretch",
				gap: 1,
			}}>
			{children}
		</Box>
	);
};

export default TextContainer;
