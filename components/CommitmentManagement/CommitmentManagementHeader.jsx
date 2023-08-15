import { Button, Typography, Box } from '@mui/material'
import MyIcon from '../MyIcon'

const CommitmentManagementHeader = () => {
	return (
		<Box sx={{ display: 'flex', gap: 4, backgroundColor: '#FAFBFB', padding: 4 }}>
			<Typography
				variant='h2'
				color='initial'>
				Commitment Management
			</Typography>

			<Button
				color='info'
				startIcon={<MyIcon name='settings' />}>
				Client settings
			</Button>
		</Box>
	)
}

export default CommitmentManagementHeader
