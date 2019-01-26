import { storiesOf } from '@storybook/vue'
import GJSnackbar from './index'

storiesOf('Atom - gj-snackbar', module)
	.add('sm', () => ({
		components: { 'gj-snackbar': GJSnackbar },
		template: `
		<gj-snackbar>
			Hello darkness my old friend
		</gj-snackbar>
		`
	}))

