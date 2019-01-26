import { storiesOf } from '@storybook/vue'
import GJItem from './index'

storiesOf('Molecule - gj-item', module)
	.add('default', () => ({
		components: { 'gj-item': GJItem },
		template: `
		<gj-item />
		`
	}))
