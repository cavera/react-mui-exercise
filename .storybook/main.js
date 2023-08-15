/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
	stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	// stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {},
		},
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
}
export default config
