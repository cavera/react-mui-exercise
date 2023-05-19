import { Card } from "@mui/material";

const ProgressCard = ({ children }) => {
	return (
		<Card
			variant='outlined'
			sx={{
				display: "flex",
				gap: 2,
				alignItems: "center",
				width: "100%",
				padding: 2,
			}}>
			{children}
		</Card>
	);
};

export default ProgressCard;
