import { Typography, Box, IconButton, Badge, Card } from "@mui/material";
import PontoIcon from "../PontoIcon";
import CapitalCallCard from "./CapitalCallCard";
import TextContainer from "../TextContainer";
import Number from "../Number";

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
						<PontoIcon name='bell' />
					</Badge>
				</IconButton>

				<Typography variant='h6'>Capital Call</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 2 }}>
				<CapitalCallCard>
					<TextContainer>
						<Typography variant='subtitle2'>Call Amount</Typography>
						<Number
							number={ammount}
							numberformat='price'
						/>
					</TextContainer>
				</CapitalCallCard>

				<CapitalCallCard>
					<TextContainer>
						<Typography variant='subtitle2'>Requested in</Typography>
						<Typography variant='body2'>{requested}</Typography>
					</TextContainer>
					<TextContainer>
						<Typography
							variant='subtitle2'
							color='initial'>
							Due on
						</Typography>
						<Typography variant='body2'>{due}</Typography>
					</TextContainer>
				</CapitalCallCard>
				<CapitalCallCard>
					<TextContainer>
						<Typography variant='subtitle2'>Send to</Typography>
						<Typography variant='body2'>{bank}</Typography>
						<Typography variant='body2'>Account Number</Typography>
						<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
							<Typography variant='body2'>{account}</Typography>
							<PontoIcon name='visibility' />
							<Typography
								variant='body2'
								color='primary'>
								Copy
							</Typography>
						</Box>
					</TextContainer>
					<TextContainer space='top'>
						<Typography variant='subtitle2'>Routing Number</Typography>
						<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
							<Typography variant='body2'>{routingNumber}</Typography>
							<PontoIcon
								name='visibilityOff'
								color='disabled'
							/>
						</Box>
					</TextContainer>
				</CapitalCallCard>
			</Box>
		</>
	);
};

export default CapitalCall;
