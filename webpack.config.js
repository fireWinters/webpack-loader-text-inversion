/*
 * @Author: Diana Tang
 * @Date: 2024-09-06 17:14:49
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /webpack-loader-text-inversion/webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.txt$/, // 匹配 .txt 文件
                use: path.resolve(__dirname, 'reverse-loader'), // 使用自定义 loader
            },
        ],
    },
};
