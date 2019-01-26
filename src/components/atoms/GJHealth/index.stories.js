import { storiesOf } from '@storybook/vue'
import GJHealth from './index'

storiesOf('Atom - gj-health', module)
	.add('sm', () => ({
		components: { 'gj-health': GJHealth },
		template: `
		<gj-health size="sm" />
		`
	}))
	.add('md', () => ({
		components: { 'gj-health': GJHealth },
		template: `
		<gj-health size="md" />
		`
	}))
	.add('lg', () => ({
		components: { 'gj-health': GJHealth },
		template: `
		<gj-health size="lg" />
		`
	}))
