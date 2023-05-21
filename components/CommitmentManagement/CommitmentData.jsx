import { Card, Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import Number from "../Number";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 8,
}));

const CommitmentData = ({ commitment }) => {
	const { id, totalSuccesfulCalls, allocated, pending, outstanding } = commitment;
	const total = allocated + pending + outstanding;
	const progressValue = (allocated / total) * 100;
	const bufferValue = progressValue + (pending / total) * 100;

	const commitmentId = (
		<Number
			number={id}
			variant='subtitle1'
		/>
	);

	const succesfulCalls = (
		<Number
			number={` ${totalSuccesfulCalls}`}
			variant='subtitle1'
		/>
	);

	return (
		<Card>
			<Stack
				spacing={5}
				px={3.5}
				py={4}
				width='100%'>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant='h6'>Commitment ID {commitmentId}</Typography>
					<Typography variant='h6'>Total succesfull Calls {succesfulCalls}</Typography>
				</Box>
				<Box>
					<Typography variant='h6'>Allocated</Typography>
					<Number
						number={allocated}
						numberformat='price'
						colorCur='secondary'
						variant='h3'
					/>
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'>
					<Box>
						<Typography variant='h6'>Pending allocated</Typography>
						<Number
							number={pending}
							numberformat='price'
							colorCur='secondary'
							variant='subtitle1'
						/>
					</Box>
					<Box>
						<Typography variant='h6'>Outstanding</Typography>
						<Number
							number={outstanding}
							numberformat='price'
							colorCur='#ABABAB'
							variant='subtitle1'
						/>
					</Box>
					<Box>
						<Typography variant='h6'>Total Commitment</Typography>
						<Number
							number={total}
							numberformat='price'
							variant='subtitle1'
						/>
					</Box>
				</Box>
			</Stack>
			<BorderLinearProgress
				color='secondary'
				variant='buffer'
				value={progressValue}
				valueBuffer={bufferValue}
			/>
		</Card>
	);
};

export default CommitmentData;
