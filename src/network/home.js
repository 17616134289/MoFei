import {request} from "./request.js"

export function getBannerData() {
	return request({
		url:'app/banner/list',
		method:'get',
	})
}