export default (store) => {
	const dad = store.state.game.dad
	const mom = store.state.game.mom
	const son = store.state.game.son
	const daughter = store.state.game.daughter

	return {
		'cruel': {
			init: () => {
				store.commit('scene/setBackground', require('@/assets/images/bgs/village-01.jpg'))

				// Show status
				// store.commit('game/show', 'dad')

				setTimeout(() =>
					store.commit('scene/setPassage', '0')
				, 1000)
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
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '0.2'), 1000)
					}
				},

				'0.2': {
					init: () => {
						store.commit('game/show', 'dad')
					},
					first: true,
					text: `
Thomas vai ao encontro de Almir assim que recebe o recado. Chegando lá se depara com uma cena estarrecedora, seu amigo Almir, sujo de sangue e caído sobre a mesa. Ao se aproximar e virar o corpo, as entranhas de Almir escorregam pelo chão, sujando suas botas de sangue e merda. Na mesa, entalhado por uma faca, está escrito:
					
> Você é o próximo!
					`,
					next: () => store.commit('scene/setPassage', '0.3')
				},

				'0.3': {
					text: `
Então Thomas volta para casa correndo para tentar salvar sua família a tempo, na noite escura o suor frio cai pela sua testa, enquanto você desliza pelas vielas pegando o máximo de atalhos.
					`,
					next: () => store.commit('scene/setPassage', '0.4')
				},

				'0.4': {
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
								setTimeout(() => store.commit('scene/setPassage', '1'), 1000)
							}
						},
						{
							label: 'Esconda as crianças!',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '2'), 1000)
							}
						},
						{
							label: 'Pegue as crianças e fuja!',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '3'), 1000)
							}
						},
						{
							label: 'Tentar agir normalmente.',
							callback: () => {
								store.commit('scene/setPassage', null)
								setTimeout(() => store.commit('scene/setPassage', '4'), 1000)
							}
						},
					]
				},

				'1': {
					init: () => {
						store.commit('game/show', 'dad')
					},
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
							callback: () => store.commit('scene/setPassage', '29')
						},
					]
				},

				'4': {
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
					text: `
Não foi nada querida, só…” você aponta para os sapatos sujos, a luz de um único lampião fica impossível discernir se aquilo é sangue ou lama. “Pisei em uma poça de porcos enquanto voltava para casa

Sua esposa caminha até um cômodo a sua esquerda, pega uma escova, um balde e o entrega batendo em seu peito com eles.
					`,
					next: () => store.commit('scene/setPassage', '4.3'),
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
					next: () => store.commit('scene/setPassage', '4.5'),
				},

				'4.5': {
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
					exit: () => {
						store.commit('notification/add', {
							sprite: 'orb',
							message: 'Você obteve um Orbe Azul.'
						})
						store.commit('game/setOrb', true)
					},
					text: `
Você fala e estala a língua, uma luz acende todo o cômodo, em um dos cantos um pequeno baú roxo emana uma aura azulada. Você abre o baú e pega o que tem dentro, um orbe azul opaco do tamanho de uma cabeça de gato. Você guarda o orbe em uma bolsa e volta para ver como sua esposa está.
					`,
					next: () => store.commit('scene/setPassage', '5'),
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
							cost: 30,
							callback: () => store.commit('scene/setPassage', '17')
						},
					]
				},

				'16': {
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos, você se aproxima de uma janela mas é atingido na têmpora por um pedaço de madeira que caiu do teto. O fogo consome toda sua casa e até mesmo suas lágrimas evaporam dentro dessa pira funerária. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'17': {
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
							callback: () => store.commit('scene/setPassage', '19')
						},
						{
							label: 'Correr até o armário',
							callback: () => store.commit('scene/setPassage', '20')
						},
						{
							label: 'Usar escudo arcano',
							type: 'cast',
							cost: 30,
							callback: () => store.commit('scene/setPassage', '21')
						},
					]
				},

				'19': {
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos, você se aproxima de uma janela mas é atingido na têmpora por um pedaço de madeira que caiu do teto. O fogo consome toda sua casa e até mesmo suas lágrimas evaporam dentro dessa pira funerária. Seu eterno e querido lar será também o túmulo de toda sua família.
					`,
					next: () => store.commit('game/gameover')
				},

				'20': {
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Você corre até o armário e o empurra, o teto da casa começa a desmoronar e toras de fogo caem prendendo o armário e sua perna. Você consegue ouvir o choro de suas crianças e sua mulher se transformar em gritos desesperados, enquanto você murmura desculpas que nunca serão ouvidas.
					`,
					next: () => store.commit('game/gameover')
				},

				'21': {
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Você corre na direção do armário e percebe que sua energia arcana é suficiente somente para você ou para o armário.
					`,
					actions: [
						{
							label: 'Usar escudo em você',
							callback: () => store.commit('scene/setPassage', '22')
						},
						{
							label: 'Usar escudo no armário',
							callback: () => store.commit('scene/setPassage', '23')
						},
					]
				},

				'22': {
					text: `
Uma tora de madeira crepitante cai entre você e o esconderijo de sua família. Impedindo que você chegue até eles, você desenha um círculo ao seu redor com o cajado, fecha os olhos e chora, enquanto seu lar é destruído. Mesmo com o escudo arcano você sofre queimaduras no corpo todo e é esmagado pelos destroços.
					`,
					next: () => store.commit('game/gameover')
				},

				'23': {
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
					name: mom.name,
					text: `
Se vai lutar eu também vou!
					`,
					next: () => {
						store.commit('scene/setPassage', '25.1.1')
						store.commit('notification/add', {
							sprite: 'letter',
							message: mom.name + ' juntou-se a você.'
						})
						store.commit('game/show', 'mom')
					}
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
					text: `
Judith também reconhece o mago e dispara uma flecha na direção do homem o acertando-o no olho esquerdo e derrubando-o no chão.
					`,
					next: () => store.commit('scene/setPassage', '25.4')
				},

				'25.4': {
					text: `
A besta é uma arma fatal, seu único defeito é a demora para ser recarregada. Os guardas tiram a arma de sua esposa antes que ela conseguisse engatilhar o segundo dardo. Você luta bravamente e consegue esmagar o peito de dois dos seis cavaleiros restantes, mas é vencido pela quantidade injusta de guardas.
					`,
					next: () => store.commit('scene/setPassage', '25.5')
				},

				'25.5': {
					exit: () => {
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
							callback: () => store.commit('scene/setPassage', '27')
						},
						{
							label: 'Usar escudo arcano',
							type: 'cast',
							cost: 30,
							callback: () => {
								store.dispatch('game/cast', 30)
									.then(
										() => store.commit('scene/setPassage', '28'),
										() => store.commit('notification/add', {
											sprite: 'orb',
											message: 'Você não tem mana suficiente!'
										})
									)
							}
						}
					]
				},

				'27': {
					init() {
						store.commit('game/damage', { target: 'dad', amount: 100 })
					},
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos, você se aproxima de uma janela mas é atingido na têmpora por um pedaço de madeira que caiu do teto. O fogo consome toda sua casa e até mesmo suas lágrimas evaporam dentro dessa pira funerária. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => {
						store.commit('game/gameover')
					}
				},

				'28': {
					text: `
As paredes se inflamam de fora para dentro. Todas as saídas estão bloqueadas por homens armados com arcos. Uma tora de madeira crepitante cai  em cima de sua perna, você desenha um círculo ao seu redor com o cajado, fecha os olhos e chora, enquanto seu lar é destruído. Mesmo com o escudo arcano você sofre queimaduras no corpo todo e é esmagado pelos destroços. Em seu último suspiro, rodeado por dor você e sofrimento se sente aliviado por pelo menos ter evitado tal fim para sua família.
					`,
					next: () => store.commit('game/gameover')
				}

			}
		},

	}
}
