module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    filenameHashing: process.env.NODE_ENV === "production" ? false : true,
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    }
};
