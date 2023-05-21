import { Card } from "@mui/material";

const ProgressCard = ({ children, disabled }) => {
	const opacity = disabled ? 0.2 : 1;
	return (
		<Card
			variant='outlined'
			sx={{
				display: "flex",
				gap: 2,
				alignItems: "center",
				width: "100%",
				padding: 1.5,
				opacity: `${opacity}`,
			}}>
			{children}
		</Card>
	);
};

export default ProgressCard;
