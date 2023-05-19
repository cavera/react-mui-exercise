import { Button, Box } from "@mui/material";
import PontoIcon from "../PontoIcon";

const CTA = () => {
	return (
		<Box sx={{ marginTop: 1 }}>
			<Button
				variant='contained'
				startIcon={<PontoIcon name='like' />}>
				I have sent the requiested capital
			</Button>
		</Box>
	);
};

export default CTA;
