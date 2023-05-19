/**
 * The idea is generate a component to manage the format of the numeric values in the page.
 */

import { Typography } from "@mui/material";

const Number = ({ number, numberformat, ...props }) => {
	let numberText = number;

	if (!numberformat) {
		numberText = number;
	} else if (numberformat === "price") {
		numberText =
			"$" +
			number.toLocaleString("es-ES", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
	}
	return (
		<Typography
			variant='subtitle1'
			color='initial'
			component='span'>
			{numberText}
		</Typography>
	);
};

export default Number;
