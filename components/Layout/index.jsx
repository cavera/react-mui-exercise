import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
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
