import axios from 'axios'

export function request(config){
			const Axios = axios.create({
				baseURL:'https://heniu.sdjuliang.cn/community-fast/',
				timeout:5000
			})
			Axios.interceptors.request.use(config =>{
				return config
			},err => {
				console.log(err)
			})
			return Axios(config)
}