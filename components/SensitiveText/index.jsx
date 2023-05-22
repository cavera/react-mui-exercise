import { Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import VisibilityToggle from "../VisibilityToggle";

const SensitiveText = ({ data }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleToggle = () => {
		setIsVisible(!isVisible);
	};

	return (
		<Stack
			direction='row'
			alignItems='center'
			spacing={1}>
			<Typography variant='h6'>{isVisible ? data : "••••••••••"}</Typography>
			<VisibilityToggle
				initialState={false}
				onToggle={handleToggle}
			/>
			{isVisible && (
				<Button
					color='primary'
					size='small'>
					Copy
				</Button>
			)}
		</Stack>
	);
};

export default SensitiveText;
