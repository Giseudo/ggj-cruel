import store from '@/store'

const dad = store.state.game.dad
const mom = store.state.game.mom
const son = store.state.game.son
const daughter = store.state.game.daughter

export default () => ({
	'cruel': {
		init: () => {
			store.commit('scene/setBackground', require('@/assets/images/bgs/village-01.jpg'))

			setTimeout(() =>
				store.commit('scene/setPassage', '0')
			, 1000)
		},

		passages: {
			'0': {
				text: `
A muito, muito tempo atrás. No continente de Jaule, um mago e sua família se viram obrigados a tomar decisões difíceis. Tais decisões fariam toda diferença entre manter todo mundo vivo ou não...
				`,
				next: () => store.commit('scene/setPassage', '0.1')
			},

			'0.1': {
				init: () => {
					store.commit('game/show', 'dad')
				},
				text: `
São tempos difíceis, e tempos piores estão por vir - você pensa enquanto corre para casa. Você e seu amigo Almir são uma dupla de magos que realizaram um serviço a algum tempo atrás para um inimigo do rei. A profissão de mago não é legalizada no reinado da família Bavarosa, apesar de tolerada. Boatos chegaram aos seus ouvidos de que o rei descobriu  o envolvimento de vocês dois, mas você não tinha certeza, até poucos minutos atrás.
				`,
				next: () => store.commit('scene/setPassage', '0.2')
			},

			'0.2': {
				name: mom.name,
				text: `
Mas que me... que susto ${dad.name}
				`,
				actions: [
					{
						label: 'Precisamos fugir!',
						callback: () => store.commit('scene/setPassage', '1')
					},
					{
						label: 'Esconda as crianças!',
						callback: () => store.commit('scene/setPassage', '2')
					},
					{
						label: 'Pegue as crianças e fuja!',
						callback: () => store.commit('scene/setPassage', '3')
					},
					{
						label: 'Tentar agir normalmente.',
						callback: () => store.commit('scene/setPassage', '4')
					},
				]
			},

			'1': {
				text: `
Você puxa sua Judith até um canto da sala e tenta explicar a situação.
				`,
				next: () => store.commit('scene/setPassage', '1.1')
			},

			'1.1': {
				name: dad.name,
				text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
				`,
				next: () => store.commit('scene/setPassage', '1.2')
			},

			'1.2': {
				name: mom.name,
				text: `
Pelos Deuses, tem algo a ver com aquele ataque terrorista que aconteceu na torre leste?
				`,
				next: () => store.commit('scene/setPassage', '1.3')
			},

			'1.3': {
				name: dad.name,
				text: `
Exatamente... Eu não sabia que era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, precisamos dar o fora daqui imediatamente.
				`,
				next: () => store.commit('scene/setPassage', '1.4')
			},

			'1.4': {
				text: `
Você pega sua mochila e seu cajado, enquanto sua mulher pega as crianças e arruma suas coisas.
				`,
				actions: [
					{
						label: 'Apressar sua mulher',
						callback: () => {
							store.commit('scene/setPassage', null)
							setTimeout(() => store.commit('scene/setPassage', '0'), 2000)
						}
					},
					{
						label: 'Ir até o porão',
						callback: () => {
							store.commit('scene/setPassage', null)
							setTimeout(() => store.commit('scene/setPassage', '0'), 2000)
						}
					},
				]
			},

			'2': {
				name: dad.name,
				text: `
Rápido! Esconda as crianças Judith!
				`,
				next: () => store.commit('scene/setPassage', '2.1')
			},

			'2.1': {
				text: `
Judith se espanta com o seu comportamento mas faz o que é dito, você ajuda-a a empurrar um armário e abre o alçapão com os pés.
				`,
				next: () => store.commit('scene/setPassage', '2.2')
			},

			'2.2': {
				text: `
**${dad.name}**: Vamos crianças entrem logo!

**${son.name}**: Mas pai, eu estava terminando de comer a sopa...

**${dad.name}**: Não temos tempo para isso filho, entra logo ai!
				`,
				next: () => store.commit('scene/setPassage', '2.5')
			},

			'2.5': {
				text: `
Depois de empurrar o armário de volta para cima do alçapão você tenta explicar a situação para Judith.
				`,
				next: () => store.commit('scene/setPassage', '2.6')
			},

			'2.6': {
				name: dad.name,
				text: `
Almir está morto, vocês precisam sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
				`,
				next: () => store.commit('scene/setPassage', '2.7')
			},

			'2.7': {
				name: mom.name,
				text: `
Pelos Deuses, tem algo a ver com aquele ataque terrorista que aconteceu na torre leste?
				`,
				next: () => store.commit('scene/setPassage', '2.8')
			},

			'2.8': {
				name: dad.name,
				text: `
Exatamente... Eu não sabia que ele era um rebelde, não teria me envolvido se soubesse. Vocês precisam fugir daqui!
				`,
				next: () => store.commit('scene/setPassage', '2.9')
			},

			'2.9': {
				name: mom.name,
				text: `
Mas e você o que vai fazer?
				`,
				actions: [
					{
						label: 'Tentar argumentar com o rei',
						callback: () => {}
					},
					{
						label: 'Ganhar tempo para que fujam',
						callback: () => {}
					},
					{
						label: 'Ficar e lutar',
						callback: () => {}
					}
				]
			}
		}
	},

	// Village
	'village': {
		init: () => {
			store.commit('scene/setBackground', require('@/assets/images/bgs/village-01.jpg'))
			// store.commit('audio/music', 'great-unknown')
			store.commit('scene/setPassage', 0)
		},

		passages: {
			0: {
				name: 'Giseudo',
				text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat sollicitudin luctus. Suspendisse potenti. Vivamus congue felis arcu, nec volutpat ligula varius at.

Ut nec vestibulum mauris. Donec tempus tellus tortor, sed blandit ex blandit sed. Curabitur a massa hendrerit, posuere ligula ac, vestibulum quam. Ut faucibus eu mauris a semper.
				
Nunc rutrum ipsum felis, ut commodo velit suscipit eu. Etiam id ex nec magna scelerisque congue.
				`,
				init: () => {},
				exit: () => {},
				next: () => {},
				actions: [
					{
						label: 'Correr para as colinas',
						callback: () => {
							store.commit('scene/setPassage', 1)
						}
					},
					{
						label: 'Pegar carroça',
						type: 'buy',
						cost: 30,
						callback: () => {
							store.commit('scene/setPassage', 1)
						}
					},

				],
			},

			1: {
				name: '1000Tim',
				text: `
Nulla et tincidunt velit. Pellentesque eu ante ac dolor ultrices finibus. Cras euismod aliquam risus id gravida. Nam sodales libero quis consectetur luctus.
				
Sed pharetra nibh sed tristique eleifend. Vestibulum non sem a nisi aliquam aliquet. Aliquam erat volutpat. Cras scelerisque orci sed purus eleifend, eu faucibus diam rhoncus.
				`,
				init: () => {
					/*store.commit('notification/add', {
						sprite: 'dagger',
						message: 'PLS WORK',
						sound: 'punch'
					})*/
				},
				exit: () => { console.log('exit passage') },
				next: () => {
					store.commit('scene/setPassage', null)

					setTimeout(() => {
						store.commit('scene/setPassage', 0)
					}, 2000)
				},
				actions: [],
			}

		}
	}
})
