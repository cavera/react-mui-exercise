import Number from '.'

export default {
	component: Number,

	title: 'Components/Number',
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	argTypes: {
		numberformat: {
			options: ['price', 'percent'],
			control: { type: 'radio' },
		},
	},
}

export const Default = {
	args: {
		number: 6500000000,
		numberformat: 'price',
		currency: '$',
		colorCur: 'blue',
		variant: 'span',
		cents: 2,
	},
}
