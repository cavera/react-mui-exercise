import { Typography } from "@mui/material";

const Tag = ({ text, type, component }) => {
	const textColor = type === "danger" ? "red" : "black";
	const bgColor = type === "danger" ? "error.light" : "rgba(0,0,0, 0.1)";
	const textComponent = component || "span";
	return (
		<Typography
			variant='body2'
			color={textColor}
			component={textComponent}
			p={1}
			bgcolor={bgColor}
			borderRadius={1}>
			{text}
		</Typography>
	);
};

export default Tag;
