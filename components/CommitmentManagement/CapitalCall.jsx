import { Typography, Box, IconButton, Badge, Card } from "@mui/material";
import PontoIcon from "../PontoIcon";

const CapitalCall = ({ data }) => {
	const {
		ammount,
		dates: { requested, due },
		receiver: { bank, account, routingNumber },
	} = data;

	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<IconButton
					aria-label='notification'
					onClick={() => {}}>
					<Badge
						variant='dot'
						color='error'
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}>
						<PontoIcon name='notify' />
					</Badge>
				</IconButton>

				<Typography
					variant='h6'
					color='initial'>
					Commitment Management
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Card
					variant='outlined'
					sx={{ width: "100%" }}>
					<p>Call Amount</p>
					<p>{ammount}</p>
				</Card>
				<Card
					variant='outlined'
					sx={{ width: "100%" }}>
					<p>Requested in</p>
					<p>{requested}</p>
					<p>Due on</p>
					<p>{due}</p>
				</Card>
				<Card
					variant='outlined'
					sx={{ width: "100%" }}>
					<p>Send to</p>
					<p>{bank}</p>
					<p>Account Number</p>
					<p>{account}</p>
					<p>Copy</p>
					<p>Routing Number</p>
					<p>{routingNumber}</p>
				</Card>
			</Box>
		</>
	);
};

export default CapitalCall;
