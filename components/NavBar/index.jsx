import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import ToolBarDato from "../ToolBarDato";
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
			color='background'>
			<Toolbar>
				<Container sx={{ display: "flex", gap: 2 }}>
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
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
