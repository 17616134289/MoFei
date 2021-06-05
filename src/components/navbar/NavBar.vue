<template>
	<div id="NavBar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'NavBar',
		
	}
</script>

<style scoped>
	#NavBar{
		line-height: 44px;
		height: 44px;
		display: flex;
		text-align: center;
		box-shadow: 0 1px 1px rgb(100,100,100,.1);
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
		color: #fff;
		font-size: 24px;
		font-weight: 700;
	}
</style>
