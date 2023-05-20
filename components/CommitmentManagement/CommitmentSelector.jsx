import { useState } from "react";
import { MenuItem, Select, FormControl } from "@mui/material";

const CommitmentSelector = props => {
	const [commitment, setCommitment] = useState(0);

	const handleChange = event => {
		setCommitment(event.target.value);
	};

	return (
		<FormControl
			sx={{ minWidth: "auto" }}
			size='small'>
			<Select
				displayEmpty
				value={commitment}
				onChange={handleChange}>
				<MenuItem value={0}>
					Commitment ID <span>#000000000</span>
				</MenuItem>
				<MenuItem value={1}>
					Commitment ID <span>#000000001</span>
				</MenuItem>
				<MenuItem value={2}>
					Commitment ID <span>#000000002</span>
				</MenuItem>
				<MenuItem value={3}>
					Commitment ID <span>#000000003</span>
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default CommitmentSelector;
