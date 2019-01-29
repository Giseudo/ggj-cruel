import { storiesOf } from '@storybook/vue'
import GJHero from './index'

storiesOf('Atom - gj-hero', module)
	.add('sm', () => ({
		components: { 'gj-hero': GJHero },
		template: `
		<gj-hero />
		`
	}))
