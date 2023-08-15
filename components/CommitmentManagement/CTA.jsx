import { Button, Box } from '@mui/material'
import MyIcon from '../MyIcon'

const CTA = () => {
	return (
		<Box sx={{ pl: 4, pb: 4, pr: 4 }}>
			<Button
				variant='contained'
				startIcon={<MyIcon name='like' />}>
				I have sent the requiested capital
			</Button>
		</Box>
	)
}

export default CTA
