import http from './request'

const baseUrl = '/api/sfsr'

const GET = 'GET'

const API = {
	headData: ['/getSfsrHead', 'GET'],
}

export const headDataApi = () => http.request(API.headData, {_baseURL: baseUrl})
