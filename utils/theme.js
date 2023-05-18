import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#43a047",
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
		},
		warning: {
			main: "#f1832d",
		},
		info: {
			main: "#00b0ff",
		},
		divider: "rgba(47,82,27,0.1)",
	},
});

export { theme };
