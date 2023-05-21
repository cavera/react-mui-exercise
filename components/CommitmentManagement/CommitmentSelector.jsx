import { useState } from "react";
import { MenuItem, Select, FormControl } from "@mui/material";

const CommitmentSelector = ({ commitmentId, commitments, changeComitment }) => {
	const menuItemStyle = { fontSize: "1rem" };

	const handleChange = event => {
		changeComitment(event.target.value);
	};

	return (
		<FormControl
			sx={{ minWidth: "auto", paddingLeft: 4, paddingRight: 4, paddingBottom: 1.5, paddingTop: 3.5 }}
			size='small'>
			<Select
				displayEmpty
				value={commitmentId}
				onChange={event => handleChange(event)}>
				{commitments.map(commitmentEl => (
					<MenuItem
						key={commitmentEl.id}
						value={commitmentEl.id}
						sx={menuItemStyle}>
						Commitment ID <span>#{commitmentEl.id}</span>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CommitmentSelector;
