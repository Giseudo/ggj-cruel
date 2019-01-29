import { storiesOf } from '@storybook/vue'
import GJMoney from './index'

storiesOf('Molecule - gj-money', module)
	.add('default', () => ({
		components: { 'gj-money': GJMoney },
		template: `
		<gj-money />
		`
	}))
