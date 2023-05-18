import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ToolBarDato = ({ title, subtitle, number }) => {
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
			<Typography
				variant='subtitle1'
				color='initial'>
				{number}
			</Typography>
		</Box>
	);
};

export default ToolBarDato;
