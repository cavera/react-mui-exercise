import { Box, Card, Chip, Typography } from "@mui/material";
import PontoIcon from "../PontoIcon";
import Number from "../Number";
import { capitalProcess } from "../../data/data";
import ProgressCard from "./ProgressCard";
import ProgressArrow from "./ProgressArrow";

const ProductProgress = () => {
	const { capital, due } = capitalProcess;

	return (
		<Box sx={{ display: "flex", gap: 1, padding: 3, border: "1px solid #f2f2f2" }}>
			<ProgressCard>
				<PontoIcon
					name='request'
					fontSize='large'
					color='primary'
				/>
				<Box>
					<Chip
						sx={{ borderRadius: 1, padding: "4px 0", height: "auto" }}
						color='error'
						label='Action required'
					/>
					<Typography variant='body1'>
						{"Capital of "}
						{
							<Number
								number={capital}
								numberformat='price'
							/>
						}
						{" is due on "}
						{
							<Chip
								label={due}
								sx={{ borderRadius: 1, padding: "4px 0", height: "auto" }}
								component='span'
							/>
						}
					</Typography>
				</Box>
			</ProgressCard>
			<ProgressArrow />
			<ProgressCard>
				<PontoIcon
					name='notify'
					fontSize='large'
					color='primary'
				/>
				<Box>
					<Typography variant='body1'>We will notify you once we have received your capital.</Typography>
				</Box>
			</ProgressCard>
			<ProgressArrow />
			<ProgressCard>
				<PontoIcon
					name='toke'
					fontSize='large'
					color='primary'
				/>
				<Box>
					<Typography variant='body1'>{`Toke will then be minted and we will notify you once it's been issued.`}</Typography>
				</Box>
			</ProgressCard>
		</Box>
	);
};

export default ProductProgress;
