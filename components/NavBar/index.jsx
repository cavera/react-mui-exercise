import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import ToolBarDato from "../ToolBarDato";

const NavBar = () => {
	const data = { value: 7762500, title: "portfolio" };

	//Todo: Tener en cuenta usos de UseEffect

	return (
		<AppBar
			position='static'
			color='background'>
			<Toolbar>
				<Container sx={{ display: "flex", gap: 2 }}>
					<ToolBarDato
						title='Portfolio per value'
						subtitle=''
						number={`$${7762500}`}
					/>
					<ToolBarDato
						title='Gat'
						subtitle='Quantity'
						number={`${5.55}`}
					/>
					<ToolBarDato
						title='Gat'
						subtitle='Denomination'
						number={`$${1000000}`}
					/>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
