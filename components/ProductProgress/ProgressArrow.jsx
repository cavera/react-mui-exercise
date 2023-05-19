import { Box } from "@mui/material";
import PontoIcon from "../PontoIcon";

const ProgressArrow = () => {
	return (
		<Box
			sx={{ width: "auto", display: "grid", placeItems: "center" }}
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
