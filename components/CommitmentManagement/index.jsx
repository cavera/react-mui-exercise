import { useState } from "react";
import { Box } from "@mui/material";
import CommitmentManagementHeader from "./CommitmentManagementHeader";
import CommitmentSelector from "./CommitmentSelector";
import CommitmentDetails from "./CommitmentDetails";
import CapitalCall from "../CapitalCall";
import CTA from "./CTA";
import { commitmentManagement } from "../../data/data";

const CommitmentManagement = () => {
	const [commitment, setCommitment] = useState(null);
	const cMnt = commitmentManagement;

	return (
		<Box sx={{ border: "1px solid #f2f2f2" }}>
			<CommitmentManagementHeader />
			<CommitmentSelector />
			<CommitmentDetails commitment={cMnt.commitment} />
			<CapitalCall data={cMnt.capitalCall} />
			<CTA />
		</Box>
	);
};

export default CommitmentManagement;
