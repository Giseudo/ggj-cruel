import { storiesOf } from '@storybook/vue'
import GJButton from './index'

storiesOf('Atom - gj-button', module)
	.add('sm', () => ({
		components: { 'gj-button': GJButton },
		template: `
		<div>
			<gj-button size="sm" theme="default">Hello world</gj-button>
			<gj-button size="sm" theme="primary">Hello world</gj-button>
			<gj-button size="sm" theme="accent">Hello world</gj-button>
			<gj-button size="sm" theme="warn">Hello world</gj-button>
		</div>
		`
	}))
	.add('md', () => ({
		components: { 'gj-button': GJButton },
		template: `
		<div>
			<gj-button size="md" theme="default">Hello world</gj-button>
			<gj-button size="md" theme="primary">Hello world</gj-button>
			<gj-button size="md" theme="accent">Hello world</gj-button>
			<gj-button size="md" theme="warn">Hello world</gj-button>
		</div>
		`
	}))
	.add('lg', () => ({
		components: { 'gj-button': GJButton },
		template: `
		<div>
			<gj-button size="lg" theme="default">Hello world</gj-button>
			<gj-button size="lg" theme="primary">Hello world</gj-button>
			<gj-button size="lg" theme="accent">Hello world</gj-button>
			<gj-button size="lg" theme="warn">Hello world</gj-button>
		</div>
		`
	}))

