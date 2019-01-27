import { storiesOf } from '@storybook/vue'
import GJName from './index'

storiesOf('Atom - gj-name', module)
	.add('default', () => ({
		components: { 'gj-name': GJName },
		template: `
		<gj-name>
			Monika
		</gj-name>
		`
	}))
