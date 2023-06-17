# Creating a Chrome App with Vanilla JS
바닐라 JS로 크롬 앱 만들기

---
> # Type up

## <span style='color:#ffd33d'>JavaScript란?</span>


 **자바스크립트는 모든 브라우저에 내장되어 있다.**
---
- 사용자들이 웹 사이트를 이용하기 위해 JavaScript를 설치할 필요가 없음


 **브라우저들은 딱 세가지의 언어를 이해한다.**
 ---
1. `HTML`
2. `CSS`
3. `JavaScript`
 
 **자바스크립트를 싫어해도 선택지가 없는 이유?(Front)**
 ---
- 백엔드의 경우 내가 원하기만 하면 `Ruby`, `Python`, `Go`, `Java` 등의 언어들을 선택할 수 있다.
- But, 프론트엔드의 경우 다른 <span style='color:#ffd33d'>옵션</span> 이 없다

### 만약 자바스크립트 기술을 좀 더 깊게 배우고 싶다면?
- <span style='color:#ffd33d'>바닐라JS</span> &rarr; 프레임워크
- 대표적인 프레임워크중 하나가 바로 <span style='color:#ffd33d'>React Native</span>

### `React Native` 
- React Native는 자바스크립트 만으로 안드로이드, iOS앱을 만들 수 있게 해준다<br>
- &rarr; 자바스크립트를 배우게 된다면 안드로이드, iOS앱을 만드는 방법도 이해하게 되는 것

### `일렉트론`
- 자바스크립트, HTML, CSS로 데스크탑 앱을 만들 수 있게 해준다
- &rarr; 사람들이 다운로드하고 설치해서 쓰는 프로그램을 만들 수 있게 된다
- VS Code 또한 일렉트론을 통해 JavaScript, HTML, CSS로 만들어졌음 
- 한마디로 웹사이트를 다운로드 받아서 쓰는것임(페이스북 메신저, 트위치, 슬랙...)

#### 현재는 자바스크립트로 백엔드도 돌릴 수 있다
- 프론트엔드를 자바스크립트로 만든 다음에 백엔드까지 자바스크립트로 만들 수 있다(예전엔 불가능했음)

#### 대부분의 카지노, 도박 사이트, 실시간 채팅, 실시간 영상들이 자바스크립트로 돌아감
- soket.io라는 것을 써서 채팅, 여타 실시간 기능들을 가능하게 한다
- ml5.js를 쓰면 머신러닝 모델을 생성하는 웹사이트를 구축해서 그 모델을 훈련시킬 수도 있다


#### 브라우저는 HTML을 열고, HTML은 CSS와 JavaScript를 가져오는 것(접착제 같은 역할)



># HTML
---
rel => relationship

일반적으로, JavaScript 파일은 맨 위에서 가져오지 않는다, 주로 끝에서 가져옴
<br>
<br>
<br>
<br>





># JavaScript
---
## Variables
<span style='color:#ffd33d'>선언 방법</span>
const name(변수명) = "데이터"
```JavaScript
const a = 10;               
const b = 2;               
// constant인 variable을 만든것 => variable의 이름은 a이며 5와 같다
// const => constant(상수[바뀌지 않는 값 = 계속 유지되는 것])


const myName = "ivy";
const veryLongVariableName = "ivy";     // JavaScript의 변수명 생성 관례 => camelCase라고 부른다
const very_long_variable_name = "ivy";  // 이처럼 Python의 변수명을 생성하는 관례(snake_case)와는 조금 다르다

console.log(a+b)
console.log(a*b)
console.log(a/b)
console.log("My name is "+myName)
```
