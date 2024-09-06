/*
 * @Author: Diana Tang
 * @Date: 2024-09-06 14:52:02
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /webpack-loader-text-inversion/reverse-loader.js
 */
// reverse-loader.js
module.exports = function (source) {
    // 反转输入的字符串
    const reversedSource = source.split('').reverse().join('');
    // 将处理后的内容返回
    return reversedSource;
  };
  