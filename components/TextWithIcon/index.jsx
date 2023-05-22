import { Typography, Stack } from "@mui/material";
import PontoIcon from "../PontoIcon";

const TextWithIcon = ({ variant, content, iName, iSize }) => {
	const textVariant = variant || "body1";
	const iconSize = iSize || "12";

	return (
		<Stack
			direction='row'
			alignItems='center'
			spacing={1}>
			<PontoIcon
				name={iName}
				fontSize={iconSize}
			/>
			<Typography variant={textVariant}>{content}</Typography>
		</Stack>
	);
};

export default TextWithIcon;
