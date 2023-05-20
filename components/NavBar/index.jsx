import { Box, Chip, IconButton, Typography, Stack } from "@mui/material";
import PontoIcon from "../PontoIcon";
import { portfolio } from "../../data/data";
import TextContainer from "../TextContainer";
import Number from "../Number";

const NavBar = () => {
	const {
		pervalue,
		gat: { quantity, denomination },
		yield: { annual },
	} = portfolio;

	return (
		<Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid #f2f2f2", padding: 3 }}>
			<Box sx={{ display: "flex", gap: 2, flexGrow: 1, paddingLeft: 0 }}>
				<TextContainer>
					<Stack
						direction='row'
						alignItems='center'
						spacing={1}>
						<PontoIcon
							name='portfolio'
							fontSize='small'
						/>
						<Typography variant='subtitle2'>Portfolio per value</Typography>
					</Stack>
					<Number
						number={pervalue}
						numberformat='price'
						colorCur='primary'
					/>
				</TextContainer>
				<TextContainer>
					<Stack
						direction='row'
						alignItems='center'
						spacing={1}>
						<PontoIcon
							name='gat'
							fontSize='small'
						/>
						<Typography variant='subtitle2'>Gat</Typography>
					</Stack>
					<Typography variant='body2'>Quantity</Typography>
					<Number number={quantity} />
				</TextContainer>
				<TextContainer space='top'>
					<Typography variant='body2'>Denomination</Typography>
					<Number
						number={denomination}
						numberformat='price'
						colorCur='primary'
					/>
				</TextContainer>
				<TextContainer>
					<Stack
						direction='row'
						alignItems='center'
						spacing={1}>
						<PontoIcon
							name='money'
							fontSize='small'
						/>
						<Typography variant='subtitle2'>Yield</Typography>
					</Stack>
					<Typography variant='body2'>Annual historical</Typography>
					<Number number={annual} />
				</TextContainer>
			</Box>
			<Stack
				direction='row'
				alignItems='center'
				spacing={2}>
				<Chip
					label='Capital Call Info'
					icon={
						<PontoIcon
							name='capital'
							fontSize='small'
						/>
					}
				/>
				<Chip
					label='Digital Wallet'
					color='primary'
					icon={
						<PontoIcon
							name='wallet'
							fontSize='small'
						/>
					}
				/>
				<IconButton
					variant='contained'
					sx={{ backgroundColor: "#f2f2f2", borderRadius: 1 }}
					onClick={() => {}}>
					<PontoIcon
						name='money'
						fontSize='small'
					/>
				</IconButton>
			</Stack>
		</Box>
	);
};

export default NavBar;
