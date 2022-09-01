module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/variables.scss";
                `
            }
        }
    },
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false
        }
    }
};