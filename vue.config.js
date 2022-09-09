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
        },
        sitemap: {
            urls: [
              'https://gauntletdesigns.com/',
              'https://gauntletdesigns.com/services',
              'https://gauntletdesigns.com/contact',
            ]
        }
    }
};