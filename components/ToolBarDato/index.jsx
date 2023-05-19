import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Number from "../Number";

const ToolBarDato = ({ title, subtitle, number, numberformat }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
			<Typography
				variant='subtitle2'
				color='initial'>
				{title}
			</Typography>
			<Typography
				variant='body2'
				color='initial'>
				{subtitle}
			</Typography>
			<Number
				number={number}
				numberformat={numberformat}
			/>
		</Box>
	);
};

export default ToolBarDato;
