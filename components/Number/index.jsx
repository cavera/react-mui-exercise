/**
 * The idea is generate a component to manage the format of the numeric values in the page.
 */

import { Typography } from "@mui/material";

const Number = ({ number, numberformat, currency, colorCur, variant, ...props }) => {
	let numberText = number;
	let curSym = currency || "$";
	let formattedNumber = null;
	let symbolComp = null;
	let symbolColor = colorCur || "inherit";

	if (!numberformat) {
		numberText = number;
	} else if (numberformat === "price") {
		formattedNumber = number.toLocaleString("es-ES", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
		symbolComp = (
			<Typography
				variant='span'
				color={symbolColor}>
				{curSym}
			</Typography>
		);
		numberText = `${formattedNumber}`;
	}
	return (
		<Typography
			color='initial'
			variant={variant}
			component='span'>
			{symbolComp}
			{numberText}
		</Typography>
	);
};

export default Number;
