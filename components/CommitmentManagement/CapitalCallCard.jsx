import { Card, Typography } from "@mui/material";
import PontoIcon from "../PontoIcon";

const CapitalCallCard = ({ children, direction }) => {
	const directionOpts = direction === "vertical" ? { flexDirection: "column", gap: 1 } : { gap: 6 };

	return (
		<Card
			variant='outlined'
			sx={{ width: "100%", p: 4, backgroundColor: "grey.50", display: "flex", ...directionOpts }}>
			{children}
		</Card>
	);
};

export default CapitalCallCard;
