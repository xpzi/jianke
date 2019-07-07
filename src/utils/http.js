import axios from 'axios'

const http = {
    get({url,params}){
        if(!url) return false
        return axios({
            method:'get',
            url,
            params
        }).then(function(response){
            return response.data
        }).catch(function(err){
            console.warn("get request err")
            console.log(err)
        })
    },
    post({url,data}){
        if(!url) return false
        return axios({
            method:'post',
            url,
            data
        }).then(function(response){
            return response.data
        }).catch(function(err){
            console.warn('post request err')
            console.log(err)
        })
    }
}

export default http
