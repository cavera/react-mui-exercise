import { Button, Typography, Box } from "@mui/material";
import PontoIcon from "../PontoIcon";

const CommitmentManagementHeader = () => {
	return (
		<Box sx={{ display: "flex", gap: 4, backgroundColor: "#FAFBFB", padding: 4 }}>
			<Typography
				variant='h2'
				color='initial'>
				Commitment Management
			</Typography>

			<Button
				color='info'
				startIcon={<PontoIcon name='settings' />}>
				Client settings
			</Button>
		</Box>
	);
};

export default CommitmentManagementHeader;
