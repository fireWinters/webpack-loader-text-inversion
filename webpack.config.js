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
                use: path.resolve(__dirname, 'reverse-text-loader.js'), // 使用自定义 loader
            },
        ],
    },
};
