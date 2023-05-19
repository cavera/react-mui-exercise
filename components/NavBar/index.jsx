import { AppBar, Toolbar, Box, Chip, IconButton } from "@mui/material";
import ToolBarDato from "../ToolBarDato";
import PontoIcon from "../PontoIcon";
import { portfolio } from "../../data/data";

const NavBar = () => {
	const {
		pervalue,
		gat: { quantity, denomination },
		yield: { annual },
	} = portfolio;

	return (
		<AppBar
			position='static'
			color='background'
			sx={{ boxShadow: "none" }}>
			<Toolbar sx={{ justifyContent: "space-between", border: "1px solid #f2f2f2" }}>
				<Box sx={{ display: "flex", gap: 2, flexGrow: 1, paddingLeft: 0 }}>
					<ToolBarDato
						title='Portfolio per value'
						subtitle=''
						number={pervalue}
						numberformat='price'
					/>
					<ToolBarDato
						title='Gat'
						subtitle='Quantity'
						number={`${quantity}`}
					/>
					<ToolBarDato
						title=' '
						subtitle='Denomination'
						number={denomination}
						numberformat='price'
					/>
					<ToolBarDato
						title='Yield'
						subtitle='Annual historical'
						number={annual}
					/>
				</Box>
				<Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
					<Chip
						label='Capital Call Info'
						icon={<PontoIcon name='capital' />}
					/>
					<Chip
						label='Digital Wallet'
						color='primary'
						icon={<PontoIcon name='wallet' />}
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
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
