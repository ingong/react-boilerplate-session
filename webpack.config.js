const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', // 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e)g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext][query]'
        }
      },  
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      }
    ],
  },
  output: {
    // 웹팩을 돌리고 난 결과물의 파일 경로
    filename: '[name].js', // [name] 에는 entry에 추가한 main이 문자열로 들어간다
    path: path.resolve('./dist'), //절대 경로를 사용하므로 노드 코어 모듈인 path의 resolve() 함수를 사용해 계산한다
    publicPath: '/public/',
  },
};
