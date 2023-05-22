import { Stack, Box, Typography } from "@mui/material";
import PontoIcon from "../PontoIcon";
import Number from "../Number";
import { capitalProcess } from "../../data/data";
import ProgressCard from "./ProgressCard";
import ProgressArrow from "./ProgressArrow";
import Tag from "../Tag";

const ProductProgress = () => {
	const { capital, due } = capitalProcess;
	const capitalDue = (
		<Number
			number={capital}
			numberformat='price'
			variant='h5'
			padding={0}
		/>
	);
	const dueDate = <Tag text={due} />;

	return (
		<Box sx={{ display: "flex", gap: { lg: 6, md: 1 }, padding: 4, border: "1px solid #F0F0F0", backgroundColor: "#FAFBFB" }}>
			<ProgressCard>
				<PontoIcon
					name='request'
					fontSize='large'
					color='primary'
				/>
				<Stack
					alignItems='flex-start'
					gap={1}>
					<Tag
						text='Action required'
						type='danger'
					/>

					<Typography
						variant='subtitle1'
						sx={{ lineHeight: 1.7 }}>
						Capital of {capitalDue} is due on {dueDate}
					</Typography>
				</Stack>
			</ProgressCard>
			<ProgressArrow />
			<ProgressCard disabled={true}>
				<PontoIcon
					name='notify'
					fontSize='large'
					color='primary'
				/>
				<Box>
					<Typography variant='subtitle1'>We will notify you once we have received your capital.</Typography>
				</Box>
			</ProgressCard>
			<ProgressArrow disabled={true} />
			<ProgressCard disabled={true}>
				<PontoIcon
					name='toke'
					fontSize='large'
					color='primary'
				/>
				<Box>
					<Typography variant='subtitle1'>{`Toke will then be minted and we will notify you once it's been issued.`}</Typography>
				</Box>
			</ProgressCard>
		</Box>
	);
};

export default ProductProgress;
