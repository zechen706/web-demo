module.exports ={

    runtimeCompiler:true,

    devServer:{
        proxy:''
    },
    baseUrl:process.env.NODE_ENV === 'production'? '/static/':''
}