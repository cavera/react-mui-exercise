import { Box } from "@mui/material";
import PontoIcon from "../PontoIcon";

const ProgressArrow = ({ disabled }) => {
	const opacity = disabled ? 0.2 : 1;
	return (
		<Box
			sx={{
				width: "auto",
				display: "grid",
				placeItems: "center",
				opacity: `${opacity}`,
			}}
			color='primary'>
			<PontoIcon
				name='right'
				fontSize='large'
				color='primary'
			/>
		</Box>
	);
};

export default ProgressArrow;
