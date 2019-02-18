export default (store) => {
	// Several game data shortcut
	const dad = store.state.game.dad
	const mom = store.state.game.mom
	const son = store.state.game.son
	const daughter = store.state.game.daughter

	// The test function
	function dice() {
		let probability = store.state.game.orb ? 80 : 50,
			rand = Math.floor(Math.random() * (100 - 0) ) + 0

		return rand <= probability
	}

	// Return scene
	return {
		'cruel': {
			init: () => {
				store.commit('scene/setBackground', require('@/assets/images/bgs/street-01.jpg'))

				setTimeout(() =>
					store.commit('scene/setPassage', store.state.scene.initial)
				, 3000)
			},

			passages: {
				'0': {
					first: true,
					text: `
A muito, muito tempo atrás. No continente de Jaule, Thomas Webtalle e Almir Al’Hajid, uma dupla de magos experientes recebeu um contrato de um forasteiro. Um feitiço tão poderoso que poderia derrubar até mesmo uma enorme muralha, o contratante pagou seu peso em ouro e garantiu que não utilizaria o feitiço na Bavaria, reinado da família Bavarosa. O contratante era ruivo e utilizava os trajes do país de Galis, túnica vermelha e ornamentada com ouro, Galis não tinha nenhuma rixa com a Bavária, e Almir convenceu Thomas a aceitar o trabalho. O que eles não sabiam é que seu contratante era Timury Garkim um rebelde insurgente, ele usou o feitiço criado por Thomas e Almir para destruir uma das torres do rei Bavarosa, enquanto o rei presidia uma reunião com seus líderes e generais. Timury foi morto no atentado contra o rei, levou consigo metade dos oficiais da Bavária. Esse evento ficou conhecido como a queda da torre.
					`,
					next: () => store.commit('scene/setPassage', '0.1')
				},

				'0.1': {
					text: `
Meses se passaram e Thomas e Almir continuaram na Bavária pois acharam que não tinha como o rei ligar o atentado aos dois. Contudo, de uns tempos para cá, cada vez mais rebeldes tem sido capturados e levados até o castelo do rei. O medo paira sobre os dois, Thomas recebeu o recado de um garoto que dizia que Almir desejava vê-lo com urgência…
					`,
					next: () =>	store.commit('scene/setPassage', '0.2')
				},

				'0.2': {
					text: `
Thomas vai ao encontro de Almir assim que recebe o recado. Chegando lá se depara com uma cena estarrecedora, seu amigo Almir, sujo de sangue e caído sobre a mesa. Ao se aproximar e virar o corpo, as entranhas de Almir escorregam pelo chão, sujando suas botas de sangue e merda. Na mesa, entalhado por uma faca, está escrito:
					
> Você é o próximo!
					`,
					next: () => store.commit('scene/setPassage', '0.3')
				},

				'0.3': {
					exit: () => store.commit('scene/setBackground', require('@/assets/images/bgs/home-01.jpg')),
					text: `
Então Thomas volta para casa correndo para tentar salvar sua família a tempo, na noite escura o suor frio cai pela sua testa, enquanto você desliza pelas vielas pegando o máximo de atalhos.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '0.4'), 1000)
					}
				},

				'0.4': {
					first: true,
					init: () => {
						store.commit('game/show', 'dad')
					},
					text: `
Já é quase noite quando você chega em sua casa ofegante, escancarando a porta. Sua esposa Judith se levanta da cadeira sobressaltada, seus filhos comem a sopa e também arregalam os olhos ao te ver chegar daquele jeito. Judith derruba a sopa quente nos próprios pés.
					`,
					next: () => store.commit('scene/setPassage', '0.5')
				},

				'0.5': {
					name: mom.name,
					text: `
Mas que me... que susto ${dad.name}
					`,
					actions: [
						{
							label: 'Precisamos fugir!',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => {
									store.commit('scene/setPassage', '1')
									store.commit('game/save')
								}, 1000)
							}
						},
						{
							label: 'Esconda as crianças!',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => {
									store.commit('scene/setPassage', '2')
									store.commit('game/save')
								}, 1000)
							}
						},
						{
							label: 'Pegue as crianças e fuja!',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => {
									store.commit('scene/setPassage', '3')
									store.commit('game/save')
								}, 1000)
							}
						},
						{
							label: 'Tentar agir normalmente.',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => {
									store.commit('scene/setPassage', '4')
									store.commit('game/save')
								}, 1000)
							}
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
							callback: () => store.commit('scene/setPassage', '5')
						},
						{
							label: 'Ir até o porão',
							callback: () => store.commit('scene/setPassage', '6')
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
							callback: () => store.commit('scene/setPassage', '13')
						},
						{
							label: 'Ganhar tempo para que fujam',
							callback: () => store.commit('scene/setPassage', '18')
						},
						{
							label: 'Ficar e lutar',
							callback: () => store.commit('scene/setPassage', '25')
						}
					]
				},

				'3': {
					text: `
Você puxa Judith até um canto da sala e tenta explicar a situação.
					`,
					next: () => store.commit('scene/setPassage', '3.1')
				},

				'3.1': {
					name: dad.name,
					text: `
Almir está morto, vocês precisam sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '3.2')
				},

				'3.2': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com aquele ataque terrorista que aconteceu na torre leste?
					`,
					next: () => store.commit('scene/setPassage', '3.3')
				},

				'3.3': {
					name: dad.name,
					text: `
Exatamente… Eu não sabia que ele era um rebelde, não teria me envolvido se soubesse. Vocês precisam fugir daqui
					`,
					next: () => store.commit('scene/setPassage', '3.4')
				},

				'3.4': {
					name: mom.name,
					text: `
Mas e você o que vai fazer?
					`,
					next: () => store.commit('scene/setPassage', '3.2'),
					actions: [
						{
							label: 'Tentar argumentar com o rei',
							callback: () => store.commit('scene/setPassage', '13')
						},
						{
							label: 'Ganhar tempo para que fujam',
							callback: () => {
								store.commit('scene/setPassage', '26')
							}
						},
						{
							label: 'Ficar e lutar',
							callback: () => store.commit('scene/setPassage', '25')
						},
					]
				},

				'4': {
					first: true,
					text: `
Você caminha até a cozinha ignorando as reclamações de sua mulher, mas pode ver por sobre os ombros ela se aproximar.
					`,
					next: () => store.commit('scene/setPassage', '4.1'),
				},

				'4.1': {
					name: mom.name,
					text: `
Qual o problema? Pra que a pressa?
					`,
					next: () => store.commit('scene/setPassage', '4.2'),
				},

				'4.2': {
					name: dad.name,
					text: `
Não foi nada querida, só...
					`,
					next: () => store.commit('scene/setPassage', '4.2.1'),
				},

				'4.2.1': {
					text: `
Você aponta para os sapatos sujos, a luz de um único lampião fica impossível discernir se aquilo é sangue ou lama.
					`,
					next: () => store.commit('scene/setPassage', '4.2.2')
				},

				'4.2.2': {
					name: dad.name,
					text: `
Pisei em uma poça de porcos enquanto voltava para casa.
					`,
					next: () => store.commit('scene/setPassage', '4.2.3')
				},

				'4.2.3': {
					text: `
Sua esposa caminha até um cômodo a sua esquerda, pega uma escova, um balde e o entrega batendo em seu peito com eles.
					`,
					next: () => store.commit('scene/setPassage', '4.3')
				},

				'4.3': {
					name: mom.name,
					text: `
Isso não é motivo para entrar assim mocinho!
					`,
					next: () => store.commit('scene/setPassage', '4.4'),
				},

				'4.4': {
					text: `
Judith nota suas mãos tremendo ao segurar o balde e te olha de maneira inquisidora.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '4.5'), 1000)
					}
				},

				'4.5': {
					name: mom.name,
					text: `
Vamos lá, fala logo o que está acontecendo.
					`,
					next: () => store.commit('scene/setPassage', '4.6'),
					actions: [
						{
							label: 'Dizer a verdade',
							callback: () => store.commit('scene/setPassage', '31')
						},
						{
							label: 'Temos que fugir',
							callback: () => store.commit('scene/setPassage', '32')
						},
						{
							label: 'Mentir',
							callback: () => store.commit('scene/setPassage', '33')
						}
					]
				},

				'5': {
					text: `
Sua filha de dez anos Rehla segura uma boneca de palha e uma bolsa de pano, seu filho Jedah traz uma espada curta na cintura. O garoto tem treze anos de idade e apesar da intenção, não sabe manusear a arma. Você toma a espada para si e entrega um machado para ele.
					`,
					next: () => store.commit('scene/setPassage', '5.1'),
				},

				'5.1': {
					name: dad.name,
					text: `
Talvez outra hora garoto, por enquanto tome esse machado e fique por perto
					`,
					next: () => store.commit('scene/setPassage', '5.2'),
				},

				'5.2': {
					init: () => store.commit('game/show', 'all'),
					text: `
Você puxa Judith e as crianças pelo braço até a porta dos fundos, ao levantar-se nota um grupo de meia dúzia de soldados do rei vindo na direção de sua casa.
					`,
					next: () => store.commit('scene/setPassage', '5.3'),
				},

				'5.3': {
					text: `
As estradas talvez não sejam o local mais seguro, você conhece um caminho pelo matagal que vai até a floresta Germonde. Contudo é noite e a floresta também representa um perigo real.
					`,
					actions: [
						{
							label: 'Ir pela estrada',
							callback: () => store.commit('scene/setPassage', '8')
						},
						{
							label: 'Correr para floresta',
							callback: () => store.commit('scene/setPassage', '9')
						},
					]
				},

				'6': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/basement-01.jpg')),
					text: `
Você caminha até o porão, desce as escadas e destranca a porta enquanto sua mulher termina de aprontar seus filhos para a inesperada fuga.
					`,
					next: () => store.commit('scene/setPassage', '6.1'),
				},

				'6.1': {
					name: dad.name,
					text: `
	Jar lumine!
					`,
					next: () => store.commit('scene/setPassage', '6.2'),
				},

				'6.2': {
					exit: () => store.commit('game/setOrb', true),
					text: `
Você fala e estala a língua, uma luz acende todo o cômodo, em um dos cantos um pequeno baú roxo emana uma aura azulada. Você abre o baú e pega o que tem dentro, um orbe azul opaco do tamanho de uma cabeça de gato. Você guarda o orbe em uma bolsa e volta para ver como sua esposa está.
					`,
					next: () => store.commit('scene/setPassage', '5'),
				},

				'7': {
					text: `
Você retira o capuz revelando seu rosto, os olhos de Rauin brilham ao te reconhecer. Rauin desce do cavalo e caminha em sua direção.
					`,
					next: () => store.commit('scene/setPassage', '7.1')
				},

				'7.1': {
					name: 'Rauin',
					text: `
Imobilizem esse homem imediatamente, ele é um traidor condenado.
					`,
					next: () => store.commit('scene/setPassage', '7.2')
				},

				'7.2': {
					name: dad.name,
					text: `
Isso deve ser um mal entendido vossa excelência, nunca trairia o rei Bavarosa. Juro por todos os Deuses.
					`,
					next: () => store.commit('scene/setPassage', '7.3')
				},

				'7.3': {
					text: `
Sua esposa e seus filhos gritam enquanto os homens do inquisidor com espada na mão te cercam.
					`,
					actions: [
						{
							label: 'Resistir',
							callback: () => store.commit('scene/setPassage', '42')
						},
						{
							label: 'Implorar',
							callback: () => store.commit('scene/setPassage', '43')
						},
						{
							label: 'Negociar',
							type: 'orb',
							conditions: () => store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '44')
						},
						{
							label: 'Atacar',
							conditions: () => store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '45')
						},
						{
							label: 'Atacar',
							conditions: () => !store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '61')
						},
					]
				},

				'8': {
					first: true,
					init(previous) {
						store.commit('scene/setBackground', require('@/assets/images/bgs/street-02.jpg'))
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '8'), 1000)
						}
					},
					text: `
O vento gélido da noite causa arrepios e te eriça os pelos enquanto você caminha com sua família pela estrada.
					`,
					next: () => store.commit('scene/setPassage', '8.1')
				},

				'8.1': {
					name: dad.name,
					text: `
Coloquem os capuzes, tentaremos passar despercebidos pelos guardas.
					`,
					next: () => store.commit('scene/setPassage', '8.2')
				},

				'8.2': {
					text: `
Você e sua família caminham de cabeça baixa, a estrada é uma só e o encontro é inevitável. Os seis guardas passam por você e sua família, você se sente aliviado. Até ver um outro homem vindo a cavalo e olhando diretamente para você.
					`,
					next: () => {
						store.commit('scene/setPassage', null)

						setTimeout(() => store.commit('scene/setPassage', '8.3'), 1000)
					}
				},

				'8.3': {
					name: 'Rauin',
					text: `
Alto lá!
					`,
					next: () => store.commit('scene/setPassage', '8.4')
				},
				
				'8.4': {
					text: `
Você reconhece o homem, seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas. Os guardas atrás de você retiram as espadas de suas bainhas e Rauin se aproxima a galope com um cetro místico em uma das mãos.
					`,
					next: () => store.commit('scene/setPassage', '8.5')
				},

				'8.5': {
					name: 'Rauin',
					text: `
Você! Retire o capuz!
					`,
					actions: [
						{
							label: 'Tirar o capuz',
							callback: () => store.commit('scene/setPassage', '7')
						},
						{
							label: 'Atacar com o Orbe Azul',
							type: 'orb',
							conditions: () => store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '10')
						},
						{
							label: 'Atacar',
							type: 'cast',
							conditions: () => !store.state.game.orb,
							callback: () => {
								store.dispatch('game/cast', 30)
									.then(() => store.commit('scene/setPassage', '61'))
							}
						},
						{
							label: 'Fugir',
							conditions: () => store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '11')
						},
						{
							label: 'Fugir',
							conditions: () => !store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '62')
						}
					]
				},

				'9': {
					init: () => {
						let orb = store.state.game.orb,
							everyone = (
								!store.state.game.mom.hide &&
								!store.state.game.son.hide &&
								!store.state.game.daughter.hide
							),
							wife = !store.state.game.mom.hide,
							negotiated = store.state.game.dad.negotiated,
							chased = store.state.game.dad.chased

						// Change background
						store.commit('scene/setBackground', require('@/assets/images/bgs/forest-01.jpg'))

						if (!wife)
							store.commit('scene/setPassage', '94')

						else if (everyone && !chased)
							store.commit('scene/setPassage', '76')

						else if (everyone && chased)
							store.commit('scene/setPassage', '87')
					}
				},

				'10': {
					text: `
Você segura firme o cajado e murmura uma conjuração em voz baixa, sua família está assustada e as crianças se escondem atrás de Judith. Uma luz azulada envolve você em um círculo e o orbe em sua bolsa brilha e flutua para fora dela se acoplando no topo do seu cajado. Os soldados ficam paralisados enquanto raios crepitam em volta de você.
					`,
					next: () => store.commit('scene/setPassage', '10.1')
				},

				'10.1': {
					name: 'Rauin',
					text: `
O que estão esperando?! Não deixem que ele termine a conjuração! Matem-no!
					`,
					next: () => store.commit('scene/setPassage', '10.2')
				},

				'10.2': {
					text: `
Três soldados partem para o ataque de uma vez.
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '46')
						else
							store.commit('scene/setPassage', '47')
					}
				},

				'11': {
					name: dad.name,
					text: `
Fujam!
					`,
					next: () => store.commit('scene/setPassage', '11.1')
				},

				'11.1': {
					text: `
Sua família corre na única direção em que não tem guardas e é perseguida por dois deles. Você se esquiva da primeira investida de um dos guardas, conjura uma magia telecinética e lança o corpo de um dos guardas nos perseguidores de sua família.
					`,
					next: () => store.commit('scene/setPassage', '11.2')
				},

				'11.2': {
					text: `
Você corre para alcançá-los enquanto eles entram na escura floresta de Germond.
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '9')
						else
							store.commit('scene/setPassage', '41')
					}
				},

				'13': {
					name: dad.name,
					text: `
Tentarei falar com o rei, talvez ele entenda.
					`,
					next: () => store.commit('scene/setPassage', '13.1'),
				},

				'13.1': {
					name: mom.name,
					text: `
Você acredita mesmo nisso? Ele vai te matar, você vai deixar sua mulher viúva e seus filhos sem pai?!
					`,
					actions: [
						{
							label: 'Não vejo outra opção',
							callback: () => store.commit('scene/setPassage', '14')
						},
						{
							label: 'Você tem razão',
							callback: () => store.commit('scene/setPassage', '24')
						},
					]
				},

				'14': {
					name: dad.name,
					text: `
Ganharei tempo para que você e as crianças fujam, vão pelos fundos. Quando chegar próximo ao morro siga a trilha até a floresta. Me encontrarei com vocês lá, se eu não chegar até meia noite procurem abrigo e espere até amanhecer para seguir viagem.
					`,
					next: () => store.commit('scene/setPassage', '14.1'),
				},

				'14.1': {
					text: `
Você afasta o armário para que as crianças saiam do esconderijo.
					`,
					next: () => store.commit('scene/setPassage', '14.2')
				},

				'14.2': {
					name: mom.name,
					text: `
Prometa que você vai fugir.
					`,
					next: () => store.commit('scene/setPassage', '14.3')
				},

				'14.3': {
					text: `
Você meneia com sua cabeça, mesmo sem ter certeza e observa sua mulher e seus dois filhos adentrando a escuridão da noite. Então você ouve um Bak Bak Bak Bak em sua porta.
					`,
					next: () => store.commit('scene/setPassage', '14.4')
				},

				'14.4': {
					text: `
Você caminha até a porta e antes que ponha a mão sobre maçaneta ela é arrombada, três homens com armadura e de espadas desembainhadas invadem a sua casa e te cercam, quatro outros se aproximam. Você reconhece o líder deles, seu nome é Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '14.5')
				},

				'14.5': {
					name: dad.name,
					text: `
O que vocês querem?! Como ousam invadir minha casa armados?
					`,
					next: () => store.commit('scene/setPassage', '14.6')
				},

				'14.6': {
					text: `
Rauin segura uma prancheta de madeira com um papel, puxa uma pena branca de um dos bolsos e começa a rabiscar algo enquanto olha para você.
					`,
					next: () => store.commit('scene/setPassage', '14.7')
				},

				'14.7': {
					name: 'Rauin',
					text: `
Venho através do Rei Bavarosa terceiro entregar sua sentença
					`,
					next: () => store.commit('scene/setPassage', '14.8')
				},

				'14.8': {
					text: `
Uma folha de papel é jogada em sua direção e você a apanha antes dela cair no chão, enquanto você lê e entra em desespero por sua tolice Rauin dá o comando a seus homens.
					`,
					next: () => store.commit('scene/setPassage', '14.9')
				},

				'14.9': {
					name: 'Rauin',
					text: `
Cerquem a casa, não deixem que ele saia com vida, nem que o fogo se espalhe. Vocês ai atrás preparem baldes e levem até meus soldados.
					`,
					next: () => store.commit('scene/setPassage', '14.10')
				},

				'14.10': {
					name: 'Rauin',
					text: `
	Dar dar et inferno!
					`,
					next: () => store.commit('scene/setPassage', '14.11')
				},

				'14.11': {
					text: `
O papel diz:

> ${dad.name} condenado à morte por fogo.

> Motivo: participação em atentado contra o rei e sua corte.
					`,
					actions: [
						{
							label: 'Tentar sair',
							callback: () => store.commit('scene/setPassage', '16')
						},
						{
							label: 'Usar escudo arcano',
							type: 'cast',
							callback: () => {
								store.commit('scene/setPassage', null)

								setTimeout(() =>
									store.dispatch('game/cast', 30)
										.then(() => store.commit('scene/setPassage', '17'))
									, 1000)
							}
						},
					]
				},

				'15': {
					init: () => store.commit('audio/play', 'thunder-01'),
					text: `
Um raio é lançado para o alto e depois de alguns segundos cai em cima de um dos soldados. O soldado cai imóvel no chão.
					`,
					next: () => store.commit('scene/setPassage', '15.1')
				},

				'15.1': {
					text: `
O líder dos homens faz um gesto para que ataquem e eles partem para cima de você ainda relutantes. Um por um os homens caem atingidos pelos raios conjurados do céu. Um raio é lançado no líder deles, mas ele se protege com uma barreira mágica. Você o reconhece: seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '15.3')
				},

				'15.3': {
					text: `
Rauin da meia volta no cavalo, protegido por uma bolha mágica ele galopa em direção ao castelo do rei Bavarosa. De uma coisa você tem certeza, na próxima vez ele vai vir mais preparado.
					`,
					next: () => store.commit('scene/setPassage', '15.4')
				},

				'15.4': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/home-01.jpg')),
					text: `
Você volta para casa e conta todo o ocorrido a sua esposa.
					`,
					next: () => store.commit('scene/setPassage', '15.5')
				},

				'15.5': {
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '15.6')
				},

				'15.6': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com a queda da torre leste?
					`,
					next: () => store.commit('scene/setPassage', '15.7')
				},

				'15.7': {
					name: dad.name,
					text: `
Exatamente... Eu não sabia que ele era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, ainda mais depois do que eu fiz.
					`,
					next: () => store.commit('scene/setPassage', '15.8')
				},

				'15.8': {
					text: `
Judith não esconde o espanto quando você conta sobre o que fez no desfiladeiro, matando seis guardas.
					`,
					next: () => store.commit('scene/setPassage', '15.9')
				},

				'15.9': {
					init: () => store.commit('game/show', 'all'),
					text: `
Rauin escapou com vida e fugiu para o castelo do rei, em pouco tempo deve estar aqui com um exército ou coisa pior, venha. Temos que ir pela **floresta**.
					`,
					next: () => store.commit('scene/setPassage', '9')
				},

				'16': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: {
							name: 'explosion-01',
							volume: .4
						}
					}),
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos, você se aproxima de uma janela mas é atingido na têmpora por um pedaço de madeira que caiu do teto. O fogo consome toda sua casa e até mesmo suas lágrimas evaporam dentro dessa pira funerária. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'17': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: {
							name: 'explosion-01',
							volume: .4
						}
					}),
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Uma tora de madeira crepitante cai  em cima de sua perna, você desenha um círculo ao seu redor com o cajado, fecha os olhos e chora, enquanto seu lar é destruído. Mesmo com o escudo arcano você sofre queimaduras no corpo todo e é esmagado pelos destroços. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'18': {
					text: `
Você afasta o armário da passagem secreta onde colocou as crianças e manda sua mulher entrar, relutante ela entra. Mas antes que você feche, ela te olha nos olhos.
					`,
					next: () => store.commit('scene/setPassage', '18.1')
				},

				'18.1': {
					name: mom.name,
					text: `
Prometa que você vai fugir.
					`,
					next: () => store.commit('scene/setPassage', '18.2')
				},

				'18.2': {
					name: dad.name,
					text: `
Querida eu não...
					`,
					next: () => store.commit('scene/setPassage', '18.2.1')
				},

				'18.2.1': {
					text: `
BAk BAk BAk sua despedida é cortada por batidas fortes na porta, você fecha o alçapão e afasta o armário sobre ele.
					`,
					next: () => store.commit('scene/setPassage', '18.3')
				},

				'18.3': {
					text: `
Você caminha até a porta e antes que ponha a mão na maçaneta ela é arrombada, três homens com armadura e de arma em punho invadem a sua casa e te cercam, quatro outros se aproximam. Você reconhece o líder deles, seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '18.4')
				},

				'18.4': {
					name: dad.name,
					text: `
O que vocês querem?! Como ousam invadir minha casa armados?
					`,
					next: () => store.commit('scene/setPassage', '18.5')
				},

				'18.5': {
					text: `
Rauin segura uma prancheta de madeira com um papel, puxa uma pena branca de um dos bolsos e começa a rabiscar algo enquanto olha para você.
					`,
					next: () => store.commit('scene/setPassage', '18.6')
				},

				'18.6': {
					name: 'Rauin',
					text: `
Venho através do Rei Bavarosa terceiro, entregar sua sentença
					`,
					next: () => store.commit('scene/setPassage', '18.7')
				},

				'18.7': {
					text: `
Uma folha de papel é jogada em sua direção e você a apanha antes dela cair no chão, enquanto você lê e entra em desespero por sua tolice Rauin dá o comando a seus homens.
					`,
					next: () => store.commit('scene/setPassage', '18.8')
				},

				'18.8': {
					name: 'Rauin',
					text: `
Cerquem a casa, não deixem que ele saia com vida nem que o fogo se espalhe. Vocês ai atrás preparem baldes e levem até meus soldados.
					`,
					next: () => store.commit('scene/setPassage', '18.9')
				},

				'18.9': {
					name: 'Rauin',
					text: `
	Dar dar et inferno!
					`,
					next: () => store.commit('scene/setPassage', '18.10')
				},

				'18.10': {
					text: `
O papel diz:

> ${dad.name} condenado à morte por fogo.

> Motivo: participação em atentado contra o rei e sua corte.
					`,
					actions: [
						{
							label: 'Tentar sair',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '19'), 1000)
							}
						},
						{
							label: 'Correr até o armário',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '20'), 1000)
							}
						},
						{
							label: 'Usar escudo arcano',
							type: 'cast',
							callback: () => {
								store.dispatch('game/cast', 30)
									.then(() => store.commit('scene/setPassage', '21'))
							}
						},
					]
				},

				'19': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: {
							name: 'explosion-01',
							volume: .4
						}
					}),
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos, você se aproxima de uma janela mas é atingido na têmpora por um pedaço de madeira que caiu do teto. O fogo consome toda sua casa e até mesmo suas lágrimas evaporam dentro dessa pira funerária. Seu eterno e querido lar será também o túmulo de toda sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'20': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: {
							name: 'explosion-01',
							volume: .4
						}
					}),
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Você corre até o armário e o empurra, o teto da casa começa a desmoronar e toras de fogo caem prendendo o armário e sua perna. Você consegue ouvir o choro de suas crianças e sua mulher se transformar em gritos desesperados, enquanto você murmura desculpas que nunca serão ouvidas.
					`,
					next: () => store.commit('game/gameover')
				},

				'21': {
					init: () => store.commit('audio/play', 'fire-01'),
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Você corre na direção do armário e percebe que sua energia arcana é suficiente somente para você ou para o armário.
					`,
					actions: [
						{
							label: 'Usar escudo em você',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '22'))
							}
						},
						{
							label: 'Usar escudo no armário',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '23'))
							}
						},
					]
				},

				'22': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: {
							name: 'explosion-01',
							volume: .4
						}
					}),
					text: `
Uma tora de madeira crepitante cai entre você e o esconderijo de sua família. Impedindo que você chegue até eles, você desenha um círculo ao seu redor com o cajado, fecha os olhos e chora, enquanto seu lar é destruído. Mesmo com o escudo arcano você sofre queimaduras no corpo todo e é esmagado pelos destroços.
					`,
					next: () => store.commit('game/gameover')
				},

				'23': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 75,
						sound: 'fire-01'
					}),
					text: `
Você corre e tenta se esquivar de uma tora de fogo que cai do teto mas ela prende sua perna. Você ainda consegue desenhar o círculo em volta do armário.
					`,
					next: () => store.commit('scene/setPassage', '23.1')
				},

				'23.1': {
					name: dad.name,
					text: `
Judith! Mantenha as crianças junto de você e não se mexa! Eu te amo minha querida, e nunca vou te esquecer. Me desculpe.
					`,
					next: () => store.commit('scene/setPassage', '23.2')
				},

				'23.2': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						sound: {
							name: 'explosion-01',
							volume: .4
						},
						amount: 100
					}),
					text: `
Os gritos de sua mulher são abafados pelo som da madeira estalando, mas você consegue ver o armário se mexer com a força que ela está fazendo.
					`,
					next: () => store.commit('game/gameover')
				},

				'24': {
					name: dad.name,
					text: `
Você tem razão, é melhor arriscarmos. Me ajude a pegar as crianças. Nós vamos fugir.
					`,	
					next: () => store.commit('scene/setPassage', '24.1')
				},

				'24.1': {
					text: `
Você e Judith afastam o armário pegam as crianças e correm pela porta dos fundos.

Sua filha de dez anos Rehla segura uma boneca de palha e uma bolsa de pano, seu filho Jedah traz uma espada curta na cintura. O garoto tem treze anos de idade e apesar da intenção não sabe manusear a arma. Você toma a espada para si e entrega um machado para ele.
					`,
					next: () => store.commit('scene/setPassage', '24.2')
				},

				'24.2': {
					name: dad.name,
					text: `
Talvez outra hora garoto, por enquanto tome com esse machado e fique por perto
					`,
					next: () => store.commit('scene/setPassage', '24.3')
				},

				'24.3': {
					init: () => store.commit('game/show', 'all'),
					text: `
Você, Judith e as crianças saem pela porta dos fundos, ao levantar-se nota um grupo de meia dúzia de soldados do rei vindo na direção de sua casa.
					`,
					next: () => store.commit('scene/setPassage', '24.4')
				},

				'24.4': {
					text: `
As estradas talvez não sejam o local mais seguro, você conhece um caminho pelo matagal que vai até a floresta Germonde. Contudo é noite e a floresta também representa um perigo real.
					`,
					actions: [
						{
							label: 'Ir pela estrada',
							callback: () => store.commit('scene/setPassage', '8')
						},
						{
							label: 'Correr para floresta',
							callback: () => store.commit('scene/setPassage', '9')
						}
					] 
				},

				'25': {
					name: dad.name,
					text: `
Lutarei e protegerei você e as crianças, é o meu dever. Agora esconda-se
					`,
					next: () => store.commit('scene/setPassage', '25.1')
				},

				'25.1': {
					init: () => store.commit('game/show', 'mom'),
					name: mom.name,
					text: `
Se vai lutar eu também vou!
					`,
					next: () => store.commit('scene/setPassage', '25.1.1')
				},

				'25.1.1': {
					text: `
Ela pega uma besta em uma estante e põe um dardo na arma.
					`,
					next: () => store.commit('scene/setPassage', '25.2')
				},

				'25.2': {
					text: `
Antes que você pudesse argumentar vocês ouvem um Bak Bak Bak Bak em sua porta. Vocês caminham até a porta e você prepara um ataque com seu cajado. Como esperado eles arrombam a porta e um deles cai ao ser atingido por um golpe seu nas pernas, os outros dois homens de armadura e espada desembainhadas partem para o ataque. Quatro outros se aproximam. Você reconhece o líder deles, seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '25.3')
				},

				'25.3': {
					init: () => store.commit('audio/play', 'arrow-01'),
					text: `
Judith também reconhece o mago e dispara uma flecha na direção do homem o acertando-o no olho esquerdo e derrubando-o no chão.
					`,
					next: () => store.commit('scene/setPassage', '25.4')
				},

				'25.4': {
					text: `
A besta é uma arma fatal, seu único defeito é a demora para ser recarregada. Os guardas tiram a arma de sua esposa antes que ela conseguisse engatilhar o segundo dardo.
					`,
					next: () => store.commit('scene/setPassage', '25.4.1')
				},

				'25.4.1': {
					text: `
Você luta bravamente e consegue esmagar o peito de dois dos seis cavaleiros restantes, mas é vencido pela quantidade injusta de guardas.
					`,
					next: () => store.commit('scene/setPassage', '25.5')
				},

				'25.5': {
					init: () => {
						store.commit('game/damage', {
							target: 'dad',
							amount: 100,
							sound: 'sword-01'
						})
					},
					text: `
Sua mulher grita enquanto você é trespassado por espadas de todos os lados.
					`,
					next: () => store.commit('scene/setPassage', '25.6')
				},

				'25.6': {
					name: mom.name,
					text: `
Não!
					`,
					next: () => store.commit('game/gameover')
				},

				'26': {
					name: dad.name,
					text: `
Ganharei tempo para que você e as crianças fujam, vão pelos fundos. Quando chegar próximo ao morro siga a trilha até a floresta. Me encontrarei com vocês lá, se eu não chegar até meia noite procure abrigo e espere até amanhecer para seguir viagem.
					`,
					next: () => store.commit('scene/setPassage', '26.1')
				},

				'26.1': {
					name: mom.name,
					text: `
Prometa que você vai fugir.
					`,
					next: () => store.commit('scene/setPassage', '26.2')
				},

				'26.2': {
					text: `
Você meneia a cabeça, mesmo sem ter certeza e observa sua mulher e seus dois filhos penetrando a escuridão da noite. Então você ouve um Bak Bak Bak Bak em sua porta.
					`,
					next: () => store.commit('scene/setPassage', '26.3')
				},
				
				'26.3': {
					text: `
Você caminha até a porta e antes que ponha a mão sobre maçaneta ela é arrombada, três homens com armadura e de espadas desembainhadas invadem a sua casa e te cercam, quatro outros se aproximam. Você reconhece o líder deles, seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '26.4')
				},

				'26.4': {
					name: dad.name,
					text: `
O que vocês querem?! Como ousam invadir minha casa armados?
					`,
					next: () => store.commit('scene/setPassage', '26.5')
				},

				'26.5': {
					text: `
Rauin segura uma prancheta de madeira com um papel, puxa uma pena branca de um dos bolsos e começa a rabiscar algo enquanto olha para você.
					`,
					next: () => store.commit('scene/setPassage', '26.6')
				},

				'26.6': {
					name: 'Rauin',
					text: `
Venho através do Rei Bavarosa terceiro entregar sua sentença
					`,
					next: () => store.commit('scene/setPassage', '26.7')
				},

				'26.7': {
					text: `
Uma folha de papel é jogada em sua direção e você a apanha antes dela cair no chão, enquanto você lê e entra em desespero por sua tolice Rauin dá o comando a seus homens.
					`,
					next: () => store.commit('scene/setPassage', '26.8')
				},

				'26.8': {
					name: 'Rauin',
					text: `
Cerquem a casa, não deixem que ele saia com vida, nem que o fogo se espalhe. Vocês ai atrás preparem baldes e levem até meus soldados.
					`,
					next: () => store.commit('scene/setPassage', '26.9')
				},

				'26.9': {
					name: 'Rauin',
					text: `
	Dar dar et inferno!
					`,
					next: () => store.commit('scene/setPassage', '26.10')
				},

				'26.10': {
					text: `
O papel diz:

> ${dad.name} condenado à morte por fogo.

> Motivo: participação em atentado contra o rei e sua corte.
					`,
					actions: [
						{
							label: 'Tentar sair',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '27'), 1000)
							}
						},
						{
							label: 'Usar escudo arcano',
							type: 'cast',
							callback: () => {
								store.commit('scene/setPassage', null)

								setTimeout(() =>
									store.dispatch('game/cast', 30)
										.then(() => store.commit('scene/setPassage', '28'))
								, 1000)
							}
						}
					]
				},

				'27': {
					init() {
						store.commit('game/damage', {
							target: 'dad',
							amount: 100,
							sound: {
								name: 'explosion-01',
								volume: .4
							}
						})
					},
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos, você se aproxima de uma janela mas é atingido na têmpora por um pedaço de madeira que caiu do teto. O fogo consome toda sua casa e até mesmo suas lágrimas evaporam dentro dessa pira funerária. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => {
						store.commit('game/gameover')
					}
				},

				'28': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: {
							name: 'explosion-01',
							volume: .4
						}
					}),
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Uma tora de madeira crepitante cai  em cima de sua perna, você desenha um círculo ao seu redor com o cajado, fecha os olhos e chora, enquanto seu lar é destruído. Mesmo com o escudo arcano você sofre queimaduras no corpo todo e é esmagado pelos destroços. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'30': {
					name: dad.name,
					text: `
Você tem razão, é melhor arriscarmos. Me ajude com as crianças. Nós vamos fugir.
					`,
					next: () => store.commit('scene/setPassage', '30.1')
				},

				'30.1': {
					text: `
Você e Judith pegam as crianças e correm pela porta dos fundos.
					`,
					next: () => store.commit('scene/setPassage', '30.2')
				},

				'30.2': {
					text: `
Sua filha de dez anos Rehla segura uma boneca de palha e uma bolsa de pano, seu filho Jedah traz uma espada curta na cintura. O garoto tem treze anos de idade e apesar da intenção não sabe manusear a arma. Você toma a espada para si e entrega um machado para ele.
					`,
					next: () => store.commit('scene/setPassage', '30.3')
				},

				'30.3': {
					name: dad.name,
					text: `
Talvez outra hora garoto, por enquanto tome com esse machado e fique por perto
					`,
					next: () => store.commit('scene/setPassage', '30.4')
				},

				'30.5': {
					text: `
Você, Judith e as crianças saem pela porta dos fundos, ao levantar-se nota um grupo de meia dúzia de soldados do rei vindo na direção de sua casa.
					`,
					next: () => store.commit('scene/setPassage', '30.6')
				},

				'30.6': {
					text: `
As estradas talvez não sejam o local mais seguro, você conhece um caminho pelo matagal que vai até a floresta Germonde. Contudo é noite e a floresta também representa um perigo real.
					`,
					actions: [
						{
							label: 'Ir pela estrada',
							callback: () => store.commit('scene/setPassage', '8')
						},
						{
							label: 'Correr para floresta',
							callback: () => store.commit('scene/setPassage', '9')
						},
					]
				},

				'31': {
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '31'), 1000)
						}
					},
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '31.1')
				},

				'31.1': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com aquele ataque terrorista que aconteceu na torre leste?
					`,
					next: () => store.commit('scene/setPassage', '31.2')
				},

				'31.2': {
					name: dad.name,
					text: `
Exatamente... Eu não sabia que era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, precisamos dar o fora daqui imediatamente.
					`,
					next: () => store.commit('scene/setPassage', '31.3')
				},

				'31.3': {
					text: `
Você pega sua mochila e seu cajado, enquanto sua mulher pega as crianças e arruma suas coisas.
					`,
					next: () => store.commit('scene/setPassage', '5')
				},

				'32': {
					first: true,
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '32'), 1000)
						}
					},
					text: `
Você puxa sua Judith até um canto da sala e tenta explicar a situação.
					`,
					next: () => store.commit('scene/setPassage', '32.1')
				},

				'32.1': {
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '32.2')
				},

				'32.2': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com a queda da torre leste?
					`,
					next: () => store.commit('scene/setPassage', '32.3')
				},

				'32.3': {
					name: dad.name,
					text: `
Exatamente... Eu não sabia que era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, precisamos dar o fora daqui imediatamente.
					`,
					next: () => store.commit('scene/setPassage', '32.4')
				},

				'32.4': {
					text: `
Você pega sua mochila e seu cajado, enquanto sua mulher pega as crianças e arruma suas coisas.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '5'), 1000)
					}
				},

				'33': {
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '33'), 1000)
						}
					},
					name: dad.name,
					text: `
É o trabalho, um contratante deu calote em mim e no Almir.
					`,
					next: () => store.commit('scene/setPassage', '33.1')
				},

				'33.1': {
					name: mom.name,
					text: `
Mais uma vez te passaram a perna? Que novidade hein, você deveria desconfiar mais das pessoas depois disso acontecer tantas vezes.
					`,
					next: () => store.commit('scene/setPassage', '33.2')
				},

				'33.2': {
					text: `
Judith voltou para mesa com as crianças e conversava distraída, enquanto isso você limpava as botas e pensava em uma forma de sair daquela situação. Almir morreu, a segurança de sua família é sua prioridade.					
					`,
					next: () => store.commit('scene/setPassage', '33.3')
				},

				'33.3': {
					exit: () => store.commit('game/setOrb', true),
					text: `
Após limpar todo o sangue você caminha até o porão e pega um orbe azulado e opaco, do tamanho da cabeça de um gato.
					`,
					next: () => store.commit('scene/setPassage', '33.4')
				},

				'33.4': {
					name: mom.name,
					text: `
O que você vai fazer com isso?
					`,
					next: () => store.commit('scene/setPassage', '33.5')
				},

				'33.5': {
					name: dad.name,
					text: `
Estou indo resolver um problema, tranque as portas e não abra pra ninguém.
					`,
					next: () => store.commit('scene/setPassage', '33.6')
				},

				'33.6': {
					init: () => store.commit('scene/setBackground', null),
					text: `
Você acopla o orbe na ponta de seu cajado e sai de casa a passos largos, deixando para trás sua mulher e seus filhos atordoados.
					`,
					actions: [
						{
							label: 'Ir pela estrada sozinho',
							callback: () => store.commit('scene/setPassage', '34')
						},
						{
							label: 'Voltar para casa',
							callback: () => store.commit('scene/setPassage', '35')
						}
					]
				},

				'34': {
					first: true,
					init(previous) {
						store.commit('scene/setBackground', require('@/assets/images/bgs/street-02.jpg'))

						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '34'), 1000)
						}
					},
					text: `
Você sente o ar se condensar enquanto respira, coloca o capuz e escuta um agrupamento de soldados descendo a estrada.
					`,
					actions: [
						{
							label: 'Atacar sozinho com o Orbe',
							type: 'cast',
							conditions: () => store.state.game.orb,
							callback: () => store.dispatch('game/cast', 30)
								.then(() => store.commit('scene/setPassage', '36'))
						},
						{
							label: 'Negociar com o Orbe',
							type: 'orb',
							conditions: () => store.state.game.orb,
							callback: () => store.commit('scene/setPassage', '38')
						},
						{
							label: 'Esconder-se',
							callback: () => store.commit('scene/setPassage', '37')
						},
					]
				},

				'35': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/home-01.jpg')),
					text: `
No meio do caminho você pensa melhor e percebe que é perigoso demais deixar sua família sozinha, então volta e conta toda a verdade a Judith
					`,
					next: () => store.commit('scene/setPassage', '35.1')
				},

				'35.1': {
					init: () => {
						store.commit('game/show', 'dad')
					},
					text: `
Você puxa sua Judith até um canto da sala e tenta explicar a situação.
					`,
					next: () => store.commit('scene/setPassage', '35.2')
				},

				'35.2': {
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '35.3')
				},

				'35.3': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com aquele ataque terrorista que aconteceu na torre leste?
					`,
					next: () => store.commit('scene/setPassage', '35.4')
				},

				'35.4': {
					name: dad.name,
					text: `
Exatamente... Eu não sabia que era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, precisamos dar o fora daqui imediatamente.
					`,
					next: () => store.commit('scene/setPassage', '35.5')
				},

				'35.5': {
					text: `
Você pega sua mochila e seu cajado, enquanto sua mulher pega as crianças e arruma suas coisas.
					`,
					next: () => store.commit('scene/setPassage', '5')
				},

				'36': {
					text: `
Você segura firme o cajado e murmura uma conjuração em voz baixa. Uma luz azulada envolve você em um círculo e o orbe flutua em cima do seu cajado. Os soldados ficam paralisados enquanto raios crepitam em volta de você.
					`,
					next: () => {
						store.commit('scene/setPassage', null)

						setTimeout(() => {
							if (dice())
								store.commit('scene/setPassage', '15')
							else
								store.commit('scene/setPassage', '39')
						}, 1000)
					}
				},

				'37': {
					text: `
Você percebe que os soldados são liderados pelo inquisidor Rauin. Um mago que presta vassalagem a família Bavarosa a décadas. Pelo caminho que ele e os soldados tomam você percebe que eles chegarão em breve em sua casa.
					`,
					actions: [
						{
							label: 'Atacar',
							callback: () => store.commit('scene/setPassage', '70')
						},
						{
							label: 'Correr para casa',
							callback: () => store.commit('scene/setPassage', '71')
						}
					]
				},

				'38': {
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '38'), 1000)
						}
					},
					name: dad.name,
					text: `
Vossa excelência Rauin, sei por que você veio e tenho algo que talvez possa te interessar!
					`,
					next: () => store.commit('scene/setPassage', '38.1.1')
				},

				'38.1.1': {
					text: `
Você grita, retirando o capuz, levanta as mãos lentamente e começa a pegar sua bolsa.
					`,
					next: () => store.commit('scene/setPassage', '38.1')
				},

				'38.1': {
					text: `
Você tira o orbe azul de sua bolsa e apresenta ao homem. Rauin fita o objeto por alguns instantes e balança a cabeça positivamente.
					`,
					next: () => store.commit('scene/setPassage', '38.2')
				},

				'38.2': {
					name: dad.name,
					text: `
Poupe minha vida e da minha família e o artefato é seu.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '38.3'), 1000)
					}
				},

				'38.3': {
					name: 'Rauin',
					text: `
Muito bem, passe para cá e pode ir embora da cidade. Vou fingir que não te vi, mas preciso queimar sua casa. As ordens do rei são para que eu queime você junto, mas pelo orbe posso fazer vista grossa.
					`,
					next: () => store.commit('scene/setPassage', '38.4')
				},

				'38.4': {
					name: dad.name,
					text: `
Mas e os soldados? Que garantia eu tenho de que não vão me atacar assim que eu entregar o orbe?
					`,
					next: () => store.commit('scene/setPassage', '38.5')
				},

				'38.5': {
					name: 'Rauin',
					text: `
Os soldados são minha guarda pessoal e não do rei, farão o que eu mandar. Não é mesmo homens?
					`,
					next: () => store.commit('scene/setPassage', '38.7')
				},

				'38.7': {
					text: `
Os soldados respondem em uníssono "Sim senhor!"
					`,
					next: () => store.commit('scene/setPassage', '38.9')
				},

				'38.9': {
					name: 'Rauin',
					text: `
Abaixem as armas!
					`,
					next: () => store.commit('scene/setPassage', '38.10')
				},

				'38.10': {
					exit: () => store.commit('game/negotiate'),
					text: `
Todos os seis soldados guardam as espadas e vão até o inquisidor, que estende a mão. Você entrega o orbe e caminha em direção a sua casa.
					`,
					next: () => store.commit('scene/setPassage', '38.11')
				},

				'38.11': {
					text: `
Rauin olha animado para o orbe e sorri, ele esporeia o cavalo em direção sua direção.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '38.12'), 1000)
					}
				},

				'38.12': {
					name: 'Rauin',
					text: `
Não fique na cidade, se mais alguem te ver por ai terei que ir atrás de você. E nenhum de nós dois vai querer isso, não é mesmo?
					`,
					next: () => store.commit('scene/setPassage', '38.13')
				},

				'38.13': {
					name: dad.name,
					text: `
Certo, preciso pegar minha família. Obrigado.
					`,
					next: () => store.commit('scene/setPassage', '38.14')
				},

				'38.14': {
					text: `
Rauin nem olha mais para você, manuseia o orbe azul como se fosse uma criança com um brinquedo novo.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '38.15'), 1000)
					}
				},

				'38.15': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/home-01.jpg')),
					text: `
Você corre até sua casa e conta tudo a Judith.
					`,
					next: () => store.commit('scene/setPassage', '38.16')
				},

				'38.16': {
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '38.17')
				},

				'38.17': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com a queda da torre leste?
					`,
					next: () => store.commit('scene/setPassage', '38.18')
				},

				'38.18': {
					name: dad.name,
					text: `
Exatamente... Eu não sabia que ele era um rebelde, não teria me envolvido se soubesse. Mas o rei não acredita em mim, precisamos dar o fora daqui imediatamente.
					`,
					exit: () => store.commit('game/show', 'all'),
					next: () => store.commit('scene/setPassage', '9')
				},

				'39': {
					init: () => store.commit('game/damage', {
						target: 'dad',
						amount: 100,
						sound: 'sword-01'
					}),
					text: `
Os raios são lançados de seu cajado repetidas vezes, os soldados se esquivam e atacam, alguns são atingidos mas a maioria continua de pé. Rauin lança um ataque em conjunto com um arqueiro, meia dúzia de lâminas voam em sua direção. Você é acertado e sangra até a morte sozinho…
					`,
					next: () => store.commit('game/gameover')
				},

				'40': {
					first: true,
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)
							store.commit('game/chase')

							setTimeout(() => store.commit('scene/setPassage', '40'), 1000)
						}
					},
					text: `
Sua família corre na única direção em que não tem guardas e é perseguida por dois deles. Você se esquiva da primeira investida de um dos guardas, conjura uma magia telecinética e lança o corpo de um dos guardas nos perseguidores de sua família.
					`,
					next: () => store.commit('scene/setPassage', '40.1')
				},

				'40.1': {
					text: `
Você corre para alcançá-los enquanto eles entram na escura floresta de Germond.
					`
				},

				'41': {
					first: true,
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => {
								store.commit('game/damage', { target: 'dad', amount: 100 })
								store.commit('scene/setPassage', '41')
							}, 1000)
						}
					},
					text: `
Sua família corre na única direção em que não tem guardas e é perseguida por dois deles. Você é atingido na primeira investida por um dos guardas, os outros dois enchem seu corpo de flechas. Você morre sem saber se a sua família conseguiu escapar.
					`
				},

				'42': {
					first: true,
					init: () => store.commit('game/damage', { target: 'dad', amount: 100, sound: 'sword-01' }),
					text: `
Você se defende como pode mas é golpeado por todos os lados, alguns soldados soltam flechas na sua direção. Em pouco tempo você não tem mais forças para se defender e é arrastado até Rauin, que o golpeia com o cetro abrindo seu crânio, colorindo bizarramente o chão. 
					`,
					next: () => store.commit('game/gameover')
				},

				'43': {
					name: dad.name,
					text: `
Por favor vossa excelência, tenha piedade de mim e da minha família
					`,
					next: () => store.commit('scene/setPassage', '43.2')
				},

				'43.2': {
					name: 'Rauin',
					text: `
Não farei mal a sua família, mas você deve morrer
					`,
					next: () => store.commit('scene/setPassage', '43.3')
				},

				'43.2': {
					init: () => store.commit('game/damage', { target: 'dad', amount: 100, sound: 'sword-01' }),
					text: `
O inquisidor faz um gesto e todos os homens te atacam ao mesmo tempo, lâminas entram e saem de todos os lados no seu corpo. Então você cai no chão, olhando para o céu nublado. Rauin incinera seu corpo assim que você fecha os olhos e para de respirar.
					`,
					next: () => store.commit('game/gameover')
				},

				'44': {
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '44'), 1000)
						}
					},
					name: dad.name,
					text: `
Vossa excelência Rauin, sei por que você veio e tenho algo que talvez possa te interessar!
					`,
					next: () => store.commit('scene/setPassage', '44.1.1')
				},

				'44.1.1': {
					text: `
Você grita, retirando o capuz, levanta as mãos lentamente e começa a pegar sua bolsa.
					`,
					next: () => store.commit('scene/setPassage', '44.1')
				},

				'44.1': {
					text: `
Rauin levanta o cajado e todos os homens apontam as armas para você.

Você tira o orbe azul de sua bolsa e apresenta ao homem. Rauin fita o objeto por alguns instantes e balança a cabeça positivamente.
					`,
					next: () => store.commit('scene/setPassage', '44.2')
				},

				'44.2': {
					name: dad.name,
					text: `
Poupe minha vida e da minha família e o artefato é seu.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '44.3'), 1000)
					}
				},

				'44.3': {
					name: 'Rauin',
					text: `
Muito bem, passe para cá e pode ir embora da cidade. Vou fingir que não te vi, mas preciso queimar sua casa. As ordens do rei são para que eu queime você junto, mas pelo orbe posso fazer vista grossa.
					`,
					next: () => store.commit('scene/setPassage', '44.4')
				},

				'44.4': {
					name: dad.name,
					text: `
Mas e os soldados? Que garantia eu tenho de que não vão me atacar assim que eu entregar o orbe?
					`,
					next: () => store.commit('scene/setPassage', '44.5')
				},

				'44.5': {
					name: 'Rauin',
					text: `
Os soldados são minha guarda pessoal e não do rei, farão o que eu mandar. Não é mesmo homens?
					`,
					next: () => store.commit('scene/setPassage', '44.6')
				},

				'44.6': {
					text: `
Os soldados respondem em uníssono "Sim senhor!"
					`,
					next: () => store.commit('scene/setPassage', '44.7')
				},

				'44.7': {
					name: 'Rauin',
					text: `
Abaixem as armas e se afastem dele e de sua família
					`,
					next: () => store.commit('scene/setPassage', '44.8')
				},

				'44.8': {
					exit: () => {
						store.commit('game/negotiate')
					},
					text: `
Todos os seis soldados guardam as espadas e vão até o inquisidor, que estende a mão. Você entrega o orbe e caminha até sua mulher ainda na defensiva.

					`,
					next: () => store.commit('scene/setPassage', '44.9')
				},

				'44.9': {
					text: `
Rauin olha animado para o orbe e sorri, ele esporeia o cavalo em direção sua direção.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '44.10'), 1000)
					}
				},

				'44.10': {
					name: 'Rauin',
					text: `
Não fique na cidade, se mais alguem te ver por ai terei que ir atrás de você. E nenhum de nós dois vai querer isso, não é mesmo?
					`,
					next: () => store.commit('scene/setPassage', '9')
				},

				'45': {
					text: `
Você segura firme o cajado e murmura uma conjuração em voz baixa, sua família está assustada e as crianças se escondem atrás de Judith. Uma luz azulada envolve você em um círculo e o orbe em sua bolsa brilha e flutua para fora dela se acoplando no topo do seu cajado. Os soldados ficam paralisados enquanto raios crepitam em volta de você.
					`,
					next: () => store.commit('scene/setPassage', '45.1')
				},

				'45.1': {
					name: 'Rauin',
					text: `
O que estão esperando?! Não deixem que ele termine a conjuração! Matem-no!
					`,
					next: () => store.commit('scene/setPassage', '45.2')
				},

				'45.2': {
					text: `
Três soldados partem para o ataque de uma vez.
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '46')
						else
							store.commit('scene/setPassage', '47')
					}
				},

				'46': {
					init: () => store.commit('audio/play', 'thunder-01'),
					text: `
Mas é tarde demais, você já terminou o murmúrio e um raio azul atravessa o peito dos três homens, você sente um cheiro forte de queimado quando os três homens tombam inertes no chão.
					`,
					actions: [
						{
							label: 'Ataque mágico',
							type: 'cast',
							callback: () => {
								store.dispatch('game/cast', 30)
									.then(() => store.commit('scene/setPassage', '48'))
							}
						},
						{
							label: 'Ataque normal',
							callback: () => store.commit('scene/setPassage', '49')
						},
						{
							label: 'Fugir',
							callback: () => store.commit('scene/setPassage', '52')
						}
					]
				},

				'47': {
					init: () => {
						store.commit('game/damage', { target: 'dad', amount: 100, sound: 'sword-01' })
					},
					text: `
Um raio azul é lançado de seu cajado na direção dos homens, mas não rápido o suficiente. Os três conseguem se esquivar e te atacam em conjunto. Os homens são guerreiros treinados e por mas que você consiga se defender dos primeiros golpes é cortado por todos os lados e inevitavelmente sofre um ferimento fatal. Sua cabeça é cortada e rola morro abaixo enquanto sua família grita horrorizada.
					`,
					next: () => store.commit('game/gameover')
				},

				'48': {
					first: true,
					text: `
O restante dos homens são mais precavidos, enquanto dois atacam corpo a corpo um terceiro retesa o arco e coloca uma flecha mirando você. Rauin já subiu novamente no cavalo e vem na direção de sua família.
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '50')
						else
							store.commit('scene/setPassage', '51')
					}
				},

				'49': {
					first: true,
					text: `
O restante dos homens são mais precavidos, enquanto dois atacam corpo a corpo um terceiro retesa o arco e coloca uma flecha, mirando você. Rauin já subiu novamente no cavalo e vem na direção de sua família.
					`,
					next: () => {
						if (true)
							store.commit('scene/setPassage', '56')
						else
							store.commit('scene/setPassage', '57')

					}
				},

				'50': {
					init: () => {
						store.commit('game/damage', { amount: 30, target: 'dad', sound: 'arrow-01' })
					},
					text: `
Os raios são lançados de seu cajado repetidas vezes, os soldados se esquivam e atacam. Mesmo assim os dois tombam mortos, mas o terceiro te atinge com uma flecha no ombro. Ao ser atingido você nota que Rauin está com sua esposa no cavalo.
					`,
					next: () => store.commit('scene/setPassage', '50.1')
				},

				'50.1': {
					name: 'Rauin',
					text: `
Se desejar ver sua esposa novamente vá até o castelo do rei e se entregue” Ele esporeia o cavalo e some, levantando poeira.
					`,
					next: () => store.commit('scene/setPassage', '50.2')
				},

				'50.2': {
					name: dad.name,
					text: `
Não! Seu maldito!
					`,
					next: () => store.commit('scene/setPassage', '50.3')
				},

				'50.3': {
					text: `
O soldado restante treme tentando colocar a flecha de volta no arco e você esmaga sua cabeça com o cajado. Sua alma se enche de fúria, a mulher que você ama foi levada mas você ainda tem duas crianças para proteger.
					`,
					actions: [
						{
							label: 'Se entregar',
							callback: () => store.commit('scene/setPassage', '53')
						},
						{
							label: 'Dar vazão a fúria',
							type: 'cast',
							callback: () => store.commit('scene/setPassage', '54')
						},
						{
							label: 'Fugir',
							callback: () => store.commit('scene/setPassage', '55')
						},
					]
				},

				'51': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'arrow-01' }),
					text: `
Os raios são lançados de seu cajado repetidas vezes, os soldados se esquivam e atacam. Rauin lança um ataque em conjunto com o arqueiro, meia dúzia de lâminas voam em sua direção. Você não se esquiva, caso o fizesse as lâminas atingiriam sua família, Então você sangra até a morte enquanto sua família chora ao te ver partir.
					`,
					next: () => store.commit('game/gameover')
				},

				'53': {
					first: true,
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '53'), 1000)
						}
					},
					text: `
A pequena Relah chora com medo, enquanto Jedah, a consola. Você vai até eles, os abraça e chora até soluçar.
					`,
					next: () => store.commit('scene/setPassage', '53.1')
				},

				'53.1': {
					text: `
Você entrega um papel ao seu filho e aperta a mão dele.
					`,
					next: () => store.commit('scene/setPassage', '53.2')
				},

				'53.2': {
					name: dad.name,
					text: `
Leve sua irmã de até nossa casa, vou trazer sua mãe de volta. Mas se ela não voltar até amanhã de manhã leve sua irmãzinha nesse endereço e diga que são meus filhos.
					`,
					next: () => store.commit('scene/setPassage', '53.3')
				},

				'53.3': {
					text: `
Seus filhos te agarram e choram sem querer te deixar partir, você se abaixa para poder abraçá-los, talvez uma última vez. Depois de alguns minutos eles finalmente te deixam partir.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '53.4'), 1000)
					}
				},

				'53.4': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/castle-01.jpg')),
					text: `
O salão está jantando quando você é colocado em um banco num dos cantos do salão, Rauin traz Judith pelo braço e a coloca de frente para você. Bavarosa se levanta e caminha lentamente, com seu corpanzil de urso esbarrando nas outras mesas e cadeiras do salão.
					`,
					next: () => store.commit('scene/setPassage', '53.5')
				},

				'53.5': {
					name: 'Bavarosa',
					text: `
Inquisidor, é ele? O homem que me custou uma torre novinha em folha?
					`,
					next: () => store.commit('scene/setPassage', '53.6')
				},

				'53.6': {
					name: 'Rauin',
					text: `
Os outros já estão mortos, esse é o ultimo.
					`,
					next: () => store.commit('scene/setPassage', '53.7')
				},

				'53.7': {
					name: 'Bavarosa',
					text: `
Pois bem, já sabe meu julgamento. Queime o maldito.
					`,
					next: () => store.commit('scene/setPassage', '53.8')
				},

				'53.8': {
					name: dad.name,
					text: `
Senhor, por favor tenha piedade. Se não de mim de minha família!
					`,
					next: () => store.commit('scene/setPassage', '53.9')
				},

				'53.9': {
					name: 'Bavarosa',
					text: `
Não vou matar sua família, mas atearei fogo em você e em sua casa. Sua família pode ficar viva, mas eles não vão ter mais um lar para retornar. Você já mandou cuidarem da casa desse inseto?
					`,
					next: () => store.commit('scene/setPassage', '53.10')
				},

				'53.10': {
					name: 'Rauin',
					text: `
Sim senhor rei, meus homens devem estar nesse momento ateando fogo no lugar.
					`,
					next: () => store.commit('scene/setPassage', '53.11')
				},

				'53.11': {
					name: `${dad.name} e ${mom.name}`,
					text: `
NÃO!!
					`,
					next: () => store.commit('scene/setPassage', '53.12')
				},

				'53.12': {
					name: dad.name,
					text: `
Meus filhos senhor, meus filhos estão no lugar. Por favor, me mate mas impeça que essa tragédia aconteça.
					`,
					next: () => store.commit('scene/setPassage', '53.13')
				},

				'53.13': {
					name: 'Bavarosa',
					text: `
Não gosto quando crianças morrem Rauin, vão dizer que eu sou um rei injusto. Vá, e leve a mulher.
					`,
					next: () => store.commit('scene/setPassage', '53.14')
				},

				'53.14': {
					name: 'Rauin',
					text: `
Sim senhor rei
					`,
					next: () => store.commit('scene/setPassage', '53.15')
				},

				'53.15': {
					text: `
Rauin puxa Judith pelo braço, ela chora enquanto é arrastada pelo inquisidor.
					`,
					next: () => store.commit('scene/setPassage', '53.16')
				},

				'53.16': {
					name: dad.name,
					text: `
Adeus querida, vá. Salve nossos filhos.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '53.17'), 1000)
					}
				},

				'53.17': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'fire-01' }),
					text: `
Dois guardas te agarram e te levam para um terreno a céu-aberto, uma fogueira já está montada. Você é arrastado e amarrado até o aglomerado de madeira. A dor de ser queimado vivo é bem pior do que você imaginava. Depois da fogueira ser acesa você demora pelo menos quinze minutos até morrer. Nos primeiros minutos você gritava até sua garganta sangrar, seus gritos viraram urros desesperados e gemidos incompreensíveis, passando por chiados mórbidos até chegar no silêncio mortal. E a morte foi o maior dos alívios.
					`,
					next: () => store.commit('game/gameover')
				},

				'54': {
					first: true,
					text: `
O último dos soldados se retira, correndo atrás do inquisidor Rauin.
					`,
					next: () => store.commit('scene/setPassage', '54.1')
				},

				'54.1': {
					text: `
A pequena Relah chora com medo, enquanto Jedah, a consola. Você vai até eles, os abraça e chora até soluçar.
					`,
					next: () => store.commit('scene/setPassage', '54.2')
				},

				'54.2': {
					text: `
Você entrega um papel ao seu filho e aperta a mão dele.
					`,
					next: () => store.commit('scene/setPassage', '54.3')
				},

				'54.3': {
					name: dad.name,
					text: `
Leve sua irmã até nossa casa, vou trazer sua mãe de volta. Mas se não voltarmos em algumas horas, pegue sua irmãzinha e vá até esse endereço, diga que são meus filhos.
					`,
					next: () => store.commit('scene/setPassage', '54.4')
				},

				'54.4': {
					text: `
Seus filhos te agarram e choram sem querer te deixar partir, você se abaixa para poder abraçá-los, talvez uma última vez. Depois de alguns minutos eles finalmente te deixam largam.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '54.5'), 1000)
					}
				},

				'54.5': {
					init: () => {
						store.commit('game/berserk')
						store.commit('scene/setBackground', require('@/assets/images/bgs/castle-01.jpg'))
					},
					text: `
Você segue em direção ao castelo do rei Bavarosa, carregando todo o ódio que um homem bom pode carregar.
					`,
					next: () => store.commit('scene/setPassage', '54.6')
				},

				'54.6': {
					text: `
Chegando na porta do castelo percebe que os guardas estão de prontidão, então ataca sem pensar no que está fazendo. Um raio é lançado de seu cajado e acerta o crânio de um dos arqueiros da torre.
					`,
					next: () => store.commit('scene/setPassage', '54.7')
				},

				'54.7': {
					text: `
Os portões se abrem e um grupo de dez cavaleiros portando  lanças em posição de ataque cavalgam em sua direção. No terreno amplo entre você e os dez cavaleiros, quatro são derrubados, repetidos raios são lançados causando queimaduras e ossos quebrados em cavaleiros e cavalos.
					`,
					next: () => store.commit('scene/setPassage', '54.8')
				},

				'54.8': {
					text: `
Os seis restantes conseguem chegar até você, duas das seis lanças te perfuram e ambos os cavaleiros erguem seu corpo. Seus olhos fervem e você realiza um último ataque. Você segura ambas as lanças, então os dois cavaleiros, cavalos e você são eletrocutados na hora.
					`,
					next: () => store.commit('scene/setPassage', '54.9')
				},

				'54.9': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'thunder-01' }),
					text: `
Um raio abre as nuvens e te atinge na cabeça, deixando uma mancha preta e disforme no lugar do seu corpo. Os cavaleiros e cavalos também morrem na hora.
					`,
					next: () => store.commit('game/gameover')
				},

				'55': {
					first: true,
					text: `
Sua filha chora com medo, enquanto Jedah seu primogênito a consola. Você vai até eles, os abraça e chora até soluçar.
					`,
					next: () => store.commit('scene/setPassage', '55.1')
				},

				'55.1': {
					name: dad.name,
					text: `
Temos que ir crianças, não posso arriscar a vida de vocês. Vamos procurar um abrigo eu voltarei para resgatar sua mãe.
					`,
					next: () => store.commit('scene/setPassage', '55.2')
				},

				'55.2': {
					name: son.name,
					text: `
Não pai! Você não pode deixar nossa mãe com aqueles homens!
					`,
					next: () => store.commit('scene/setPassage', '55.3')
				},

				'55.4': {
					name: dad.name,
					text: `
Escuta filho, olhe para sua irmã… Não podemos por a vida dela em risco, eu juro que voltarei para buscar sua mãe.
					`,
					next: () => store.commit('scene/setPassage', '55.5')
				},

				'55.5': {
					text: `
Você puxa seu filho por um braço e carrega a pequena Relah com o outro, indo apressado em direção a floresta.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '9'), 1000)
					}
				},

				'56': {
					text: `
Você gira o cajado e derruba um dos atacantes, antes que ele pudesse se levantar você saca sua espada curta com a mão esquerda e atravessa a garganta do homem, banhando o chão com seu sangue. O outro soldado ataca por cima e você se esquiva cortando os tendões da parte de trás do joelho do homem, ele tropeça e é recebe um golpe fatal que lhe amassa o crânio. Enquanto você finaliza o segundo homem, uma flecha te atinge no ombro. Ao ser atingido você nota que Rauin está com sua esposa no cavalo.
					`,
					next: () => store.commit('scene/setPassage', '50.1')
				},

				'57': {
					text: `
Você ataca com cajado repetidas vezes, os soldados se esquivam e contra-atacam. Rauin lança um ataque em conjunto com o arqueiro, meia dúzia de lâminas voam em sua direção. Você não se esquiva, caso o fizesse as lâminas atingiriam sua família. Então você sangra até a morte enquanto sua família chora desesperadamente.
					`,
					next: () => store.commit('game/gameover')
				},

				'58': {
					first: true,
					init: () => store.commit('game/chase'),
					text: `
Sua família corre na única direção em que não tem guardas e é perseguida por dois deles. Você se esquiva da primeira investida de um dos guardas, conjura uma magia telecinética e lança o corpo de um dos guardas nos perseguidores de sua família.
					`,
					next: () => store.commit('scene/setPassage', '58.1')
				},

				'58.1': {
					text: `
Você corre para alcançá-los enquanto eles entram na escura floresta de Germond.
					`,
					next: () => store.commit('scene/setPassage', '9')
				},

				'59': {
					first: true,
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'arrow-01' }),
					text: `
Sua família corre na única direção em que não tem guardas e é perseguida por dois deles. Você é atingido na primeira investida por um dos guardas, os outros dois enchem seu corpo de flechas. Você morre sem saber se a sua família conseguiu escapar.
					`,
					next: () => store.commit('game/gameover')
				},

				'61': {
					first: true,
					init(previous) {
						if (previous != null) {
							store.commit('scene/setPassage', null)

							setTimeout(() => store.commit('scene/setPassage', '61'), 1000)
						}
					},
					text: `
Você segura firme o cajado e murmura uma conjuração em voz baixa, sua família está assustada e as crianças se escondem atrás de Judith. Uma luz acinzentada envolve você em um círculo. Os soldados ficam paralisados enquanto raios crepitam em volta de você. 

					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '61.1'), 1000)
					}
				},

				'61.1': {
					name: 'Rauin',
					text: `
O que estão esperando?! Não deixem que ele termine a conjuração! Matem-no!
					`,
					next: () => store.commit('scene/setPassage', '61.2')
				},

				'61.2': {
					text: `
Três soldados partem para o ataque de uma vez.
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '63')
						else
							store.commit('scene/setPassage', '64')
					}
				},

				'62': {
					init: () => {
						if (dice()) {
							store.commit('scene/setPassage', '58')
						} else {
							store.commit('scene/setPassage', '59')
						}
					}
				},
				
				'63': {
					init: () => store.commit('audio/play', 'thunder-01'),
					text: `
Mas é tarde demais, você já terminou o murmúrio e um raio atravessa o peito dos três homens, você sente um cheiro forte de queimado quando os três homens tombam inertes no chão.
					`,
					actions: [
						{
							label: 'Ataque mágico',
							type: 'cast',
							callback: () => store.dispatch('game/cast', {
								amount: 30,
								sound: 'thunder-01'
							})
								.then(() => store.commit('scene/setPassage', '48'))
						},
						{
							label: 'Ataque normal',
							callback: () => store.commit('scene/setPassage', '49')
						},
						{
							label: 'Fugir',
							callback: () => {
								if (dice())
									store.commit('scene/setPassage', '74')
								else
									store.commit('scene/setPassage', '75')
							}
						}
					]
				},

				'64': {
					init: () => {
						store.commit('game/damage', { target: 'dad', amount: 100 })
					},
					text: `
Um raio é lançado de seu cajado na direção dos homens, mas não rápido o suficiente. Os três conseguem se esquivar e te atacam em conjunto. Os homens são guerreiros treinados e por mas que você consiga se defender dos primeiros golpes, é cortado por todos os lados e inevitavelmente sofre um ferimento fatal. Sua cabeça é cortada e rola morro abaixo, enquanto sua família grita horrorizada. 
					`,
					next: () => store.commit('game/gameover')
				},

				'70': {
					first: true,
					text: `
Você segura firme o cajado e murmura uma conjuração em voz baixa. Uma luz azulada envolve você em um círculo e o orbe flutua em cima do seu cajado. Os soldados são surpreendidos quando raios começam a cair em cima deles.
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '72')
						else
							store.commit('scene/setPassage', '73')
					}
				},

				'71': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/home-01.jpg')),
					first: true,
					text: `
Você conta apressadamente tudo que aconteceu a sua esposa e que os soldados do rei se aproximam, apesar de surpresa ela se apressa e vocês conseguem sair pelos fundos antes dos soldados chegarem.
					`,
					next: () => store.commit('scene/setPassage', '71.1')
				},

				'71.1': {
					init: () => store.commit('game/show', 'all'),
					text: `
Lá fora você dá mais detalhes do ocorrido.
					`,
					next: () => store.commit('scene/setPassage', '71.2')
				},

				'71.2': {
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '71.3')
				},

				'71.3': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com a queda da torre leste?
					`,
					next: () => store.commit('scene/setPassage', '71.4')
				},

				'71.4': {
					name: dad.name,
					text: `
Exatamente… Eu não sabia que ele era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, precisamos dar o fora daqui imediatamente.
					`,
					next: () => store.commit('scene/setPassage', '9')
				},

				'72': {
					init: () => {
						store.commit('audio/play', 'thunder-01')
					},
					text: `
Raios são lançados para o alto e depois de alguns segundos caem em cima de um dos soldados. O soldado cai imóvel no chão.
					`,
					next: () => store.commit('scene/setPassage', '72.2')
				},

				'72.2': {
					text: `
O líder dos homens faz um gesto para que ataquem e eles partem para cima de você ainda relutantes. Um por um os homens caem, atingidos pelos raios vindos do céu. Um raio é lançado no líder deles, mas ele se protege com uma barreira mágica. Você o reconhece: seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '72.3')
				},

				'72.3': {
					text: `
Rauin da meia volta no cavalo, protegido por uma bolha mágica ele galopa em direção ao castelo do rei Bavarosa. De uma coisa você tem certeza, na próxima vez ele vai vir mais preparado. Então você corre até sua casa para fugir com sua família.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '72.4'), 1000)
					}
				},

				'72.4': {
					text: `
Você volta para casa e conta todo o ocorrido a sua esposa.
					`,
					next: () => store.commit('scene/setPassage', '72.5')
				},

				'72.5': {
					name: dad.name,
					text: `
Almir está morto, nós precisamos sair da cidade agora mesmo. Eu e Almir fomos contratados por um homem que encomendou uma magia de conjuração do nível mais elevado, o homem jurou que não tinha assuntos no reino e pagou com seu peso em ouro. Então fizemos um pergaminho conjuratório para ele, uma magia infernal que traz uma onda de fogo.
					`,
					next: () => store.commit('scene/setPassage', '72.6')
				},

				'72.6': {
					name: mom.name,
					text: `
Pelos Deuses, tem algo a ver com a queda da torre leste?
					`,
					next: () => store.commit('scene/setPassage', '72.7')
				},

				'72.7': {
					name: dad.name,
					text: `
Exatamente… Eu não sabia que ele era um rebelde, não teria me envolvido se soubesse. Mas o rei não vai acreditar em mim, ainda mais depois do que eu fiz.
					`,
					next: () => store.commit('scene/setPassage', '72.8')
				},

				'72.8': {
					text: `
Judith não esconde o espanto quando você conta sobre o que fez no desfiladeiro, matando seis guardas.
					`,
					next: () => store.commit('scene/setPassage', '72.9')
				},

				'72.9': {
					text: `
Rauin escapou com vida e fugiu para o castelo do rei, em pouco tempo deve estar aqui com um exército ou coisa pior, venha. Temos que ir pela floresta.
					`,
					next: () => store.commit('scene/setPassage', '9')
				},

				'74': {
					init: () => store.commit('game/chase'),
					name: dad.name,
					text: `
Aproveitem! Corram!
					`,
					next: () => {
						if (dice())
							store.commit('scene/setPassage', '74.1')
						else
							store.commit('scene/setPassage', '75')
					}
				},

				'74.1': {
					text: `
Sua família corre e você os acompanha, os outros soldados que ficaram atrás pensaram duas vezes antes de tentar te atacar quando um deles é atingido por um raio ao correr na sua direção.
					`,
					next: () => store.commit('scene/setPassage', '9')
				},

				'75': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'arrow-01' }),
					text: `
Sua família corre e você os acompanha, quando você tenta conjurar um raio na direção dos soldados é atingido por uma flecha entre os olhos e tomba morto de lado.
					`,
					next: () => store.commit('game/gameover')
				},

				'76': {
					text: `
Depois de passar escondido com sua família pelo que por muito tempo foi sua vizinhança você e sua família chegam na mata fechada. Um uivo ressoa na noite escura e fria.
					`,
					next: () => store.commit('scene/setPassage', '76.1')
				},

				'76.1': {
					name: daughter.name,
					text: `
Estou com medo papai!
					`,
					next: () => store.commit('scene/setPassage', '76.2')
				},

				'76.2': {
					name: dad.name,
					text: `
Calma querida, seu pai vai te proteger.
					`,
					next: () => store.commit('scene/setPassage', '76.2.1')
				},

				'76.2.1': {
					text: `
Sua filha puxa a barra do seu manto e se agarra em você.
					`,
					next: () => store.commit('scene/setPassage', '76.3')
				},

				'76.3': {
					text: `
Você anda na frente guiando o caminho, a noite é quase impossível enxergar. Contudo, você sempre teve essa rota de fuga em mente, e dali a duas horas de caminhada tem um esconderijo secreto que você e o Almir prepararam para uma possível emergência.
					`,
					next: () => store.commit('scene/setPassage', '76.4')
				},

				'76.4': {
					text: `
Cerca de uma hora e meia depois de entrarem na densa floresta você avista lobos negros, três animais no total. Sedentos por sangue eles rosnam e partem em sua direção.
					`,
					actions: [
						{
							label: 'Ataque mágico',
							type: 'cast',
							callback: () => store.dispatch('game/cast', 30)
								.then(() => {
									if (dice())
										store.commit('scene/setPassage', '80')
									else
										store.commit('scene/setPassage', '81')
								})
						},
						{
							label: 'Ataque normal',
							callback: () => {
								if (dice())
									store.commit('scene/setPassage', '82')
								else
									store.commit('scene/setPassage', '83')
							}
						},
						{
							label: 'Fugir',
							callback: () => {
								if (dice())
									store.commit('scene/setPassage', '84')
								else
									store.commit('scene/setPassage', '85')
							}
						}
					]
				},

				'80': {
					init: () => store.commit('audio/play', 'fire-01'),
					text: `
Você já tinha preparado um escudo mágico e quando o primeiro lobo investe, dá com os dentes em uma barreira invisível e quebra o pescoço. Os outros rosnam vacilantes após a morte do companheiro, o segundo que eles vacilam é o suficiente para você lançar uma lufada de fogo na direção deles. Os dois correm com o focinho queimado e o rabo entre as pernas.
					`,
					next: () => store.commit('scene/setPassage', '86')
				},

				'81': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'wolf-01' }),
					text: `
Você já tinha preparado um escudo mágico e quando o primeiro lobo investe, dá com os dentes em uma barreira invisível e quebra o pescoço. Os outros rosnam vacilantes após a morte do companheiro, mas atacam por cima e por baixo ao mesmo tempo. Você consegue se defender dos dois ataques mas nota que sua família também está sendo atacada, você se distrai e os lobos rasgam sua perna e braço. Uma matilha inteira ataca em conjunto e devora você e sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'82': {
					text: `
Você já tinha se preparado para a investida, e quando o primeiro lobo corre em sua direção, dá com os dentes na sua espada curta. Os outros rosnam vacilantes após a morte do companheiro, Judith com uma besta em mãos acerta um dardo na cabeça de um dos lobos restantes, fazendo o terceiro fugir com medo.
					`,
					next: () => store.commit('scene/setPassage', '86')
				},

				'83': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'wolf-01' }),
					text: `
Você já tinha se preparado para a investida do primeiro lobo, mas a grama úmida te faz escorregar. Sua espada passa ao lado da cabeça do lobo e ele morde seu ombro, os outros dois agarram seus pés e puxam cada um para um lado. Você sente sua carne se rasgar e Judith com uma besta em mãos acerta um dardo na cabeça de um dos lobos. A besta demora muito para rearmar, e antes que ela pudesse colocar o segundo dardo na arma, os lobos já tinham terminado com você e partiam para acabar com sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'84': {
					text: `
Você já tinha se preparado para uma situação como essa, antes dos lobos chegarem até você uma bolha marrom flutua da ponta do seu cajado até o céu e se explode.
					`,
					next: () => store.commit('scene/setPassage', '84.1')
				},

				'84.1': {
					name: dad.name,
					text: `
Tapem os narizes!
					`,
					next: () => store.commit('scene/setPassage', '84.2')
				},

				'84.2': {
					text: `
Um cheiro de enxofre e fruta podre se espalha ao redor de vocês. Os lobos recuam com medo, mas o cheiro fica impregnado em seus corpos por muito tempo.
					`,
					next: () => store.commit('scene/setPassage', '84.3')
				},

				'84.3': {
					text: `
Vamos correr! Aproveitem! Não estamos longe!
					`,
					next: () => store.commit('scene/setPassage', '86')
				},

				'85': {
					name: dad.name,
					text: `
Vamos correr! Não estamos longe!
					`,
					next: () => store.commit('scene/setPassage', '85.1')
				},

				'85.1': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'fang-01' }),
					text: `
O lobo investe contra você, sua espada passa ao lado da cabeça do lobo e ele morde seu ombro, os outros dois agarram seus pés e puxam cada um para um lado. Você sente sua carne se rasgar e Judith com uma besta em mãos acerta um dardo na cabeça de um dos lobos. A besta demora muito para rearmar, e antes que ela pudesse colocar o segundo dardo na arma, os lobos já tinham terminado com você e partiam para acabar com sua família
					`,
					next: () => store.commit('game/gameover')
				},

				'86': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/cave-01.jpg')),
					text: `
Vocês correm e chegam até o esconderijo. Nas encostas de uma montanha existe uma gruta coberta por pedras, escondida devido a uma de suas conjurações mágicas.
					`,
					next: () => store.commit('scene/setPassage', '86.1')
				},

				'86.1': {
					name: dad.name,
					text: `
	Oscitare!
					`,
					next: () => store.commit('scene/setPassage', '86.2')
				},

				'86.2': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/cave-01.jpg')),
					text: `
As pedras que bloqueavam a entrada da caverna somem abrindo caminho para você e sua família.
					`,
					next: () => store.commit('scene/setPassage', '86.3')
				},

				'86.3': {
					name: dad.name,
					text: `
Vamos, entrem. Passaremos a noite aqui.
					`,
					next: () => store.commit('scene/setPassage', '86.4')
				},

				'86.4': {
					name: daughter.name,
					text: `
Eu quero ir para casa mamãe.
					`,
					next: () => store.commit('scene/setPassage', '86.5')
				},

				'86.5': {
					text: `
Sua esposa conversa com os filhos e tenta explicar o melhor possível a situação enquanto você refaz a inscrição arcana para que ninguém mais os ache.
					`,
					next: () => store.commit('scene/setPassage', '86.6')
				},

				'86.6': {
					name: dad.name,
					text: `
Assim que o sol nascer iremos até o outro lado dessa caverna, não se preocupem crianças, enquanto estivermos juntos sempre poderemos construir um novo lar.
					`,
					next: () => store.commit('game/gameover', true)
				},

				'87': {
					text: `
Vocês correm desesperados para dentro da mata. Um uivo ressoa na noite escura e fria.
					`,
					next: () => store.commit('scene/setPassage', '87.1')
				},

				'87.1': {
					name: daughter.name,
					text: `
Estou com medo papai!
					`,
					next: () => store.commit('scene/setPassage', '87.2')
				},

				'87.2': {
					name: dad.name,
					text: `
Calma querida, seu pai vai te proteger.
					`,
					next: () => store.commit('scene/setPassage', '87.3')
				},

				'87.3': {
					text: `
Você corre na frente guiando o caminho, a noite é quase impossível enxergar. Contudo, você sempre teve essa rota de fuga em mente, e dali a duas horas de caminhada tem um esconderijo secreto que você e o Almir prepararam para uma possível emergência.
					`,
					next: () => store.commit('scene/setPassage', '87.4')
				},

				'87.4': {
					text: `
Cerca de uma hora e meia depois de entrarem na densa floresta você avista alguns soldados procurando seu rastro.
					`,
					actions: [
						{
							label: 'Fazer armadilha mágica',
							type: 'cast',
							callback: () => store.dispatch('game/cast', 30)
								.then(() => {
									if (dice())
										store.commit('scene/setPassage', '90')
									else
										store.commit('scene/setPassage', '91')
								})
						},
						{
							label: 'Esconder rastro',
							type: 'cast',
							callback: () => store.dispatch('game/cast', 10)
								.then(() => {
									if (dice())
										store.commit('scene/setPassage', '92')
									else
										store.commit('scene/setPassage', '93')
								})
						}
					]
				},

				'90': {
					text: `
Você já tinha se preparado para isso, pega em sua bolsa um losango prateado com um olho amarelo desenhado, arremessa na direção em que os soldados estão indo e corre. Poucos segundos depois vocês ouvem uma explosão, seguida de gritos de dor. Sua armadilha deu certo.
					`,
					next: () => store.commit('scene/setPassage', '86')
				},

				'91': {
					init: () => store.commit('game/damage', { amount: 100, target: 'dad', sound: 'sword-01' }),
					text: `
Você já tinha se preparado para isso, pega em sua bolsa um losango prateado com um olho amarelo desenhado, arremessa na direção em que os soldados estão indo e corre. Contudo sua posição é revelada e os soldados correm em sua direção. Você corre e é interceptado por um soldado que estava mais a frente, ele o acerta na barriga com a espada e você sangra com o estômago rasgado. O mesmo soldado dá o golpe de misericórdia com uma adaga em seu coração.
					`,
					next: () => store.commit('game/gameover')
				},

				'92': {
					text: `
Você já tinha se preparado para isso, pega em sua bolsa um losango prateado com um olho roxo desenhado e joga no chão.
					`,
					next: () => store.commit('scene/setPassage', '92.2')
				},

				'92.2': {
					name: dad.name,
					text: `
	False vestigium!
					`,
					next: () => store.commit('scene/setPassage', '92.3')
				},

				'92.3': {
					text: `
Quando você bate com o cajado no losango ele some, e vocês ouvem passos e podem até enxergar a grama sendo amassada por pegadas. Você levanta o cajado e aponta na direção inversa de onde pretende ir e as pegadas partem naquela direção como fantasmas invisíveis.
					`,
					next: () => store.commit('scene/setPassage', '86')
				},

				'93': {
					text: `
Você já tinha se preparado para isso, pega em sua bolsa um losango prateado com um olho roxo desenhado e joga no chão.
					`,
					next: () => store.commit('scene/setPassage', '93.1')
				},

				'93.1': {
					text: `
Mas antes que pudesse conjurar a magia ilusória, ouve gritos.
					`,
					next: () => store.commit('scene/setPassage', '93.2')
				},

				'93.2': {
					name: 'Soldado',
					text: `
Ele está aqui!
					`,
					next: () => store.commit('scene/setPassage', '93.3')
				},

				'93.3': {
					init: () => {
						store.commit('game/damage', { amount: 100, target: 'mom', sound: 'sword-01' })
						store.commit('game/damage', { amount: 100, target: 'daughter' })
						store.commit('game/damage', { amount: 55, target: 'son' })
						store.commit('game/damage', { amount: 80, target: 'dad' })
					},
					text: `
Flechas chovem em direção a você e sua família, na primeira onda sua filha e mulher tombaram atravessadas por inúmeros projéteis. Algumas atingiram seu filho e você.
					`,
					next: () => store.commit('scene/setPassage', '93.4')
				},

				'93.4': {
					name: dad.name,
					text: `
NÃO!
					`,
					next: () => store.commit('scene/setPassage', '93.5')
				},

				'93.5': {
					init: () => store.commit('game/damage', { amount: 20, target: 'dad', sound: 'sword-01' }),
					text: `
Sua boca é silenciada por um soldado que chega por trás e lhe corta a garganta.
					`,
					next: () => store.commit('game/gameover')
				},

				'94': {
					text: `
Vocês correm desesperados para dentro da mata. Um uivo ressoa na noite escura e fria.
					`,
					next: () => store.commit('scene/setPassage', '94.1')
				},

				'94.1': {
					name: daughter.name,
					text: `
Estou com medo papai!
					`,
					next: () => store.commit('scene/setPassage', '94.2')
				},

				'94.2': {
					name: dad.name,
					text: `
Calma querida, seu pai vai te proteger.
					`,
					next: () => store.commit('scene/setPassage', '94.3')
				},

				'94.3': {
					text: `
 Você corre na frente guiando o caminho, a noite é quase impossível enxergar. Contudo, você sempre teve essa rota de fuga em mente, e dali a duas horas de caminhada tem um esconderijo secreto que você e o Almir prepararam para uma possível emergência. Você tenta esconder a dor que sente devido a flechada que recebeu para não assustar seus filhos, mas se não fosse tão escuro isso seria evidente pela sua coloração pálida.
					`,
					next: () => store.commit('scene/setPassage', '94.4')
				},

				'94.4': {
					text: `
Cerca de uma hora e meia depois de entrarem na densa floresta você avista lobos negros, três animais no total. Sedentos por sangue eles rosnam e partem em sua direção.
					`,
					actions: [
						{
							label: 'Ataque mágico',
							type: 'cast',
							callback: () => store.dispatch('game/cast', 30)
								.then(() => {
									if (dice())
										store.commit('scene/setPassage', '97')
									else
										store.commit('scene/setPassage', '98')
								})
						},
						{
							label: 'Fugir',
							type: 'cast',
							callback: () => store.dispatch('game/cast', 30)
								.then(() => {
									if (dice())
										store.commit('scene/setPassage', '99')
									else
										store.commit('scene/setPassage', '100')
								})
						}
					]
				},

				'97': {
					init: () => store.commit('audio/play', 'fire-01'),
					text: `
Você já tinha preparado um escudo mágico e quando o primeiro lobo investe, dá com os dentes em uma barreira invisível e quebra o pescoço. Os outros rosnam vacilantes após a morte do companheiro, o segundo que eles vacilam é o suficiente para você lançar uma lufada de fogo na direção deles. Os dois correm com o focinho queimado e o rabo entre as pernas.
					`,
					next: () => store.commit('scene/setPassage', '101')
				},

				'98': {
					init: () => store.commit('game/damage', { amount: 100, target: 'all', sound: 'wolf-01' }),
					text: `
Você já tinha preparado um escudo mágico e quando o primeiro lobo investe, dá com os dentes em uma barreira invisível e quebra o pescoço. Os outros rosnam vacilantes após a morte do companheiro, mas atacam por cima e por baixo ao mesmo tempo. Você consegue se defender dos dois ataques mas nota que sua família também está sendo atacada, você se distrai e os lobos rasgam sua perna e braço. Uma matilha inteira ataca em conjunto e devora você e o restante de sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'99': {
					text: `
Você já tinha se preparado para uma situação como essa, antes dos lobos chegarem até você uma bolha marrom flutua da ponta do seu cajado até o céu e explode.
					`,
					next: () => store.commit('scene/setPassage', '99.1')
				},

				'99.1': {
					name: dad.name,
					text: `
Tapem os narizes!
					`,
					next: () => store.commit('scene/setPassage', '99.2')
				},

				'99.2': {
					text: `
Um cheiro de enxofre e fruta podre se espalha ao redor de vocês. Os lobos recuam com medo, mas o cheiro fica impregnado em seus corpos por muito tempo.
					`,
					next: () => store.commit('scene/setPassage', '99.3')
				},

				'99.3': {
					name: dad.name,
					text: `
Vamos correr! Aproveitem! Não estamos longe!
					`,
					next: () => store.commit('scene/setPassage', '101')
				},

				'100': {
					name: dad.name,
					text: `
Vamos correr! Não estamos longe!
					`,
					next: () => store.commit('scene/setPassage', '100.1')
				},

				'100.1': {
					init: () => store.commit('game/damage', { target: 'all', amount: 100, sound: 'fang-02' }),
					text: `
O lobo investe contra você, a flecha no ombro faz seu golpe vacilar, sua espada passa ao lado da cabeça do lobo e ele morde seu ombro, os outros dois agarram seus pés e puxam cada um para um lado. Você sente sua carne se rasgar, os lobos arrancam seu rosto a mordidas e você grita em agonia ouvindo o terror dos gritos de Jedah e Rehla.
					`,
					next: () => store.commit('game/gameover')
				},

				'101': {
					init: () => store.commit('scene/setBackground', require('@/assets/images/bgs/cave-01.jpg')),
					text: `
Vocês correm e chegam até o esconderijo. Nas encostas de uma montanha existe uma gruta coberta por pedras, escondida devido a uma de suas conjurações mágicas.
					`,
					next: () => store.commit('scene/setPassage', '101.1')
				},

				'101.1': {
					name: dad.name,
					text: `
	Oscitare!
					`,
					next: () => store.commit('scene/setPassage', '101.2')
				},

				'101.2': {
					text: `
As pedras que bloqueavam a entrada da caverna somem, abrindo caminho para você e seus filhos.
					`,
					next: () => store.commit('scene/setPassage', '101.3')
				},

				'101.3': {
					name: dad.name,
					text: `
Vamos, entrem. Passaremos a noite aqui.
					`,
					next: () => store.commit('scene/setPassage', '101.4')
				},

				'101.4': {
					name: daughter.name,
					text: `
Eu quero a mamãe.
					`,
					next: () => store.commit('scene/setPassage', '101.5')
				},

				'101.5': {
					text: `
Sua filha em prantos clama pela mãe.
					`,
					next: () => store.commit('scene/setPassage', '101.6')
				},

				'101.6': {
					text: `
Jedah tenta consolar a irmã mas também chora. Você passa alguns minutos abraçado com eles, deitado em sua capa. Seus filhos pegam no sono, você usa uma pele que carrega em sua mochila para cobrir os dois.
					`,
					next: () => store.commit('scene/setPassage', '101.7')
				},

				'101.7': {
					text: `
Você anda por cerca de vinte metros dentro da gruta e tira a roupa para olhar o ferimento no ombro. Usando uma poça de água em um canto da gruta você lava o ferimento e faz um curativo. Se levanta e soca a parede com tanta força que seu punho sangra.
					`,
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '101.8'), 1000)
					}
				},

				'101.8': {
					name: dad.name,
					text: `
Judith, juro que voltarei para te resgatar. E se qualquer um te fizer mal, não importa se é rei ou Deus, ele vai conhecer e temer a fúria de um homem que perdeu seu lar.
					`,
					next: () => store.commit('game/gameover', true)
				}

			}
		},
	}
}
