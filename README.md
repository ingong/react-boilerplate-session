<div align="center">
	<h1>react-boilerplate-session 👋</h1>
	<p>CRA 없이 만들어보며 React 기본 개발환경 이해하기</p>
</div>

초기 설정, Prettier 와 ESLint 관련 설정을 넘어가고 싶으면 다음 명령어를 통해 branch를 clone해주세요! 하나의 브랜치만 clone하는 명령어입니다!

```bash
git clone -b basic --single-branch https://github.com/ingong/react-boilerplate-session.git
```

## 1. 프로젝트 초기 설정

웹팩과 리액트를 사용하기 위해 필요한 라이브러리를 설치해보자.

```bash
$ npm init -y
```

위 명령어로 개발 프로젝트를 생성할 수 있다.

패키지 이름, 버전 등 프로젝트와 관련된 정보들을 답변하거나, 빈칸으로 두어 기본값을 입력할 수 있다. 모두 기본값을 사용할 것이라면 `-y` 플래그를 붙여 질문을 스킵하고 **package.json** 파일을 생성할 수 있다.

그리고 `.gitignore` 파일도 추가해주자.

gitignore에 추가할 파일은 구글링해도 좋고 이 Repository에 작성된 gitignore 파일을 추가해줘도 좋다.

## 2. ESLint

ESLint는 코딩 컨벤션에 위배되는 코드나 안티 패턴을 자동 검출하는 도구이다.
이제 ESLint를 설치하고 설정해보자.

### 2-1. npm로 eslint를 설치

```bash
npm install -D eslint
```

### 2-2. 구성 파일 설정

```bash
npx eslint --init
```

<div align="center">
  <img src="/README.assets/asset_1.png">
</div>

### 2-3. Rule 설정

```jsx
// .eslintrc.js
module.exports = {
  // ...
  extends: 'eslint:recommended',
  rules: {
    'no-extra-semi': 'error',
  },
};
```

`“eslint:recommended”`는 rules page에 있는 체크표시(☑️)된 모든 규칙들을 활성화한다. 이 설정 외에 규칙이 더 필요하면 rules 속성에 추가해서 확장할 수 있다.

또한 ESLint에는 수정 가능한 규칙과 불가능한 규칙이 있다. 렌치표시(🔧)가 붙은 것은 --fix옵션으로 자동 수정할 수 있는 규칙이다.

“no-extra-semi”는 규칙 이름이고 규칙에 설정하는 값은 3가지로 나뉜다.

```
"off" 또는 0 : 끔
"warn" 또는 1 : 경고
"error" 또는 2 : 오류
```

### 2-4. ESLint 최종 파일

지금까지 작성한 ESLint 파일은 다음과 같다.

자세한 설정 정보와 기타 rules에 대한 내용은 [ESLint 공식 문서](https://eslint.org/docs/rules/)에서 찾아보는 것을 추천한다!

```jsx
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-extra-semi': 'error',
    'no-undef': 'warn',
  },
};
```

그리고 동일한 경로에 `.eslintigore` 파일을 만들어주자.

우리가 문법 오류를 잡고 싶지 않은 파일들은 이 파일 안에 작성해주자. `gitignore`와 유사한 역할을 한다고 생각하면 좋을 것 같다.

eslint 파일에 대한 오류를 잡을 필요는 없기 때문에 이를 추가해주자.

> .eslintignore

```jsx
.eslintrc.js
```

## 3. Prettier

Prettier는 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 변환해주는 도구이다.

먼저, Prettier를 설치해주자.

```bash
npm install -D prettier
```

그리고 package.json과 동일한 경로에 `.prettierrc.js` 파일을 만들어주고, 다음 설정을 입력해주자.

`Prettier` 또한 관련한 설정에 대해서는 공식문서를 찾아보는 것을 추천한다!

```jsx
module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'lf',
};
```

ESLint는 포맷팅과 문법 오류를 식별하기 위한 도구고, Prettier는 포맷팅에 특화된 도구이다.

이 경우에는 충돌이 날 수 있고, 이를 위한 별도의 Plugin들을 설치해주어야한다.

```bash
npm install -D eslint-config-prettier eslint-plugin-prettier
```

`eslint-config-prettier` 는 eslint에서 prettier와 겹치는 포매팅룰을 삭제한다.

`eslint-plugin-prettier` 는 eslint에 prettier의 포매팅 기능을 추가한다.

즉, eslint-config-pretteir로 eslint의 원래 포매팅 기능을 없애버리고 eslint-plugin-prettier로 prettier의 포매팅 기능을 사용한다.

추가 설치 후에 다시 ESLint 파일로 돌아가자.

```jsx
module.exports = {
  // ...생략
  plugins: ['react', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  // ...생략
};
```

이제 Prettier와 ESLint 설정이 끝났다.

임의로 JS 파일을 만들고 다음 코드를 작성하고 저장해보자.

```jsx
const a = 10;
```

자동으로 다음과 같이 변환해줄 것이다.

```jsx
const a = 10;
```

그리고 아마 a라는 변수 밑에 다음과 같은 메세지가 뜰 것이다.

```jsx
'a' is assigned a value but never used.eslint[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)View ProblemQuick Fix... (⌘.)
```

이 경고 메세지의 의미는 변수를 선언했지만 사용하지는 않아서 발생한 오류이다.

규칙을 끌 수도 있지만, 나중에 파일이 많아 졌을 때 이 규칙을 무시하도록 설정하면 무분별한 변수 선언을 허용하는 것이나 다름없기 때문에 비추천한다.

빨간 줄이 너무 신경쓰인다면 eslint 파일로 돌아가서 다음 규칙을 추가해주자.

```jsx
// .eslintrc.js
"rules": {
   	 // 생략
    "no-unused-vars": "warn"
 }
```

## 4. Webpack 설정

### 4-1. Webpack 이란?

웹팩은 여러개의 파일을 하나로 합쳐주는 **모듈 번들러**이다.

하나의 시작점 (entry point) 으로부터 의존적인 모듈을 전부 찾아내 하나의 결과물을 만들어낸다.

webpack 패키지와 웹팩 커맨드 라인 인터페이스인 webpack-cli 를 설치하자. 그리고 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)은 프론트엔드 개발환경에서 이러한 개발용 서버를 제공해준다.

```bash
$ npm install -D webpack webpack-cli webpack-dev-server
```

### 4-2. Webpack 기본 설정

Webpack에서 3가지 옵션만 사용하면 코드를 번들링 할 수 있다.

- `-mode` : 웹팩 실행 모드를 지정한다. production은 최적화되어 빌드되는 특징이, development는 (최적화 없이) 빠르게 빌드되는 특징이 있다.
- `-entry` : 어플리케이션 진입점 경로를 지정한다. entry에 명시한 파일 기준으로 모든 dependency를 찾아 하나의 파일로 합치게 된다
- `-output` : 웹팩에서 빌드를 완료하면 output에 있는 정보를 통해 빌드 파일을 생성한다

개발할 때마다 터미널에 `--mode`, `--entry`, `--output` 옵션을 사용해 번들링 할 수도 있지만, 웹팩 설정파일인 **webpack.config.json** 에 옵션을 작성하는 것이 좋다.

package.json과 동일한 경로에 webpack.config.js 라는 파일을 추가하자.

> webpack.config.js

```jsx
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', // 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
  },
  output: {
    // 웹팩을 돌리고 난 결과물의 파일 경로
    filename: '[name].js', // [name] 에는 entry에 추가한 main이 문자열로 들어간다
    path: path.resolve('./dist'), //절대 경로를 사용하므로 노드 코어 모듈인 path의 resolve() 함수를 사용해 계산한다
  },
};
```

entry 경로에 설정한 코드에 따르면 src 폴더 내부에 `index.js` 파일이 존재해야한다.

src 폴더를 추가하고 그 하위에 `index.js` 파일을 작성하자.

그리고 root 경로에 public 폴더를 만들고 그 안에 `index.html` 파일을 작성하고 코드 스니펫을 통해 기본 html 코드를 추가해주자.

그리고 웹팩 build와 start를 위한 npm 커스텀 명령어를 추가해보자.

build 명령어는 파일을 build해서 output 경로에 해당 파일을 만들어주고, start 명령어는 webpack-dev-server를 구동시켜 효율적인 프론트엔드 개발 환경을 제공한다.

> package.json

```json
{
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --progress"
    // progress는 개발서버가 켜지기전 까지의 진행상태를 보여준다
  }
}
```

`npm run build` 명령어와 `npm run start` 명령어를 한 번씩 입력하고 어떤 변화가 일어나는지 살펴보자.

`build` 명령어를 입력하면 dist 폴더가 생성되고 하위에 파일이 생성된 것을 확인할 수 있다.

`start` 명령어는 8080 포트에 서버를 구동시킨다.

웹팩 서버는 파일 변화를 감지하면 웹팩 빌드를 다시 수행하고, 브라우저를 새로고침하여 변경된 결과물을 보여준다. 우리가 코드를 수정했을 때 브라우저가 변화를 반영해주는 것도 알고보면 `webpack` 덕분이였다.

### 4-3. Loader

### 4-3-1. 로더 기본 개념과 사용법

웹팩은 기본적으로 자바스크립트와 JSON만 빌드할 수 있다. 로더는 웹팩이 자바스크립트 파일이 아닌 파일들도 (CSS, 이미지, 폰트 등...) 이해하고 모듈로 관리할 수 있게 해준다.

로더를 사용하기 위해선, 필요에 맞는 로더를 설치한 후 `module` 과 `rules` 키워드를 사용해 웹팩 설정 파일에 정의하면 된다. 기본적인 틀은 아래와 같다.

> webpack.config.js

```jsx
module.exports = {
  (생략)
  module: {
    rules: [
      {
        test: '파일명 또는 가지고올 파일 패턴 정규식',
        use: ['사용할 로더의 이름']
      }
    ]
  }
}
```

- test에는 로더를 적용할 파일을 지정한다.
- use에는 test에서 지정한 파일들에 적용할 로더를 설정한다.

특정 파일에 대해 여러 개의 로더를 사용하는 경우, 배열에 여러개의 로더를 넣을 수도 있는데 이 때 로더가 **오른쪽에서 왼쪽 순으로 사용**됨을 주의해야 한다.

```jsx
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'], // sass 전처리기 사용 후 css 로더 사용
    },
  ];
}
```

로더는 아래와 같이 옵션을 포함한 형태로도 입력할 수 있다

```jsx
module : {
    rules: {
        test: '파일명 또는 가지고올 파일 패턴 정규식',
        use: [
            {
                loader: '사용할 로더 이름',
                options: { 사용할 로더 옵션 }
            }
        ]
    }
}
```

### 4-3-2. 커스텀 로더 만들기

동작 원리를 이해하기 위해 커스텀 로더를 만들어보자.

일단 아래와 같이 디렉토리를 구성한다.

<div align="center">
  <img src="/README.assets/asset_2.png">
</div>

math.js에서는 간단한 덧셈 함수를 export 하고, App.js에서는 이 math.js를 import 해온 후 덧셈 함수 실행의 결과를 콘솔에 찍는다.

> math.js

```jsx
export const sum = (a, b) => a + b;
```

> index.js

```jsx
import { sum } from './math.js';
console.log(sum(1, 2));
```

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Webpack React</title>
  </head>
  <body>
    <script type="module" src="../src/index.js"></script>
  </body>
</html>
```

지금 상황에서는 반드시 **script 태그에 module을 사용**해야 index.js 가 ES6 모듈 시스템(export, import)을 사용할 수 있다.

이제 html 파일로 이동해서 html 파일을 브라우저에 띄워보자.

필자는 HTML 만을 띄울 경우에는 Live Server를 사용한다.

<div align="center">
  <img src="/README.assets/asset_3.png">
</div>

Live Server를 사용하는 경우 html 파일에서 command + L + O(mac 기준) 를 눌러주면 브라우저에 나타난다.

Live Server말고 다른 편하다고 생각하는 방법을 사용해도 무관하다.

그렇다면 콘솔창에 3이 뜰것이다.

자 그럼 이제 커스텀 로더를 만들어보자. 커스텀 로더는 아래와 같이 만들 수 있다.

> myloader.js

```jsx
module.exports = function myloader(content) {
  console.log('myloader 동작');
  return content.replace('console.log(', 'alert(');
};
```

로더가 읽은 파일의 내용이 content로 전달되고, 로더는 로그를 찍은 뒤 소스에 있는 모든 console.log를 alert 함수로 변경해 리턴한다.

> webpack.config.js

```jsx
const path = require("path");
module.exports = {
  	(생략)
		module: {
		    rules: [
		      {
		        test: /\.js$/,
		        use: [path.resolve('./src/myloader.js')],
		      },
		    ],
		},
};
```

마지막으로, 웹팩 설정파일에 위와 같이 `module` 과 `rules` 키워드를 통해 커스텀 로더를 설정해주면 로더를 사용할 준비가 끝난다. `npm run build` 커맨드를 입력하면 dist 라는 폴더가 생성되고 `main.js` 파일이 생성되는 것을 볼 수 있다.

아래와 같이 index.html 에서 빌드 된 결과코드(dist/main.js)를 실행하게 `index.html`의 코드를 수정해주자.

> index.html

```html
<!-- <script type="module" src="../src/index.js"></script> -->
// 제거해도 무관하다.
<script type="module" src="../dist/main.js"></script>
```

그리고 다시 `index.html` 파일을 띄워주자

로더를 적용하기 전, index.html 을 실행했을때는 index.js 를 실행하므로 console.log에 덧셈 함수 결과가 찍히지만, 만들었던 커스텀 로더로 인해 console.log가 아니라 alert 로 변경된 것을 확인할 수 있다.

alert가 동작하는 것을 확인했다면, Custom Loader와 관련된 파일과 설정을 제거해주자.

관련한 내용은 [다음 커밋 로그](https://github.com/ingong/react-boilerplate-session/commit/661bc10d7e02d0ecc5af099f650bcd8c2b4d9105)에서 확인할 수 있다.

### 4-3-3. 자주 사용하는 로더 설정하기

### 1. css-loader + style-loader

CSS를 번들링하기 위해서는 css-loader와 style-loader를 함께 사용해야 한다.

**css-loader**을 사용하면, CSS를 모듈로 변환해 import 구문을 사용해 불러올 수 있게 해준다.

```bash
$ npm install -D css-loader
```

먼저 로더를 설치한 뒤,

> webpack.config.js

```jsx
module.exports = {
  (생략)
  module: {
    rules: [{
      test: /\\.css$/, // .css 확장자로 끝나는 모든 파일에
      use: ['css-loader'], // css-loader를 적용 (로더 이름을 문자열로 전달해도 됨)
    }]
  }
}
```

webpack 설정에 css-loader을 추가해준다. 이렇게 설정하고 나면, 웹팩은 entry point에서 시작해서 모듈을 검색하다가 css 파일을 찾으면 css-loader로 처리할 것이다.

그런데 css는 모듈로 변경한다고 (= 자바스크립트 코드로 변경된다고) 끝나는 것이 아니라, DOM에 추가되어야 한다. 이를 위해서 자바스크립트로 변경된 CSS를 동적으로 DOM에 추가해주는 style-loader을 사용해야 한다.

css-loader과 동일하게 style-loader을 설치한 뒤,

```bash
$ npm install -D style-loader
```

> webpack.config.js

```jsx
module.exports = {
  (생략)
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader','css-loader'],
    }],
  }
}
```

webpack 설정에 style-loader 을 추가해준다. 이 때 배열로 설정하면 **뒤에서부터 앞으로** 로더가 동작하므로, 모든 .css 확장자로 끝나는 모듈을 읽어들여 css-loader을 적용하고, 그 다음 style-loader을 적용한다.

적용되는 것을 확인하기 위해 index.html 수정하고, index.css 파일을 아래와 같은 경로로 추가해준다.

> public/index.html

```jsx
// 생략
<body>
  <p>CSS</p>
</body>
// 생략
```

> src/styles/index.css

```css
p {
  background-color: cornflowerblue;
}
```

마지막으로 index.js 에 css 를 import 해준다.

> src/index.js

```jsx
import './styles/index.css';
```

<div align="center">
  <img src="/README.assets/asset_4.png">
</div>

import 한 css 파일이 성공적으로 모듈로 잘 인식되어 적용된 것을 확인할 수 있다.

애셋 모듈은 로더를 추가로 구성하지 않아도 애셋 파일(폰트, 아이콘 등)을 사용할 수 있도록 해주는 모듈입니다.

webpack 5 이전에는 아래의 로더를 사용하는 것이 일반적이었습니다.

### (2) 애셋 모듈 - asset/resource

애셋 모듈은 사실 Webpack5부터는 로더로 보기 어렵다고 생각한다. Webpack4에서 사용했던 file-loader, url-loader, raw-loader를 이제는 모듈을 설정하는 것만으로 구성할 수 있다.

webpack 5 이전에 각각의 로더는 다음과 같은 용도로 사용되었다.

- `[file-loader](https://v4.webpack.js.org/loaders/file-loader/)` : 파일을 출력 디렉터리로 내보낼 때
- `[url-loader](https://v4.webpack.js.org/loaders/url-loader/)` : 파일을 data URI 형식으로 번들에 인라인 추가 할 때
- `[raw-loader](https://v4.webpack.js.org/loaders/raw-loader/)` : 파일을 문자열로 가져올 때

webpack 5 부터는 다음과 같은 모듈 유형 추가를 통해서 명시할 수 있다.

- `asset/resource`: 별도의 파일을 내보내고 URL을 추출한다. 이전 `file-loader`를 사용하여 처리했다.
- `asset/inline`: 애셋의 data URI를 내보낸다. 이전 `url-loader`를 사용하여 처리했다.
- `asset/source`: 애셋의 소스 코드를 내보낸다. 이전`raw-loader`를 사용하여 처리했다.

`asset/resource`를 통해 png, jpg 등의 이미지를 번들링 (웹팩 아웃풋으로 옮길) 할 수 있다. 예를 들어, CSS에서 url() 함수에 이미지 파일 경로를 지정하면, 웹팩은 해당 이미지 파일을 만났을 때 해당 모듈을 실행시켜 아웃풋에 설정한 경로로 이미지 파일을 복사할 것이다.

public 폴더 아래에 assets 폴더를 작성 한 뒤 png를 하나 넣어주고, css에서 그 이미지 파일을 사용해보자.

필자는 baseball.png 파일을 넣어주었다.

> index.html

```html
<p>CSS</p>
<div></div>
// 추가된 라인
```

> index.css

```css
div {
  width: 500px;
  height: 500px;
  background-image: url('../../public/assets/baseball.png');
}
```

그리고 모듈을 설정해주자.

> webpack.config.js

```jsx
module.exports = {
  (생략)
  module: {
   rules: [
			{
        test: /\.(png|jp(e)g|gif)$/,
        type: 'asset/resource',
      },
   ]
 },
}

```

그런데, 이대로 빌드를 하면 이미지를 제대로 로딩하지 못한다. 그 이유는, png를 사용하는 측에서 `../assets/baseball.png` 로 파일을 요청하는데 웹팩으로 빌드한 이미지 파일은 output인 dist 폴더로 이동했기 때문이다.

따라서 옵션을 조정해 **경로를 바로잡아줘야 한다**.

> webpack.config.js

```jsx
module.exports = {
 (생략)
  module: {
    rules: [
      {
        test: /\.(png|jp(e)g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext][query]'
        }
      },
  (생략)
    ],
  },
  output: {
    (생략)
    publicPath: '/public/',
  },
};
```

**publicPath** 옵션과 generator를 활용해 로더가 파일을 output에 복사할 때 사용할 파일 이름을 설정하고 기본 publicPath를 설정해준다. 다음과 같이 이미지가 나타나는 것을 확인할 수 있다.

<div align="center">
  <img src="/README.assets/asset_5.png">
</div>

### (3) 애셋 모듈 - asset/inline

사용하는 이미지 갯수가 많다면, 네트워크 리소스에 부담을 줘 성능에 영향을 줄 수 있다. 한 페이지에서 작은 이미지(아이콘 등)를 여러개 사용한다면, 이미지를 Base64로 인코딩하여 문자열 형태로 소스코드에 넣는 형식이 더 나을 수도 있다. [참고 링크 : Data URIs](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)

asset/inline 모듈은 이런 처리를 자동화해준다. svg 확장자를 사용한 경우 Base64로 인코딩하도록 작성해주자.

> webpack.config.js

```jsx
{
  test: /\.(svg)$/i,
	type: 'asset/inline',
	parser: {
    dataUrlCondition: {
      maxSize: 8 * 1024,
    },
  },
},

```

그리고 assets 경로에 svg이모티콘을 하나 추가하고, 다음과 같이 코드를 추가해주자. 하단부에 X가 추가된 것을 볼 수 있다.

> index.html

```html
<p>CSS</p>
<div></div>
<section></section>
// 추가된 라인
```

> index.css

```css
section {
  width: 15px;
  height: 15px;
  background-image: url('../../public/assets/close.svg');
  background-repeat: no-repeat;
}
```

<div align="center">
  <img src="/README.assets/asset_6.png">
</div>

asset/resource를 사용한 경우에는 png가 그대로 반영되었지만,

asset/inline의 경우에는 base64로 인코딩되어서 반영되었다.

<div align="center">
  <img src="/README.assets/asset_7.png">
</div>

<div align="center">
  <img src="/README.assets/asset_8.png">
</div>

Webpack 공식 문서에 따르면

> 이제 webpack은 기본 조건에 따라서 `resource` 와 `inline`  중에서 자동으로 선택합니다. 크기가 8kb 미만인 파일은 `inline`  모듈로 처리되고 그렇지 않으면 `resource`  모듈로 처리됩니다.

따라서 svg 파일을 별도로 asset/inline으로 작성하지 않아도 8KB 미만이라면 Webpack이 알아서 Base64인코딩으로 변환해준다.

### 4-4. Plugin

### 4-4-1. 플러그인 기본 개념과 사용법

앞서 알아본 로더가 파일을 해석하고 변환하는 과정에 관여했다면 (파일 단위), 플러그인은 웹팩을 통해 **번들된 결과물**의 형태를 바꾸는 과정에 관여한다. 예를 들면, 번들된 JS를 난독화하거나 특정 텍스트를 추출하는 용도로 사용한다.

플러그인은 아래와 같이 `plugins` 키워드를 통해 선언하며, 플러그인의 배열에는 **생성자 함수로 생성한 객체 인스턴스만 추가**할 수 있다.

> webpack.config.js

```jsx
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
};
```

### 4-4-2. 자주 사용하는 플러그인 설정하기

### HtmlWebpackPlugin

HTML 파일을 후처리하기 위해 HtmlWebpackPlugin을 사용할 수 있다. HtmlWebpackPlugin은 번들된 파일을 `<script>` 태그를 사용해 주입한 HTML 파일을 자동으로 생성해준다. (따라서 HTML에 스트립트 로딩 태그가 없어도 된다)
HtmlWebpackPlugin을 사용하면 빌드 타임의 값을 넣거나, 코드를 압축할 수 있고, 웹팩으로 빌드한 결과물을 자동으로 HTML에 주입해준다.

```bash
$ npm install -D html-webpack-plugin
```

> webpack.config.js

```jsx
const HtmlWebpackPlugin = require('html-webpack-plugin');
...
module.exports {
	output: {
	 (중략)
	 //publicPath: '/public/', 이 코드는 제거해주자.
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
  ]
}

```

> public/index.html

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <!-- 로딩 스크립트가 필요 없다 -->
    <!-- <script src="dist/main.js"></script> -->
  </body>
</html>
```

htmlwebpackplugin을 사용하면 production 모드에서 파일을 최적화 할 수도 있다.

> webpack.config.js

```jsx
new HtmlWebpackPlugin({
  minify: process.env.NODE_ENV === 'production' ? {
    collapseWhitespace: true, // 빈칸 제거
    removeComments: true, // 주석 제거
  } : false,
}

```

위와 같이 minify 옵션을 주고, `NODE_ENV=production npm run build` 로 빌드하면 압축된 html output을 볼 수 있다.

이외에 자주 사용하는 plugin은 다음과 같다. 이 부분은 webpack 공식문서를 참고해서 필요에 따라 추가해주자.

- MiniCssExtractPlugin
- Webpack Bundle Analyzer
- MiniCssExtractPlugin

### 4-5. 정리

웹팩은 ES6 모듈시스템을 쉽게 사용하도록 돕는 역할을 한다. Entry point를 시작으로, 연결되어 있는 모든 모듈을 하나로 합쳐서 결과물을 만드는 것이 웹팩의 역할이다. JS 모듈 뿐만 아니라 CSS, 이미지 파일 등 모든 파일을 모듈로 제공해주므로 일관성 있는 개발을 할 수 있다.

## 5. 웹팩 개발 서버

지금까지는 브라우저에서 파일을 직접 열어서 결과물을 확인했다. 그런데, 원래 브라우저 운영환경은 서버 프로그램으로 파일을 읽고, 요청한 클라이언트에게 페이지를 제공해주는 방식이다. 개발환경에서도 이와 유사한 환경을 맞춰야 배포시 잠재적 문제를 미리 확인할 수 있고, ajax 방식의 API 연동을 할 때 역시 CORS 정책으로 인해 서버가 필요하다.

### 웹팩 개발 서버 기본 설정

웹팩 설정 파일의 devServer 객체에 개발 서버 [옵션](https://webpack.js.org/configuration/dev-server/)들을 설정할 수 있다.

> webpack.config.js

```jsx
// webpack.config.js:
module.exports = {
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true, // History API 또는 react-router 등을 사용하는 경우 새로고침 시 404 에러를 해결해주는 option
    // host: "dev.domain.com",
  },
};
```

host의 경우 개발환경에서 도메인을 맞춰야 하는 경우 사용한다. 예를 들어, 쿠키 기반 인증은 인증 서버와 동일한 도메인으로 개발환경을 맞춰야한다. 운영체제의 호스트 파일에 해당 도메인과 127.0.0.1 (localhost) 연결을 추가한 뒤 host 속성에 도메인을 설정해서 사용한다.

## 6. React + Babel

### 6-1. React 설치

react와 react-dom을 설치해주자.

```jsx
npm install -D react react-dom
```

> src/App.jsx (추가)

```jsx
function App() {
  return 'hello world';
}

export default App;
```

> src/index.jsx (index.js 수정)

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

webpack에 기본 확장자를 js, jsx로 작성해주자.

> webpack.config.js

```jsx
entry: {
   main: './src/index', // 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
},
resolve: {
   extensions: ['.js', '.jsx'],
},
```

추가적인 설정이 필요하다! 왜냐하면 jsx는 js가 아니기 때문에 loader가 필요하다!

<div align="center">
  <img src="/README.assets/asset_9.png">
</div>

이제는 바벨을 추가해줘야한다. 바벨은 주로 ECMAScript 2015+ 코드를 현재 및 과거의 브라우저와 같은 환경에서 호환되는 버전으로 변환하는데 주로 사용되는 도구이다.

Babel 덕분에 ES6+ 버전의 자바스크립트나 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜준다

### 6-2. Babel 설치

바벨 관련 모듈을 설치해주자.

```jsx
npm install -D babel-loader @babel/core
npm install -D @babel/preset-env @babel/preset-react
npm install -D @babel/plugin-transform-runtime // polyfill
```

babel-loader를 webpack loader에 추가해주자.

> webpack.config.js

```jsx
// (생략)
rules: [
  {
    // 최상단부
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
];
// (생략)
```

바벨 설정 파일을 작성하고 다음 preset과 plugin을 추가해주자.

> .babelrc (추가)

```jsx
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not dead",
        "useBuiltIns": "usage",
        "corejs": 3,
        "modules": false
      }
    ],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```
