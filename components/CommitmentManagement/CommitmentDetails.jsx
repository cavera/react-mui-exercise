import { Stack, Box, Typography, Card, LinearProgress } from "@mui/material";
import Number from "../Number";
import PontoIcon from "../PontoIcon";

const CommitmentDetails = ({ commitment }) => {
	const { id, totalSuccesfulCalls, allocated, pending, outstanding, total } = commitment;
	const progressValue = (outstanding / total) * 100;
	const bufferValue = progressValue + (pending / total) * 100;

	return (
		<Box
			display='flex'
			gap={2}>
			<Box flexGrow={1}>
				<Card>
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
						variant='determinate'
						value={progressValue}
						valueBuffer={bufferValue}
					/>
				</Card>
				<Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
					<PontoIcon
						name='open'
						color='disabled'
					/>
					<Typography
						variant='body2'
						color='disabled'>
						View Documentation
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					width: "30%",
					backgroundColor: "#f5f5f5",
				}}>
				Possible chart
			</Box>
		</Box>
	);
};

export default CommitmentDetails;
