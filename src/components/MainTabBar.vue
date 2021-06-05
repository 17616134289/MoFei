<template>
	<TabBar>
		<TabBarItem path="/" activeColor="green">
			<img slot="item-icon" src="../assets/img/tabbar/pro1.png">
			<img slot="item-icon-active" src="../assets/img/tabbar/pro1_1.png" />
			<div slot="item-text">首页</div>
		</TabBarItem>
		<TabBarItem path="/Category" activeColor="green">
			<img slot="item-icon" src="@/assets/img/tabbar/pro2.png" />
			<img slot="item-icon-active" src="@/assets/img/tabbar/pro2_1.png" />
			<div slot="item-text">分类</div>
		</TabBarItem>
		<TabBarItem path="/Cart" activeColor="green">
			<img slot="item-icon" src="@/assets/img/tabbar/pro3.png" />
			<img slot="item-icon-active" src="@/assets/img/tabbar/pro3_1.png" />
			<div slot="item-text">购物车</div>
		</TabBarItem>
		<TabBarItem path="/Profile" activeColor="green">
			<img slot="item-icon" src="@/assets/img/tabbar/pro4.png" />
			<img slot="item-icon-active" src="@/assets/img/tabbar/pro4_1.png" />
			<div slot="item-text">我的</div>
		</TabBarItem>
	</TabBar>
</template>

<script>
	import TabBar from '@/components/tabbar/TabBar.vue'
	import TabBarItem from '@/components/tabbar/TabBarItem.vue'
	export default {
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
