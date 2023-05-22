import { Typography, Box, Grid } from "@mui/material";
import CapitalCallHeader from "./CapitalCallHeader";
import CapitalCallCard from "../CommitmentManagement/CapitalCallCard";
import TextContainer from "../TextContainer";
import Number from "../Number";
import SensitiveText from "../SensitiveText";

const CapitalCall = ({ data }) => {
	const {
		ammount,
		dates: { requested, due },
		receiver: { bank, account, routingNumber },
	} = data;

	return (
		<Box sx={{ pt: 4, pl: 4, pr: 4, pb: 3.5, mt: 4 }}>
			<CapitalCallHeader />

			<Grid
				container
				spacing={3.5}
				alignItems='stretch'>
				<Grid
					item
					lg={4}
					sm={6}
					xs={12}>
					<CapitalCallCard>
						<TextContainer>
							<Typography variant='h5'>Call Amount</Typography>
							<Number
								number={ammount}
								numberformat='price'
								variant='h3'
							/>
						</TextContainer>
					</CapitalCallCard>
				</Grid>

				<Grid
					item
					lg={4}
					sm={6}
					xs={12}>
					<CapitalCallCard>
						<TextContainer>
							<Typography variant='h5'>Requested in</Typography>
							<Typography variant='h6'>{requested}</Typography>
						</TextContainer>
						<TextContainer>
							<Typography variant='h5'>Due on</Typography>
							<Typography variant='h6'>{due}</Typography>
						</TextContainer>
					</CapitalCallCard>
				</Grid>

				<Grid
					item
					lg={4}
					xs={12}
					sm={12}>
					<CapitalCallCard>
						<TextContainer>
							<Typography variant='h5'>Send to</Typography>
							<Typography variant='h6'>{bank}</Typography>
							<Typography variant='h6'>Account Number</Typography>
							<SensitiveText data={account} />
						</TextContainer>
						<TextContainer space='top'>
							<Typography variant='h6'>Routing Number</Typography>
							<SensitiveText data={routingNumber} />
						</TextContainer>
					</CapitalCallCard>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CapitalCall;
