import { storiesOf } from '@storybook/vue'
import GJPrevious from './index'

storiesOf('Atom - gj-previous', module)
	.add('sm', () => ({
		components: { 'gj-previous': GJPrevious },
		template: `
		<gj-previous size="sm" />
		`
	}))
	.add('md', () => ({
		components: { 'gj-previous': GJPrevious },
		template: `
		<gj-previous size="md" />
		`
	}))
	.add('lg', () => ({
		components: { 'gj-previous': GJPrevious },
		template: `
		<gj-previous size="lg" />
		`
	}))

