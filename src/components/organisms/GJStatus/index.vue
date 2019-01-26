<template>
	<div class="gj-status">
		<gj-health class="gj-status__hero" size="lg" :value="100" />

		<div class="gj-status__wrapper">
			<div class="gj-status__top">
				<div class="gj-status__left">
					<gj-health size="sm" />
					<gj-health size="sm" />
					<gj-health size="sm" />
				</div>

				<gj-item
					class="gj-status__gold"
					name="500z"
					sprite="gold"
					:dark="false"
					:bold="true"
				/>
			</div>

			<gj-mana class="gj-status__mana" size="sm" />
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
	}
}
</style>
