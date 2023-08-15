import { Box, Badge, Typography } from '@mui/material'
import MyIcon from '../MyIcon'

const CapitalCallHeader = () => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3.5 }}>
			<Badge
				variant='dot'
				color='error'
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}>
				<MyIcon
					name='bell'
					color='disabled'
				/>
			</Badge>

			<Typography variant='h2'>Capital Call</Typography>
		</Box>
	)
}

export default CapitalCallHeader
