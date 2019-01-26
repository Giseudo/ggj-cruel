import { storiesOf } from '@storybook/vue'
import GJMana from './index'

storiesOf('Atom - gj-mana', module)
	.add('sm', () => ({
		components: { 'gj-mana': GJMana },
		template: `
		<gj-mana size="sm" />
		`
	}))
	.add('md', () => ({
		components: { 'gj-mana': GJMana },
		template: `
		<gj-mana size="md" />
		`
	}))
	.add('lg', () => ({
		components: { 'gj-mana': GJMana },
		template: `
		<gj-mana size="lg" />
		`
	}))
