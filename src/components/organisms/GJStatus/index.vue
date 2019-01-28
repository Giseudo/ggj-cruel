<template>
	<div class="gj-status">
		<gj-health
			class="gj-status__hero"
			size="md"
			:current="dad.hp[0]"
			:value="dad.hp[1]"
			:image="dad.avatar"
		/>

		<div class="gj-status__wrapper">
			<div class="gj-status__top">
				<div class="gj-status__left">
					<transition-group name="status">
						<gj-health
							v-if="mom && !mom.hide"
							size="sm"
							:key="0"
							:image="mom.avatar"
							:current="mom.hp[0]"
							:value="mom.hp[1]"
						/>
						<gj-health
							v-if="son && !son.hide"
							size="sm"
							:key="1"
							:image="son.avatar"
							:current="son.hp[0]"
							:value="son.hp[1]"
						/>
						<gj-health
							v-if="daughter && !daughter.hide"
							size="sm"
							:key="2"
							:image="daughter.avatar"
							:current="daughter.hp[0]"
							:value="daughter.hp[1]"
						/>
					</transition-group>
				</div>

				<gj-item
					class="gj-status__gold"
					sprite="gold"
					:name="gold"
					:dark="true"
					:bold="true"
				/>
			</div>

			<gj-mana
				size="sm"
				class="gj-status__mana"
				:class="{'is-disabled': dad.dead}"
				:current="dad.mana[0]"
				:value="dad.mana[1]"
			/>
		</div>
	</div>
</template>

<script>
import GJMana from '@/components/atoms/GJMana'
import GJHealth from '@/components/atoms/GJHealth'
import GJItem from '@/components/molecules/GJItem'

export default {
	components: {
		'gj-mana': GJMana,
		'gj-health': GJHealth,
		'gj-item': GJItem,
	},

	props: {
		dad: {
			type: Object,
			default: () => ({
				hp: [10, 100],
				mana: [40, 100],
				avatar: require('@/assets/images/chars/nier.jpg')
			})
		},
		mom: {
			type: Object,
			default: () => ({
				avatar: require('@/assets/images/chars/kaine.jpg')
			})
		},
		son: {
			type: Object,
			default: () => ({
				avatar: require('@/assets/images/chars/emil.jpg')
			})
		},
		daughter: {
			type: Object,
			default: () => ({
				avatar: require('@/assets/images/chars/yonah.jpg')
			})
		},
		gold: {
			type: Number|String,
			default: 500
		}
	}
}
</script>

<style lang="scss">
.gj-status{
	display: flex;
	&__hero{
		margin-right: 10px;
	}
	&__wrapper{
		flex: 1;
		display: flex;
		align-items: center;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	&__left{
		display: flex;
		align-items: center;
		justify-content: space-between;
		.gj-health{
			margin-right: 10px;
		}
	}
	&__gold{
	}
	&__top{
		flex: 1;
		display: flex;
		justify-content: space-between;
	}
	&__mana{
		flex: 0 100%;
		margin-top: 5px;
		transition: opacity .2s $easeInOutQuad;
		&.is-disabled{
			opacity: .4;
		}
	}
}
</style>
