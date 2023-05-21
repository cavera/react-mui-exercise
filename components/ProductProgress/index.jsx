import { Stack, Box, Chip, Typography } from "@mui/material";
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
		/>
	);
	const dueDate = <Tag text={due} />;

	return (
		<Box sx={{ display: "flex", gap: 6, padding: 4, border: "1px solid #F0F0F0", backgroundColor: "#FAFBFB" }}>
			<ProgressCard>
				<PontoIcon
					name='request'
					fontSize='large'
					color='primary'
				/>
				<Stack alignItems='flex-start'>
					<Tag
						text='Action required'
						type='danger'
					/>
					<Typography variant='subtitle1'>
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
