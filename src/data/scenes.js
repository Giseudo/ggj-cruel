export default (store) => {
	const dad = store.state.game.dad
	const mom = store.state.game.mom
	const son = store.state.game.son
	const daughter = store.state.game.daughter

	return {
		'cruel': {
			init: () => {
				store.commit('scene/setBackground', require('@/assets/images/bgs/village-01.jpg'))

				// HIDEME Show status
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
					next: () => {
						store.commit('scene/setPassage', null)
						setTimeout(() => store.commit('scene/setPassage', '0.4'), 1000)
					}
				},

				'0.4': {
					first: true,
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
					exit: () => store.commit('game/setOrb', true),
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

				'15': {
					init: () => {
						// TODO Add some sound effects here
					},
					text: `
Um raio é lançado para o alto e depois de alguns segundos cai em cima de um dos soldados. O soldado cai imóvel no chão.
					`,
					next: () => store.commit('scene/setPassage', '15.1')
				},

				'15.1': {
					text: `
O líder dos homens faz um gesto para que ataquem e eles partem para cima de você ainda relutantes. Um por um os homens caem atingidos pelos raios conjurados do céu. Um raio é lançado no líder deles, mas ele se protege com uma barreira mágica. Você o reconhece: seu nome Rauin, o inquisidor do rei. Um mago que presta vassalagem a família Bavarosa a décadas.
					`,
					next: () => store.commit('scene/setPassage', '15.2')
				},

				'15.3': {
					text: `
Rauin da meia volta no cavalo, protegido por uma bolha mágica ele galopa em direção ao castelo do rei Bavarosa. De uma coisa você tem certeza, na próxima vez ele vai vir mais preparado.
					`,
					next: () => store.commit('scene/setPassage', '15.4')
				},

				'15.4': {
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
					text: `
Rauin escapou com vida e fugiu para o castelo do rei, em pouco tempo deve estar aqui com um exército ou coisa pior, venha. Temos que ir pela **floresta**.
					`,
					next: () => store.commit('scene/setPassage', '9')
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
							callback: () => {
								store.dispatch('game/cast', 30)
									.then(() => store.commit('scene/setPassage', '28'))
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
						// TODO Implement test
						if (true)
							store.commit('scene/setPassage', '15')
						else
							store.commit('scene/setPassage', '39')
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
					exit: () => {
						store.commit('notification/add', {
							sprite: 'orb',
							message: 'Você entregou o Orbe Azul para Rauin.'
						})
						store.commit('game/setOrb', false)
					},
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
					next: () => store.commit('scene/setPassage', '9')
				},

				'39': {
					exit: () => {
						// TODO Add some arrow bolt effect
					},
					text: `
 Os raios são lançados de seu cajado repetidas vezes, os soldados se esquivam e atacam, alguns são atingidos mas a maioria continua de pé. Rauin lança um ataque em conjunto com um arqueiro, meia dúzia de lâminas voam em sua direção. Você é acertado e sangra até a morte sozinho…
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
						store.commit('notification/add', {
							sprite: 'orb',
							message: 'Você entregou o Orbe Azul para Rauin.'
						})
						store.commit('game/setOrb', false)
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

			}
		},

	}
}
