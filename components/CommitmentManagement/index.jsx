import { useState } from "react";
import { Box } from "@mui/material";
import CommitmentManagementHeader from "./CommitmentManagementHeader";
import CommitmentSelector from "./CommitmentSelector";
import CommitmentDetails from "./CommitmentDetails";
import CapitalCall from "../CapitalCall";
import CTA from "./CTA";
import { commitmentManagement } from "../../data/data";

const CommitmentManagement = () => {
	const cMnt = commitmentManagement;
	const [commitmentId, setCommitmentId] = useState(cMnt.commitments[0].id);

	const commitmentSelected = cMnt.commitments.find(commitment => {
		return commitment.id === commitmentId;
	});

	const handleChange = id => setCommitmentId(id);

	return (
		<Box sx={{ border: "1px solid #f2f2f2" }}>
			<CommitmentManagementHeader />
			<CommitmentSelector
				commitmentId={commitmentId}
				commitments={cMnt.commitments}
				changeComitment={id => handleChange(id)}
			/>
			<CommitmentDetails commitment={commitmentSelected} />
			<CapitalCall data={commitmentSelected.capitalCall} />
			<CTA />
		</Box>
	);
};

export default CommitmentManagement;
