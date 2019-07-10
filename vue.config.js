// 首页
// https://fe-wcgi.jianke.com/v1/homepage?type=home&platform=mobile

// 分类页
// https://wcgi.jianke.com/category/api/fullCategories?platform=1
// https://wcgi.jianke.com/category/api/fullCategories?pid=196&platform=1

// 头条页
// https://jktt-api.jianke.com/m/programs
// https://jktt-api.jianke.com/m/programs/2/articles?id=2&page=1&size=10
// https://jktt-api.jianke.com/m/hotarticles
// https://jktt-api.jianke.com/m/recommends/articles?page=1&size=10

module.exports = {
    devServer:{
        proxy:{
            '/fe-wcgi':{
                target:'https://fe-wcgi.jianke.com',
                changeOrigin:true,
                pathRewrite:{'^/fe-wcgi':''}
            },
            '/wcgi':{
                target:'https://wcgi.jianke.com',
                changeOrigin:true,
                pathRewrite:{'^/wcgi':''}
            },
            '/jktt-api':{
                target:'https://jktt-api.jianke.com',
                changeOrigin:true,
                pathRewrite:{'^/jktt-api':''}
            },   
        }
    }
}