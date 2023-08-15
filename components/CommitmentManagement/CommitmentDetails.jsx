import { Button, Grid } from '@mui/material'
import MyIcon from '../MyIcon'
import CommitmentData from './CommitmentData'
import CommitmentGraph from './CommitmentGraph'

const CommitmentDetails = ({ commitment }) => {
	return (
		<Grid
			container
			spacing={3.5}
			sx={{ pl: 4, pr: 4 }}>
			<Grid
				item
				lg={8}
				md={6}>
				<CommitmentData commitment={commitment} />
				<Button
					color='info'
					startIcon={<MyIcon name='open' />}
					sx={{ mt: 3 }}>
					View Documentation
				</Button>
			</Grid>
			<Grid
				item
				lg={4}
				md={6}>
				<CommitmentGraph />
			</Grid>
		</Grid>
	)
}

export default CommitmentDetails
