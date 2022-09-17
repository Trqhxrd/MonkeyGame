const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './tmp/index.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/index.html",
                    to: "index.html"
                },
                {
                    from: "./src/stylesheet.css",
                    to: "stylesheet.css"
                },
                {
                    from: "./src/assets",
                    to: "assets"
                }
            ]
        })
    ]
}