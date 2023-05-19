import { Typography } from "@mui/material";

const Number = ({ number, numberformat }) => {
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
			color='initial'>
			{numberText}
		</Typography>
	);
};

export default Number;
