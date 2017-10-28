const path = require('path');

module.exports = {
    entry: './frontend/app.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.js$/,
                exclude: /npnode_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    }


};