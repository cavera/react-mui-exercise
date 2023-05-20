/**
 * Provisional color theme
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#125bff",
		},
		secondary: {
			main: "#455a64",
		},
		background: {
			default: "#fbfbfb",
			paper: "#ffffff",
		},
		success: {
			main: "#2e8131",
		},
		error: {
			main: "#ff5252",
			light: "#ffcdd2",
		},
		warning: {
			main: "#f1832d",
		},
		info: {
			main: "#00b0ff",
		},
		divider: "rgba(47,82,27,0.1)",
	},
	typography: {
		fontFamily: "Poppins, sans-serif",
		fontSize: 16,
		h1: {
			fontSize: "2.9rem",
		},
		h2: {
			fontSize: "3.3rem",
		},
		h3: {
			fontSize: "2.2rem",
			fontWeight: 700,
		},
		h6: {
			fontSize: "1.5rem",
			fontWeight: 900,
		},
		fontWeightBold: 900,
	},
});

export { theme };
