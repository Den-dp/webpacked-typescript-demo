module.exports = {
    entry: __dirname + "/src/app.ts",

    output: {
        path: __dirname + '/assets',
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    }
};
