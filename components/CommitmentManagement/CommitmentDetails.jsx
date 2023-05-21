import { Box, Button } from "@mui/material";
import PontoIcon from "../PontoIcon";
import CommitmentData from "./CommitmentData";
import CommitmentGraph from "./CommitmentGraph";

const CommitmentDetails = ({ commitment }) => {
	return (
		<Box
			display='flex'
			gap={3.5}
			sx={{ pl: 4, pr: 4 }}>
			<Box
				flexGrow={1}
				width='100%'>
				<CommitmentData commitment={commitment} />
				<Button
					color='info'
					startIcon={<PontoIcon name='open' />}
					sx={{ mt: 3 }}>
					View Documentation
				</Button>
			</Box>
			<Box sx={{ width: "50%" }}>
				<CommitmentGraph />
			</Box>
		</Box>
	);
};

export default CommitmentDetails;
