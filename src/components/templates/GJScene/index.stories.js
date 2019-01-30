import { storiesOf } from '@storybook/vue'
import GJScene from './index'

storiesOf('Template - gj-scene', module)
	.add('default', () => ({
		components: {
			'gj-scene': GJScene,
		},

		template: `
			<gj-scene :style="{ width: '350px', height: '650px' }" />
		`
	}))
