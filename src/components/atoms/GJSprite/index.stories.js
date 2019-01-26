import { storiesOf } from '@storybook/vue'
import GJSprite from './index'

storiesOf('Atom - gj-sprite', module)
	.add('default', () => ({
		components: { 'gj-sprite': GJSprite },
		template: `
		<gj-sprite name="gold" />
		`
	}))
