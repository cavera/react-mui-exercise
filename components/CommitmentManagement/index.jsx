import { Box } from "@mui/material";
import CommitmentManagementHeader from "./CommitmentManagementHeader";
import CommitmentDetails from "./CommitmentDetails";
import CapitalCall from "./CapitalCall";
import CTA from "./CTA";

import { commitmentManagement } from "../../data/data";

const CommitmentManagement = () => {
	const cMnt = commitmentManagement;

	return (
		<Box sx={{ padding: 3, border: "1px solid #f2f2f2" }}>
			<CommitmentManagementHeader />

			<CommitmentDetails commitment={cMnt.commitment} />
			<CapitalCall data={cMnt.capitalCall} />
			<CTA />
		</Box>
	);
};

export default CommitmentManagement;
