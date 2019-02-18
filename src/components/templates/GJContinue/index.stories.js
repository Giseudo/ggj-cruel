import { storiesOf } from '@storybook/vue'
import GJContinue from './index'

storiesOf('Template - gj-continue', module)
	.add('lose', () => ({
		components: {
			'gj-continue': GJContinue,
		},

		template: `
			<gj-continue :style="{ width: '350px', height: '650px' }" />
		`
	}))
	.add('beat', () => ({
		components: {
			'gj-continue': GJContinue,
		},

		template: `
			<gj-continue :style="{ width: '350px', height: '650px' }" :beat="true" message="Você salvou seu lar!" />
		`
	}))
