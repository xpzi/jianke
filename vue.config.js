// 首页
// https://fe-wcgi.jianke.com/v1/homepage?type=home&platform=mobile

// 分类页
// https://wcgi.jianke.com/category/api/fullCategories?platform=1
// https://wcgi.jianke.com/category/api/fullCategories?pid=196&platform=1

module.exports = {
    devServer:{
        proxy:{
            '/jianke':{
                target:'https://fe-wcgi.jianke.com',
                changeOrigin:true,
                pathRewrite:{'^/jianke':''}
            },
            '/xxx':{
                target:'https://wcgi.jianke.com',
                changeOrigin:true,
                pathRewrite:{'^/xxx':''}
            }   
        }
    }
}