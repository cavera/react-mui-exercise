import { Box } from "@mui/material";
import React from "react";

const TextContainer = ({ children, space, ...props }) => {
	const spaceOptions = {
		top: "end",
		bottom: "start",
		middle: "space-between",
	};

	const justify = spaceOptions[space] || spaceOptions["middle"];
	console.log(justify);
	return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: `${justify}`, height: "100%" }}>{children}</Box>;
};

export default TextContainer;
