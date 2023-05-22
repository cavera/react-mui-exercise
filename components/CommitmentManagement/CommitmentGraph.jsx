import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Data compare 1",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: "rgba(1, 55, 255, 0.5)",
		},
		{
			label: "Data compare 2",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: "rgba(81, 204, 84, 0.5)",
		},
	],
};

const CommitmentGraph = props => {
	return (
		<Bar
			options={options}
			data={data}
		/>
	);
};

export default CommitmentGraph;
