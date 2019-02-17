import { storiesOf } from '@storybook/vue'
import GJBackground from './index'

storiesOf('Background - gj-background', module)
	.add('default', () => ({
		components: {
			'gj-background': GJBackground
		},
		data: () => ({
			background: undefined
		}),
		template: `
			<gj-background v-model="background" />
		`
	}))
