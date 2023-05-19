import { Stack, Box, Typography, Card, LinearProgress } from "@mui/material";
import Number from "../Number";

const CommitmentDetails = ({ commitment }) => {
	const { id, totalSuccesfulCalls, allocated, pending, outstanding, total } = commitment;
	const progressValue = (outstanding / total) * 100;
	const bufferValue = progressValue + (pending / total) * 100;

	return (
		<Box
			display='flex'
			gap={2}>
			<Card sx={{ flexGrow: 1 }}>
				<Stack
					spacing={4}
					p={3}
					width='100%'>
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Typography variant='subtitle2'>
							Commitment ID <Number number={id} />
						</Typography>
						<Typography variant='subtitle2'>
							Total succesfull Calls
							<Number number={` ${totalSuccesfulCalls}`} />
						</Typography>
					</Box>
					<Box>
						<Typography variant='subtitle2'>Allocated</Typography>
						<Number
							number={allocated}
							numberformat='price'
						/>
					</Box>
					<Box
						display='flex'
						justifyContent='space-between'>
						<Box>
							<Typography>Pending allocated</Typography>
							<Number
								number={pending}
								numberformat='price'
							/>
						</Box>
						<Box>
							<Typography>Outstanding</Typography>
							<Number
								number={outstanding}
								numberformat='price'
							/>
						</Box>
						<Box>
							<Typography>Total Commitment</Typography>
							<Number
								number={total}
								numberformat='price'
							/>
						</Box>
					</Box>
				</Stack>
				<LinearProgress
					color='success'
					variant='buffer'
					value={progressValue}
					valueBuffer={bufferValue}
				/>
			</Card>
			<Box width='30%'>Possible chart</Box>
		</Box>
	);
};

export default CommitmentDetails;