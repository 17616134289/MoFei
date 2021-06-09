<template>
	<div class="recom">
		<div v-for="item in recoms">
			<a :href="item.imgurl">
				<img :src="item.imgurl" />
				<div>{{item.name}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Recom",
		props:{
			recoms:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style>
	.recom{
		display: flex;
		font-size: 18px;
		padding-top: 10px;
		padding-bottom: 25px;
		border-bottom: 10px solid #eee;
		}
	.recom>div{flex: 1;text-align: center;}
	.recom img{
		width: 80px;
		height: 80px;
		border-radius: 40px;
	}
</style>
