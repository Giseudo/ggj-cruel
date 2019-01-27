import { storiesOf } from '@storybook/vue'
import GJAlert from './index'

storiesOf('Molecule - gj-alert', module)
	.add('item', () => ({
		components: { 'gj-alert': GJAlert },
		template: `
		<gj-alert sprite="orb" />
		`
	}))
	.add('damage', () => ({
		components: { 'gj-alert': GJAlert },
		template: `
		<gj-alert sprite="dagger" message="Você sofreu um corte de espada." />
		`
	}))
	.add('gold', () => ({
		components: { 'gj-alert': GJAlert },
		template: `
		<gj-alert sprite="gold" message="Você recebeu 50z." />
		`
	}))
