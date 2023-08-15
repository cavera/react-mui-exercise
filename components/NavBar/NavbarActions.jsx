import { Stack, Chip, IconButton } from '@mui/material'
import MyIcon from '../MyIcon'

const NavbarActions = () => {
	const chipStyles = { fontSize: 12, padding: 1 }
	return (
		<Stack
			direction='row'
			alignItems='center'
			sx={{ gap: { xs: 1, lg: 3 } }}>
			<Chip
				label='Capital Call Info'
				sx={chipStyles}
				icon={
					<MyIcon
						name='capital'
						fontSize='small'
					/>
				}
			/>
			<Chip
				label='Digital Wallet'
				sx={chipStyles}
				color='primary'
				icon={
					<MyIcon
						name='wallet'
						fontSize='small'
					/>
				}
			/>
			<IconButton
				variant='contained'
				sx={{ backgroundColor: '#f2f2f2', borderRadius: 1 }}
				onClick={() => {}}>
				<MyIcon
					name='money'
					fontSize='small'
				/>
			</IconButton>
		</Stack>
	)
}

export default NavbarActions
