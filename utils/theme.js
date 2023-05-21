/**
 * Provisional color theme
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	spacing: 8,
	palette: {
		mode: "light",
		primary: {
			main: "#0137ff",
		},
		secondary: {
			main: "#51cc54",
		},
		background: {
			default: "#ffffff",
			paper: "#ffffff",
		},
		success: {
			main: "#2e8131",
		},
		error: {
			main: "#f04c74",
			light: "#ffcdd2",
		},
		warning: {
			main: "#f1832d",
		},
		info: {
			main: "#ababab",
		},
		divider: "rgba(47,82,27,0.1)",
		text: {
			primary: "#000000",
		},
	},
	typography: {
		fontFamily: "Poppins, system-ui",
		fontSize: 16,
		htmlFontSize: 16,
		fontWeightBold: 700,
		fontWeightMedium: 500,
		h1: {
			fontSize: "2.3rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2.25rem",
			fontWeight: 700,
		},
		h3: {
			fontSize: "1.75rem",
			fontWeight: 500,
		},
		h4: {
			fontSize: "1.123rem",
			fontWeight: 500,
		},
		h5: {
			fontSize: "1rem",
			fontWeight: 700,
		},
		h6: {
			fontSize: "1rem",
			fontWeight: 500,
		},
		subtitle1: {
			fontSize: "1rem",
			fontWeight: 500,
			lineHeight: 1.3,
		},
		body1: {
			fontSize: "0.75rem",
			fontWeight: 700,
		},
		body2: {
			fontSize: "0.75rem",
			fontWeight: 500,
			lineHeight: 1.24,
		},
		caption: {
			fontSize: "1rem",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					background: "linear-gradient(to bottom, #FAFAFA, #FFFFFF 20%,#FFFFFF 80%, #F3F3F3)",
					color: "black",
					"& svg": {
						color: "blue",
					},
				},
			},
		},
	},
});

export { theme };
