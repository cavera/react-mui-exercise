import { Box, Card, Typography, Stack, LinearProgress } from "@mui/material";
import PontoIcon from "../PontoIcon";
import CommitmentDetails from "./CommitmentDetails";
import CapitalCall from "./CapitalCall";
import Number from "../Number";

import { commitmentManagement } from "../../data/data";

const CommitmentManagement = () => {
	const cMnt = commitmentManagement;

	return (
		<Box sx={{ padding: 3, border: "1px solid #f2f2f2" }}>
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

			<CommitmentDetails commitment={cMnt.commitment} />
			<CapitalCall data={cMnt.capitalCall} />
		</Box>
	);
};

export default CommitmentManagement;
