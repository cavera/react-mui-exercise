import { useState } from "react";
import { MenuItem, Select, FormControl } from "@mui/material";

const CommitmentSelector = props => {
	const [commitment, setCommitment] = useState(0);

	const menuItemStyle = { fontSize: "1rem" };

	const handleChange = event => {
		setCommitment(event.target.value);
	};

	return (
		<FormControl
			sx={{ minWidth: "auto", paddingLeft: 4, paddingRight: 4, paddingBottom: 1.5, paddingTop: 3.5 }}
			size='small'>
			<Select
				displayEmpty
				value={commitment}
				onChange={handleChange}>
				<MenuItem
					value={0}
					sx={menuItemStyle}>
					Commitment ID <span>#000000000</span>
				</MenuItem>
				<MenuItem
					value={1}
					sx={menuItemStyle}>
					Commitment ID <span>#000000001</span>
				</MenuItem>
				<MenuItem
					value={2}
					sx={menuItemStyle}>
					Commitment ID <span>#000000002</span>
				</MenuItem>
				<MenuItem
					value={3}
					sx={menuItemStyle}>
					Commitment ID <span>#000000003</span>
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default CommitmentSelector;
