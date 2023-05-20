import "@fontsource/poppins";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../utils/theme";
import Container from "@mui/material/Container";
import NavBar from "../NavBar";

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Container maxWidth='100%'>
				<NavBar />
				{children}
			</Container>
		</ThemeProvider>
	);
};

export default Layout;
