import { Box } from "@mui/material";
import NavbarInfo from "./NavbarInfo";
import NavbarActions from "./NavbarActions";

const NavBar = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: { md: "row", sm: "column" }, gap: 2, justifyContent: "space-between", border: "1px solid #F0F0F0", padding: 4 }}>
			<NavbarInfo />
			<NavbarActions />
		</Box>
	);
};

export default NavBar;
