import { Box, Badge, Typography } from "@mui/material";
import PontoIcon from "../PontoIcon";

const CapitalCallHeader = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3.5 }}>
			<Badge
				variant='dot'
				color='error'
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}>
				<PontoIcon
					name='bell'
					color='disabled'
				/>
			</Badge>

			<Typography variant='h2'>Capital Call</Typography>
		</Box>
	);
};

export default CapitalCallHeader;
