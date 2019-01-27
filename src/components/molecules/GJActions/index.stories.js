import { storiesOf } from '@storybook/vue'
import GJActions from './index'

storiesOf('Molecule - gj-actions', module)
	.add('default', () => ({
		components: { 'gj-actions': GJActions },
		template: `
		<gj-actions />
		`
	}))
