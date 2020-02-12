// from: https://web.dev/codelab-serve-modern-code

const path = require("path");

const webpack = require("webpack");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // new ExtractTextPlugin({filename: "[name].css", allChunks: true}),
    // new HtmlWebpackPlugin({template" "./index.html"}),
    /*new ScriptExtHtmlWebpackPlugin({
        module: /\.mjs$/,
        custom: [
            test: /\.js$/,
            attribute: 'nomodule',
            value: ''
        ]
    })*/
];


// --- rules ---
const cssRule = {
    /*test: /\.css$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: './',
                hmr: process.env.NODE_ENV === 'development'
            }
        },
        'css-loader'
    ]*/
};

const jsRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
        presets: [
            ["@babel/preset-env", {
                useBuiltIns: "usage",
                targets: {
                    //"ie": "11"
                    esmodules: false
                },
                corejs: 3
            }]
        ]
    }
}

const tsRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

// --- end rules ----

const entry = {
    myTranspiledFile: "./app/js/es6-code.js",
    myTranspiledFile2: "./app/ts/ts1.ts"
};


// ---
const config1 = {
    entry,
    output: {
        path: path.resolve(__dirname, "assets/js/dist"),
        filename: "[name].ie-bundle.js"
    },
    module: {
        rules: [
            jsRule,
            tsRule,
            cssRule
        ]
    },
    plugins
};
// ---

module.exports = [
    config1
];