import { Typography, Box } from "@mui/material";
import Number from "../Number";
import TextContainer from "../TextContainer";
import TextWithIcon from "../TextWithIcon";
import { portfolio } from "../../data/data";

const NavbarInfo = () => {
	const {
		pervalue,
		gat: { quantity, denomination },
		yield: { annual },
	} = portfolio;
	return (
		<Box sx={{ display: "flex", gap: { xs: 1, lg: 6 }, flexGrow: 1, paddingLeft: 0 }}>
			<TextContainer>
				<TextWithIcon
					content='Portfolio per value'
					iName='portfolio'
				/>
				<Number
					number={pervalue}
					numberformat='price'
					colorCur='primary'
					variant='h4'
					cents={2}
				/>
			</TextContainer>

			<Box sx={{ display: "flex", gap: 3 }}>
				<TextContainer>
					<TextWithIcon
						content='Gat'
						iName='gat'
					/>
					<Typography variant='body2'>Quantity</Typography>
					<Number
						number={quantity}
						variant='h4'
					/>
				</TextContainer>
				<TextContainer space='top'>
					<Typography variant='body2'>Denomination</Typography>
					<Number
						number={denomination}
						numberformat='price'
						colorCur='primary'
						variant='h4'
						cents={2}
					/>
				</TextContainer>
			</Box>
			<TextContainer>
				<TextWithIcon
					content='Yield'
					iName='money'
				/>

				<Typography variant='body2'>Annual historical</Typography>
				<Number
					number={annual}
					variant='h4'
					numberformat='percent'
				/>
			</TextContainer>
		</Box>
	);
};

export default NavbarInfo;
