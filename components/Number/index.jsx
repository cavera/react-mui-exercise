/**
 * The idea is generate a component to manage the format of the numeric values in the page.
 */

import { Typography } from "@mui/material";

const Number = ({ number, numberformat, currency, colorCur, variant, cents }) => {
	let numberText = number;
	let curSym = currency || "$";
	let formattedNumber = null;
	let symbolComp = null;
	let symbolColor = colorCur || "inherit";
	let centText = "";

	if (!numberformat) {
		numberText = number;
	} else if (numberformat === "price") {
		formattedNumber = number.toLocaleString("en-EN", {
			minimumFractionDigits: cents,
			maximumFractionDigits: cents,
		});

		if (cents > 0) {
			centText = (
				<Typography
					variant='span'
					fontSize='0.6em'>
					{formattedNumber.slice(-3)}
				</Typography>
			);
		}

		symbolComp = (
			<Typography
				variant='span'
				color={symbolColor}>
				{curSym}
			</Typography>
		);
		numberText = `${formattedNumber}`;
	} else if (numberformat === "percent") {
		numberText = `${number.toFixed(3)}%`;
	}
	return (
		<Typography
			color='initial'
			variant={variant}
			component='span'>
			{symbolComp}
			{numberText}
			{centText}
		</Typography>
	);
};

export default Number;
