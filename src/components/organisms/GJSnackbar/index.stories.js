import { storiesOf } from '@storybook/vue'
import GJSnackbar from './index'
import GJButton from '@/components/atoms/GJButton'

storiesOf('Organism - gj-snackbar', module)
	.add('default', () => ({
		components: {
			'gj-button': GJButton,
			'gj-snackbar': GJSnackbar
		},

		methods: {
			add() {
				this.$refs.snackbar.add('orb', 'OMG', 'punch')
			}
		},

		template: `
		<div>
			<gj-button @click="add" :style="{ marginBottom: '10px' }">
				Adicionar alerta
			</gj-button>

			<gj-snackbar ref="snackbar">
			</gj-snackbar>
		</div>
		`
	}))
