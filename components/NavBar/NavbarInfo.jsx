import { Stack, Typography, Box } from "@mui/material";
import Number from "../Number";
import TextContainer from "../TextContainer";
import PontoIcon from "../PontoIcon";
import { portfolio } from "../../data/data";

const NavbarInfo = () => {
	const {
		pervalue,
		gat: { quantity, denomination },
		yield: { annual },
	} = portfolio;
	return (
		<Box sx={{ display: "flex", gap: 6, flexGrow: 1, paddingLeft: 0 }}>
			<TextContainer>
				<Stack
					direction='row'
					alignItems='center'
					spacing={1}>
					<PontoIcon
						name='portfolio'
						fontSize='small'
					/>
					<Typography variant='body1'>Portfolio per value</Typography>
				</Stack>
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
					<Stack
						direction='row'
						alignItems='center'
						spacing={1}>
						<PontoIcon
							name='gat'
							fontSize='small'
						/>
						<Typography variant='body1'>Gat</Typography>
					</Stack>
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
				<Stack
					direction='row'
					alignItems='center'
					spacing={1}>
					<PontoIcon
						name='money'
						fontSize='small'
					/>
					<Typography variant='body1'>Yield</Typography>
				</Stack>
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
