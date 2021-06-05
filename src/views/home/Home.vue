<template>
	<div id="Home">
		<NavBar class="homecenter">
			<div slot="center">Lemon</div>
		</NavBar>
	 <div class="banner">
	    <swiper v-if="bannerList.length>1" :options="SwiperOption">
	      <swiper-slide v-for="(item,index) in bannerList" :key="index">
	        <img :src="item">
	      </swiper-slide>
	      <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
	  </div>
</div>
</template>

<script>
import {getBannerData} from "network/home"
import NavBar from 'components/navbar/NavBar.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import "swiper/swiper-bundle.min.css"
	export default{
		name:'Home',
		components:{
			NavBar,
			swiper,
			swiperSlide
		},
		data(){
			return{
				bannerList : [],
				 SwiperOption:{
					loop:true,
					autoplay:true,
					observer:true,
					observeParents:true,
					autoplay: {
					　　delay: 3000,
	　　       disableOnInteraction: false
			　　 },
					pagination: {
						el: ".swiper-pagination",
						type: "bullets"
				}
				}
			}
		},
		created() {
			getBannerData().then(res => {
				let list = res.data.bannerList
				for(let i in list){
					this.bannerList.push(list[i].imgurl)
				}
			})
		},
		// methods(){
		// 　let that = this;
		// 　　that.$nextTick(function(){
		// 　　　　let mySwiper = new Swiper(".swiper-container",{ 
		// 　　　　　　direction:"horizontal",
		// 　　　　 　 loop:true,
		// 　　　　 　 autoplay:3000,
		// 						observer:true,
		// 						observeParents:true,
		// 						pagination:{
		// 							el:'.swiper-pagination',
		// 						}
		// 　　　　});
		// 　　})
		    // },
	}
</script>

<style>
	.homecenter{
		background-color: red;
	}
	.banner img{
		width: 100%;
		max-height: 200px;
	}
</style>