import MyIcon from '.'

export default {
	component: MyIcon,

	title: 'Components/MyIcon',
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	argTypes: {
		name: {
			options: ['request', 'gat', 'money', 'right', 'wallet', 'capital', 'notify', 'toke', 'settings', 'bell', 'open', 'visibility', 'visibilityOff', 'like'],
			control: 'select',
		},
	},
}
export const Default = {
	args: {
		name: 'request',
	},
}
