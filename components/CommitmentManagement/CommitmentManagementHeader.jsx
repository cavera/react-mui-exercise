import { Typography, Box } from "@mui/material";
import PontoIcon from "../PontoIcon";

const CommitmentManagementHeader = () => {
	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			<Typography
				variant='h6'
				color='initial'>
				Commitment Management
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<PontoIcon
					name='settings'
					fontSize='sm'
				/>
				<Typography
					variant='body2'
					color='initial'
					component={"span"}>
					Client settings
				</Typography>
			</Box>
		</Box>
	);
};

export default CommitmentManagementHeader;
