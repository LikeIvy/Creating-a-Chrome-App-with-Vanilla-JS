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

**const** name(변수명) = ""

**let** name(변수명) = ""

~~**var** name(변수명) = ""~~

```JavaScript
const a = 10;               
const b = 2;               
// const => constant(상수[바뀌지 않는 값 = 계속 유지되는 것])
// constant인 variable을 만든것 => variable의 이름은 a이며 ""와 같다


const myName = "ivy";
const veryLongVariableName = "ivy";     // JavaScript의 변수명 생성 관례 => camelCase라고 부른다
const very_long_variable_name = "ivy";  // 이처럼 Python의 변수명을 생성하는 관례(snake_case)와는 조금 다르다

console.log(a+b)
console.log(a*b)
console.log(a/b)
console.log("My name is "+myName)
```

```JavaScript
let myName = "ivy";
console.log("My name is "+myName)

myName = "IVYIVY"                   // let으로 만든 변수는 Variable 업데이트가 가능하다
console.log("My name is "+myName)



const myName2 = "ivy";              // const로 variable을 만들었다면, 절대 값을 업데이트 할 수 없다
console.log("My name is "+myName2)  
```

```JavaScript
// const로 생성한 변수를 업데이트 하게 될 경우 아래와 같은 에러가 발생한다
const myName2 = "ivy";              // const로 variable을 만들었다면, 절대 값을 업데이트 할 수 없다
console.log("My name is "+myName2) 

myName2 = "IVYIVY"                  // => Error : Assignment to constant variable => constant variable에 새로운 값을 대입할 수 없다
console.log("My name is "+myName2)  // 그럼 왜 const를 이용하냐? => 가끔 몇몇 variable은 절대로 변하지 않도록 해야 할 때가 있다
                                    // 대부분 const를 기본적으로 사용하고 variable을 업데이트 하고 싶을 경우 let을 사용한다
```                                       


```JavaScript
var a = "apple"
console.log("This is "+a) // 과거 JavaScript에는 const, let은 없었고 var를 사용했다(현재도 사용 가능)
                          // 하지만 var를 사용하면 문제점이 우리 언어를 통한 보호를 받지 못하게 된다
                          // var에는 특이한 규칙이 있는데 var로 생성한 변수를 원한다면 어디서든 업데이트가 가능하다는 것
                          // => 만약 실수로 var로 생성한 a의 값을 업데이트해도, 언어가 알려주지 않음
                          // => 이게 const와 let을 만든 이유
                        
let a3 = 3;    // 이런식으로 variable을 업데이트 하고 싶을 경우에만 let을 사용하고
const a1 = 1;  // 기본적으로는 const를 사용함으로써 한눈에 코드에서 의미를 파악할 수 있다
               // var를 사용해도 당장 문제가 일어나진 않지만 사용을 지양하고 const, let을 사용하자
```


## Boolean

true = 1, on

false = 0, off

- 로그인을 했는가?
- 비디오가 재생되고 있는가?
- 웹사이트가 로딩되고 있는가? 등등에 사용..


`true` `false` `null` `undefined`

```JavaScript
const amIFat = true;   // 파이썬에선 True, False로 앞이 대문자인것과는 다르게 소문자로
const amIFat2= false;
console.log(amIFat, amIFat2)

const amIFat3 = null; //파이썬의 None
console.log(amIFat3)  // null은 자연적으로 발생하지 않음, 우리가 variable안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것("비어있어요"를 의도적으로 표현)

let something;           // something이라는 variable을 만들고 있지만, 값을 주고 있지 않은 것 => variable은 존재하지만, 정의되지 않은 것(undefined)
console.log(something)   // 그렇기에 컴퓨터 메모리 안에는 존재한다. 즉, 공간은 있는데, 값이 들어가지 않은 것
                         // 다시 말해 컴퓨터가 이 variable에 대해서 인지하고 있지만, 값이 없는 것

```

## Array
- 데이터 정렬
- 데이터 구조에 대한 것
- 데이터를 어떻게 하면 가능한 최선의 방법으로 정리할 수 있을까
- 우리는 자료의 검색이나 삽입을 빠르게 할 수 있는 데이터의 저장 방법에 대해 생각하는 데 시간을 쏟는다
- 데이터 구조라든지 데이터를 어떻게 정리할지에 대해서 고민을 하게 됨
- 지금 배울 가장 기본적인 데이터 구조는 array(배열)
- <span style='color:#ffd33d'>가장 기초적이고 필수적인 자료구조</span>
- array의 목적은 하나의 variable안에 데이터의 list를 가지는 것
- 이번에 배울것은 array를 생성하는 방법과 array 안에 있는 elements를 받아오는 방법을 알아볼 것
- 인덱스는 0부터 시작


```JavaScript
// 1주일의 요일을 만들고 싶다고 가정해보자

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";   // 보다시피 좋은 방법은 아니다
const sat = "sat";   // 효율적이라고 할 수 없기 때문인데, 왜그럴까?
const sun = "sun";   // 내가 만약 이것들을 리스트로 그룹화시키고 싶다면 어떻게 할 수 있을까?
```

```JavaScript
const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek)
// mon~sun 까지 매우 긴 string을 갖게 된걸 볼 수 있다
// 이 상태에서는 금요일을 넘겨달라고 해도 금요일만 넘겨줄 수 없음
// 무언가를 나열하기 위한 좀 더 나은 방법이 필요함
// 데이터 타입들을 그룹으로 묶기 위한 더 좋은 방법이 있어야 함
```

```JavaScript
const daysOfWeek2 = [mon, tue, wed, thu, fri, sat, sun];        // daysOfWeek2라는 array 생성
                                                                // 시작과 끝에 대괄호를 사용
                                                                // array안 각각의 항목은 쉼표로 분리

const nonsense = [1, 2, "hello", false, null, true, undefined]; // nonsense라는 array 생성

console.log(daysOfWeek2, nonsense);
```


```JavaScript
// array가 왜 필요할까?
// 예를 들어 내가 구매하고자 하는 것들의 리스트가 있는데 array가 없다면?

const aplle = "apple"           // 이런 식으로 계속 변수를 생성할 수는 없다
const potato = "potato"         // 정말 많은 변수가 필요해지게 되며
                                // 코드의 가독성이 떨어지고 연산에 불편함을 겪는다



// array를 사용한다면?

const nonsense = [1, 2, "hello", false, null, true, undefined];    // 하나의 배열에 여러 자료형 데이터들을 담을 수 있고
const toBuy = ["potato", "tomato", "pizza"];                       // 변수의 수를 줄여주고, 연산에 편리하다               
                                                                   // 관련성 있는 데이터를 함께 변수에 저장하므로 데이터를 탐색하는데 용이해짐
```


```JavaScript
const daysOfWeek3 = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek3);


// Get Item from Array
console.log(daysOfWeek3[0]);   // array안의 데이터에 접근하고 싶다면 varialbe이름을 적어주고(array를 갖는 variable이름)
                               // 대괄호를 열어 우리가 얻고 싶은 항목의 번호를 넣고 대괄호를 닫아준다

// Add one more day to the array
daysOfWeek3.push("sun");       // push()를 사용한다
console.log(daysOfWeek3);
```
