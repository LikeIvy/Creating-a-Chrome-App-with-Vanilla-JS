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

## Object
- 무언가를 리스트 안에 정리할 수 있게 되었다(요일, 구매하고 싶은 것들...)
- 때로는 list가 아닌 object라는 것을 만들어야 할 때가 있다
- 게임안의 캐릭터를 만든다고 가정해보자
- 만약 우리에게 object라는 것이 없다면

```JavaScript
const platyerName = "ivy";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"
```
혹은

```JavaScript
const player = ["ivy", 121212, false, "little bit"]
// array를 이용해봤지만 좋지 못함
// ivy~little bit 등 자체의 의미만 알 수 있을 뿐 무얼 의미하는지 얻을 수 없다(옆에 설명이 필요함)
// player[0] == name
// plater[1] == points  =>  이런식으로 프로그래머가 이해할 수 있도록 도울 수 있지만 이 또한.. 많은 varialbe을 만들어야 하는 방식보다 더 나은 것이 필요함
```


- console.log나 array.push처럼 하나의 entity에 대해서 설명하고 있다는걸 알기 쉽게 표현하는것이 좋다
    - player.name
    - player.points
    - plyer.handsome...
    - 이걸 위해 필요한 것이 바로 object


```JavaScript
// object
// variable 처럼 const로 생성하되 {}중괄호를 이용한다
// 중괄호 안에는 property(특성)을 작성한다
// object안에서는 이퀄을 사용하지 않는다, 콜론을 사용한다
const player = {
    name : "ivy",
    points : 10,
    fat : true,
};
```


```JavaScript
console.log(player);         // console또한 object임을 알 수 있고, 그 안에 log가 있는걸 알 수 있다 
console.log(player.name);    // 접근1
console.log(player["name"]); // 접근2 같은 결과
```


```JavaScript
console.log(player);
player.fat = false;     // object를 업데이트하는 것 또한 가능하다
console.log(player);    // 업데이트 되었다. 하지만 const는 variable을 배울 때 업데이트는 불가능하다고 배웠는데 어떻게?
                        // const를 변경하는것이 불가능하다는 것은 여전히 사실임. 그러나 여기서 하는건 object안의 무언가를 수정하는 것이다(object는 여전히 동일)
                        // 에러는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생한다
                        // 여기서는 player 자체를 업데이트하려고 하면 에러가 발생
```


```JavaScript
console.log(player)
player.lastName = "potato"; // 존재하지 않던 property인데 어떻게 될 까?
console.log(player);        // lastNmae이라는 property가 생성된 걸 확인
                            // 업데이트 뿐만 아니라 원한다면 원하는 어떤 property든 만들 수 있다
```


```JavaScript
console.log(player);
player.points = player.points + 15; // 기존 데이터를 15로 업데이트하는게 아닌 기존 데이터에 15를 더하고 싶다면
console.log(player);
```

## Function

```JavaScript
console.log(player);
player.points = player.points + 15; 
console.log(player);
// console도 object라고 했고 log는 console이라는 object안에 있다고 했다. 그러나 points와 달리 ()가 존재
// 왜 points는 ()가 없을까? => function이 아니기 때문이다, 여기서 points는 숫자
// player에게 function을 주기 전에, 어떻게 function을 만드는지부터 배워보자
```


```JavaScript
// function이 뭘까?
// 내가 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하면 쉽다(1회성이 아님!)
// 어떠한 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해준다
console.log("Hello my name is ivy");
console.log("Hello my name is ivy2");
console.log("Hello my name is ivy3");
console.log("Hello my name is ivy4");
console.log("Hello my name is ivy5");
// 매번 복붙? 역시나 비효율적
// 지금 코드를 예시로 들면 바뀌는 부분은 끝의 이름 뿐임
```
<br>
<br>


###  함수를 생성해보자


```JavaScript
// 함수 생성
// sayHello()를 실행시킬 때 마다 {}안의 코드가 실행된다고 보면 된다
function sayHello(){
     console.log("Hello!");
}

// 함수는 어떻게 실행시킬까?
// console.log(), alert(), array.push() 등등이 그랬듯 ()가 바로 function을 실행하는 방법이다
sayHello();
sayHello();
sayHello();
```

```JavaScript
function sayHello(){
    console.log("Hello my name is ");
}
// 여기서 우리가 할 것은 Hello my name is를 반복적으로 쓰고 뒤의 이름만 바뀌는 것
// 그러기 위해서는 Argument(인자)라는 것을 보내야 함
// argument는 function을 실행하는 어떤 정보를 function에게 보낼 수 있는 방법이다
console.log();  // 아무것도 출력되지 않는다. 왜 그럴까?
                // function 실행버튼은 눌렀지만 아무것도 보내지 않은 것(인자가 없음)
                // function 실행버튼을 누르면서 뭔가를 보내는 법을 알아보자

sayHello("ivy"); // 인자를 넣었지만 인자값이 왜 출력되지 않을까?
                 // 인자를 보내기만 했지 sayHello()는 인자를 받지 못했기 때문
                 // 데이터를 받는 방법은 ()안에 데이터를 추가하면 된다
                 // 이 때, 어떤 name이든 어떤 variable이든 넣어도 된다

function sayHello2(nameOfPerson){
    console.log("Hello my name is", nameOfPerson);
}

sayHello2("ivy");
```


#### argument는 몇개든 받을 수 있다
```JavaScript
// 이 때 nameOfPerson, age, hobby는 {} 즉, 해당 function의 body에만 존재하는 것
// 첫 번째 변수인 nameOfPerson에는 첫 번째 argument의 데이터가 전달... 세 번째 변수 hobby에는 세 번재 argument의 데이터가 전달 된다

function sayHello3(nameOfPerson, age, hobby){
    console.log("Hello my name is", nameOfPerson);
    console.log("I'm ", age);
    console.log("My hobby is", hobby);

}

sayHello3("ivy", 28, "coding")
```

```JavaScript
function plus(a, b){
    console.log(a,b);  // plus()로 인자없이 실행하면 실행결과 undefined
    console.log(a+b);  // plus()로 인자없이 실행하면실행결과 Nan(Not a Number)
}

plus(2, 3);  
plus("apple", 3);
```

```JavaScript
function divide(a, b){
    console.log(a/b);
}

divide(10, 40);
```

```JavaScript
// 우리는 player.sayHello()와 같은 것을 하고 싶다
// object안에 함수를 만드는 방법
// 밖에서 만들때와는 달리 function과 해당 function의 name 위치가 바뀐다
const player = {
    name : "ivy",
    sayHello : function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meey you");
    }
}

console.log(player.name);
player.sayHello("Moon");
player.sayHello(player.name); // player의 name을 인자로 쓸 수도 있음
player.sayHello("sun");
player.sayHello("sky");
```




## Recap

```JavaScript
const a = 5;
let isNicoFat = false;

isNicoFat = true;

// 항상 const를 사용하되 업데이트가 필요할 때 let 사용
// var는 사용하지 않는다!

const b = null; // 값이 비어있음을 표현하기 위해 사용

let hello;
console.log() // undefined => 값이 없다


// 여러 값을 넣고 싶을 때
const days = [a,b,1,2,"apple",null, undefined];

const toBuy = ["potato","pizza","tomato"];
console.log(toBuy);
console.log(toBuy[0]);

toBuy[2] = "water";     // 업데이트
console.log(toBuy);

toBuy.push("banana");   // 추가
console.log(toBuy);
```

```JavaScript
const days2 = ["mon","tue","wed"]  // 같은 종류, 즉 한주의 요일들이라는 걸 알 수 있다
                                   // 하지만 의미가 있는 property를 저장하려고 할 때 문제(연관되어 있는 property들을 그룹으로 묶어서 저장해야 할 때)

const player = {    // player라는 variable안에 name이라는 varialble(정식명칭은 property)를 만든 것
    name : "ivy",
    age : 28,
};


console.log(player, console)
console.log(player.name)    // object에서 item(정확히는 property)를 가져오는 방법

player.name="IVYYY"         // 업데이트
console.log(player)

player.addr = "where"
console.log(player)


function plus(){
    console.log(2+2);
    console.log(2/5);
}

plus;
plus();


function plus2(a, b){
    console.log(a+b);
    console.log(a/b);
}

plus2(20,40);


function minusFive(a){
    console.log(a-5);
}

minusFive(20);


const calculator = {
    plus : function(a,b){
        console.log(a+b);     
    },
    minus : function(a,b){
        console.log(a-b);
    },
    divide : function(a,b){
        console.log(a/b);
    },
    square : function(a,b){
        console.log(a**b);
    }
}

calculator.plus(2,3);
calculator.minus(2,3);
calculator.divide(2,3);
calculator.square(2,3);
```

## Return

#### console.log는 console에 무언가를 log하는 것(기록하여 보여줌)
#### 이제는 console.log가 아닌 function 밖에서 결과값을 얻을 수 있게 진행할 것 

```JavaScript
const calculator = {
    plus : function(a,b){
        alert(a+b);     
    },
    minus : function(a,b){
        alert(a-b);
    },
    divide : function(a,b){
        alert(a/b);
    },
    square : function(a,b){
        alert(a**b);
    }
};

console.log(calculator.plus(2,3)); // alert은 잘 출력되지만 log는 => undefined 왜? => 함수가 return하고 있는 값이 없기때문
```




```JavaScript
const age = 83;

function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;     // 이 결과를 코드로 받고 싶다. 어떻게?
}                           // 함수는 어떤 기능을 수행하는 것이라고 생각하기 보다는
                            // 어떤 일을 수행하고 그 결과를 알려주는 것이라고 생각하자



const krAge = calculateKrAge(age);

console.log(krAge); // krAge가 정의되지 않았음(undefined).. 왜?
                    // return이 없기 때문임



function calculateKrAge2(ageOfForeigner){
    return ageOfForeigner + 2;     // function이 function의 밖과 소통하는 방법
}

const krAge2 = calculateKrAge2(age);

console.log(krAge2);               // 값이 잘 출력되는걸 확인 할 수 있다
```


```JavaScript
const calculator2 = {
    plus : function(a,b){
        return a+b;     
    },
    minus : function(a,b){
        return a-b;
    },
    times : function(a,b){
        return a*b
    },
    divide : function(a,b){
        return a/b;
    },
    power : function(a,b){
        return a**b;
    }
};
```

```JavaScript
const plusResult = calculator2.plus(2,3);              
const minusResult = calculator2.minus(plusResult,10);              // 이런 상호의존적인 코드가 어떻게 가능했을까? return 때문
const timesResult = calculator2.times(10,minusResult);             // 전에는 오직 console에서만 plus의 결과를 알 수 있었지 plus의 결과값을 얻을 수 없었다
const divideResult = calculator2.divide(timesResult, plusResult);  // console은 그냥 보여주기 위한 것일 뿐
const powerResult = calculator2.power(divideResult, minusResult);  // 우리의 코드에서는 결과 값을 알 수 없었음
```

## Conditional(조건문)

- 조건문은 `true`인지 `false`인지 알려준다
- 무언가를 확인해야 할 때 거의 대부분 사용하게 된다
    - 사용자가 로그인되어 있다면, 무언가를 보여준다
    - 사용자가 무언가를 할 때 반응하는 것을 만들 때 등등..키워드는 `if`
```JavaScript
const age = prompt("How old are you?");          // prompt()는 사용자에게 창의 띄울 수 있도록 해준다
                                                 // 이렇게 띄워진 창은 javascript를 일시정지 시킨다(답하기 전까지)
                                                 // 만약 답하지 않고 cancel을 누르면 null값으로 들어감
                                                 // 더 이상 prompt function을 사용하지 않는 이유
                                                 // message가 별로 예쁘지도 않고 아무런 css를 적용할 수 없음(prompt=굉장히 오래된 방법)
console.log(age);

console.log(typeof age);  // 숫자를 입력하든 문자를 입력하든 string으로 받는걸 알 수 있다
                          // 문법이 이상해 보일 수 있지만 javascript가 원래 그럼
                          // console.log(typeof(age))도 가능함
```

#### type을 변경하는 방법
- 이걸위해 만들어져 있는 function이 있음 => `parseInt`
  
```JavaScript
console.log(typeof age, typeof parseInt(age));

// string이면 숫자와 크기 비교를 할 수 가 없지만 type을 number로 변경하면서 가능해짐
// 또한 나이를 물어봤는데, 사용자가 숫자가 아닌 걸 입력했을 경우를 인지할 수 있다
// 문자를 입력시 NaN(Not a Number)이 출력
// 당연한 이야기지만 "1123" 와 같이 문자열로 된 숫자는 parseInt를 통해 숫자로 변경이 가능하기 때문에 괜찮음, "abcdef"같은 문자들은 불가능

console.log(age, parseInt(age));

// 이제 parseInt() 후의 age결과가 number형이 아니라면 message를 띄울 것임
const age2 = parseInt(prompt("How old are you?")); // function은 내부에서부터 외부로 실행됨(prompt가 먼저 실행되고 parseInt가 실행 된다)
console.log(age2);
```


### 무엇이 NaN인지를 판별하는 방법
- isNaN이라는 function이 있다
- 첫 번째 argument(인자)는 숫자여야 한다
- isNaN은 boolean을 return한다

```JavaScript
const age3 = parseInt(prompt("How old are you?")); 
console.log(isNaN(age3)); // return 결과는 false => 즉, NaN이 아니다(여기선 == 숫자)
```


```JavaScript
if(condition){
    // condition === true
} else{
    // condition === false
}

조건문이 참(true)이면 if의 코드가 실행 되고
아니라면(false) else코드가 실행 된다
else는 필수가 아님. 한 가지 조건일 때는 else없이 if만도 사용이 가능! => 이럴 경우 참이면 if문을 실행하고 아니라면 아무것도 하지 않게 된다
condition(조건)자리에는 무엇이 들어가야 할까? 오직 boolean만 들어갈 수 있음 => condition은 boolean으로 판별 가능해야 된다(true or false 오직 두 가지 옵션만이 존재)

if(isNaN(age3)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age");
}
```

```JavaScript
const age3 = parseInt(prompt("How old are you?")); 
console.log(isNaN(age3));                   // 정상적인 숫자를 입력했을 경우 return 결과는 false => 즉, NaN이 아니다(여기선 == 숫자)




if(isNaN(age3) || age3 < 0) {               // || => or(둘 중 하나만 true여도 true)
    console.log("Please write a number");
} else if (age3 < 18) {                     // 좀 더 많은 조건이 필요하다면? else if
    console.log("you are too young");
} else if (age3 >= 18 && age3 <=50) {       // && => and(a,b 두 조건 모두 true여야 true, 나머지는 false)
    console.log("you can drink");    
} else {
    console.log("You can drink, but.. please be careful");
}
```
### AND
- true && true === true     
...나머지 false 


### OR
- true || true  === true
- true || false === true
- false || true === true
- false || false === false



`(같다) ===`

`(같지않다) !==`

```JavaScript
if((a && b) || (c && d) || (x || w)){  // javascript는 작은 괄호부터 시작해서 큰 괄호로 넘어간다
    // a && b 가 true이고 나머지가 false일 때 이 코드가 실행 될까? => 정답은 YES(or니까 하나만 참이여도 참) 
}
```

## The Document  Object

- 자바스크립트를 이용해서 브라우저에 대해 조금 더 이해해보는 시간을 가져보자
- JavaScript를 사용하는 이유는 HTML과 상호작용하기 위해서
- 즉, HTML의 Element들을 JavaScript를 통해 변경하고, 읽을 수 있다는 것
- document는 브라우저에 이미 존재하는 object, 우리가 접근할 수 있는 HTML을 가리키는 객체이다
- JavaScript에서 HTML을 읽어올 뿐만 아니라, HTML을 변경할 수도 있다
- 모든 것들은 document로부터 시작 => 왜냐면 document는 우리의 웹 사이트를 의미함

```JavaScript
const title = document.getElementById("title"); // getElementByIdsms document의 함수이고 document는 HTML을 뜻함

console.log(title);
console.dir(title);

title.innerText="Got you!" // 이게 가능한 이유는 HTML에서 title이라는 id를 부여하고 getElementById라는 함수로 element를 가져왔기 때문
```

```JavaScript
console.log(title.id);
console.log(title.className);

// 대부분의 경우에는 id를 추가하지 않을 거임
// id는 사용하기 편리하지만, 보통 className을 사용하거나 둘 다 사용함
// 대부분의 경우에는 class name을 모든 곳에 추가하지는 않을거임

const hellos = document.getElementsByClassName("hello");
console.log(hellos);



const title = document.getElementsByTagName("h1");
console.log(title);    // title. 으로 접근할 수 없음 title이 object가 아니고 array이기 때문에
```

## Searching For Elements

- 노마드코더에서 추천하는 element를 가지고 오는 멋진 방법은 querySelector, querySelectorAll임
- querySelector는 element를 CSS방식으로 검색할 수 있음
- => hello란 class 내부에 있는 h1을 가지고 올 수 있다는 것을 의미

```JavaScript
const title2 = document.querySelector(".hello h1");     // querySelector에서는 hello가 class name이라는 것(.으로 접근)과 그 안의 h1을 명시해줘야 한다.
console.log(title2)                                     // hello라는 class가 3개 존재하고 각각 h1태그를 가지고 있었지만 첫 번째 것만 가져왔음
                                                        // querySelector는 첫 번째, 하나의 element만 반환하기 때문임
                                                        // 3개 모두 가져오고 싶다면 querySelector가 아니라 querySelectorAll을 써야한다

const title3 = document.querySelectorAll(".hello h1"); 
console.log(title3)
```

#### querySelector을 이용할 때 #id명을 써서 가져올 수도 있음
#### getElementById("id명")과 같은 결과를 가져다 준다
```JavaScript
const title = document.querySelector("#id"); querySelector에서는 내가 뭘 검색하는지 명확하지 않으니까 id(#)을 명시해주는 것
const title = document.getElementById("id"); 이 코드는 당연히 id(#)을 적어줄 필요가 없음, 여기선 내가 id를 찾고 있다는 걸 알기 때문
``` 

#### 두 코드가 하는일은 같지만 querySelector에서는 해당 h1태그 form등을 가져오는 것을 명시해서 가져올 수 있음
#### getElementById는 불가능함
```JavaScript
const title = document.querySelector("#id"); ("#id h1") 혹은 ("#id form")
const title = document.getElementById("id"); */
```


## Event

- HTML코드중.. `<script src="app.js"></script>`
- app.js가 있기 때문에 javascript를 통해 HTML의 내용을 가져올 수 있음
- app.js를 import하지 않았다면, 당연히 document는 여기 존재할 수도 없었음
- point는 document가, HTML이 app.js를 load하기 때문에 존재하는 것



```JavaScript
const title = document.querySelector(".hello");              hello란 class를 가진 element를 하나 가지고 올 수 있음

const title2 = document.querySelectorAll(".hello");          hello란 class를 가진 모든 element를 가져올 수 있음

const title3 = document.querySelector("#hello:first-child"); 위의 두 가지를 섞어서 사용할 수도 있음 ex) #id:first-child 
```
  
```JavaScript
const title = document.querySelector(".hello:first-child h1");
console.log(title);   


const title2 = document.querySelector(".hello:first-child h1");
title2.innerText = "Hello!!";    



const title3 = document.querySelector("div.hello:first-child h1"); // class hello를 가진 div 내부의 first-child인 h1을 찾아라
console.log(title3);
console.dir(title3);  // element의 내부를 보고 싶다면 dir

title3.style.color = "orange"; 
```

```JavaScript
const title = document.querySelector("div.hello:first-child h1");

// addEventListener는 말 그대로 , event를 listen하는 것
title.addEventListener();

// 하지만 자바스크립트에 무슨 event를 listen하고 시은지 알려줘야 한다
title.addEventListener("click");

// 누군가 title을 실제로 click 했을 때 무언가를 해줘야 함
// 함수를 만들거임
function handleTitleClick(){
    console.log("title was clicked");
}

// 정의한 function을 두 번째 인수로 전달
// 이제 click event를 listen하고, 이 click event가 발생하면, handleTitleClick이라는 function이 동작
title.addEventListener("click", handleTitleClick);  // 여기서 중요한건 ()를 넣지 않는 것
                                                    // JavaScript에 function만을 넘겨주고 유저가 click할 경우에 JavaScript가 실행버튼을 대신 눌러주길 바라기 때문에
```


```JavaScript
const title2 = document.querySelector(".hello h1");

title2.innerText = "Click Me!!";
title2.style.color = "orange";

function handleTitleClick2(){
    console.log("title was clicked");
}

title2.addEventListener("click", handleTitleClick2);
```