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


#### 내가 listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름(예를 들어 h1)을 Mozilla Developer Network인 MDN에 검색해보는 것

- 지금 하고있는 것들은 JavaScript로 HTML element를 가져오고, 가져온 element에 event listener을 추가해 주는 것이다

```JavaScript
const h1 = document.querySelector(".hello:first-child h1");


function handleTitleClick(){
    h1.style.color = "blue";        // 이 코드의 경우 잘못된것은 없다.                                   
}                                   // 하지만 대부분의 경우에 style을 변경하는 것은 CSS를 통해서 변경되어야 한다
                                    // 다음 회차에서는 CSS를 다뤄볼 것

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}       // 헷갈림 방지 위해 기존 title변수를 h1으로 바꿨는데 바뀌기 전으로 가정하고
        // 만약 document.title로 접근한다면 우리가 원하는 h1이 아닌 <title></title>에 접근할 것임
        // document 밑으로 h1, div같은 것들은 가져올 수 없음
        // body, head, title같은 중요한 element들만 가능
        // 나머지 element들은 querySelector, getElementBYId등으로 찾아와야 함

function handleWindowCopy(){
    alert("copier!!");
}

function handleWindowOffline(){
    alert("SOS no WIFI!!");
}

function handleWindowOnline(){
    alert("GOOD");
}
```


- event가 발생하고
- JavaScript가 위의 function을 조작해준다
- 우리가 직접 실행시킨 것은 없음(function의 실행버튼인 ()를 쓰지 않았음)
- JavaScript에 뭘 할지 알려주고 JavaScript는 그걸 수행함

```JavaScript
h1.addEventListener("click", handleTitleClick);      // 클릭 감지(JavaScript에게 누군가 h1을 클릭하면 handleTitleClick을 실행하라고 이야기 해준것)
h1.addEventListener("mouseenter", handleMouseEnter); // 마우스가 위치한 것을 감지
h1.addEventListener("mouseleave", handleMouseLeave); // 마우스가 해당 위치 벗어난 것을 확인
```

```JavaScript
// event 사용에는 두 가지 방법이 있다

// 첫 번째는 지금까지 사용했던 addEventListener()
title.addEventListener("click", handleTitleClick);

// 두 번째는 h1.onclick()
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

하지만, 노마드코더에서 `addEventListener`를 더 추천하는 이유는
나중에 removeEventListener를 통해서 event listener를 `제거`할 수 있기 때문
```


```JavaScript
//document가 JavaScript에서 기본적으로 제공되듯이 window도 기본적으로 제공 된다
window.addEventListener("resize", handleWindowResize);      // 화면 크기 변화 감지
window.addEventListener("copy", handleWindowCopy);          // copy 감지
window.addEventListener("offline", handleWindowOffline);    // wifi 끊김 감지
window.addEventListener("offline", handleWindowOnline);     // wifi 연결 감지
```


## CSS in JavaScript

```JavaScript
const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue";
    }
}


h1.addEventListener("click", handleTitleClick);
```

```JavaScript
// h1.style.color를 여러번 호출하기 보다는
// 좀 더 코드를 보기 좋게 만들어 보자
// 우선, 이 color 상태를 저장 해보자

function handleTitleClick(){
    const currentColor = h1.style.color;  // getter로서 최근 color값을 복사하는 역할을 한다
    let newColor;                         // setter로서 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 한다
    if(currentColor === "blue"){          // 때문에 의미론적으로 봤을 대 currentColor를 const로, newColor를 let으로 할당한 것
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
```
### JavaScript는 animation에 적합
### CSS는 style작업에 적합하다


```JavaScript
// style.css에 active라는 class를 생성한 상황
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.className = "active";    // h1에 active class 전달
                                // 이 h1.className은 getter이면서 setter다
}                               
    

h1.addEventListener("click", handleTitleClick);

```


```JavaScript
const h1 = document.querySelector("div.hello:first-child h1")
function handleTitleClick(){    
    console.log(h1.className);   // 무슨말이냐면, 만약 console.log로 h1.className을 출력한다면 className의 현재 값을 얻게 된다
}                                // 이 상태에선 당연하게도 아무것도 출력되지 않음
                                 // 개발자 도구에서 h1태그에 class name을 추가해 준다면 class name이 출력되는걸 확인할 수 있음
                                 // 즉, 현재의 class를 얻어올 수 있지만 class를 변경할 수도 있다!                 
      

h1.addEventListener("click", handleTitleClick);
```


```JavaScript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    if(h1.className === "active"){    // 여전히 개선의 여지가 있는 코드임(개선을 위한 두 가지 방법이 있음)
        h1.className = "";            // 코드를 깔끔하게 하는 한 가지 방법은 다음 회차에서
    } else {                          // 지금 나머지 한 가지 방법을 해볼거임
        h1.className = "active";      // 지금 코드를 보면 active라는 string을 두 번 사용하고 있다
    }                                 // 이것은 error의 위험이 있다(오타로 인한 에러가 생각보다 굉장히 자주 발생)
}                                     // active라고 style.css에서 class name을 정의했는데 이런 걸 raw value라고 함(개발자가 이렇게 적겠다고 선택한 것)

h1.addEventListener("click", handleTitleClick);
```


```JavaScript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const activeClass = "active"            // 변수를 하나 생성함으로써 오탈자의 위험을 줄이고
    if(h1.className === "activeClass"){     // 잘못된 변수명을 입력하게 되면 JavaScript가 에러 메시지를 띄워주니 관리가 훨씬 쉬워짐
        h1.className = "";            
    } else {                          
        h1.className = "activeClass";     
    }                                 
}                                     

h1.addEventListener("click", handleTitleClick);
```
## 현재 문제점

- 지금 한 가지 문제점이 있는데 지금은 h1이 기존에 class를 갖고있지 않았기 때문에 class name을 추가하고 공백으로 만들어 없애는게 문제가 되지 않았지만
- 만약 h1태그가 class를 갖고있었다면? => 기존 class를 유지하지 못하고 지워버리게 되기때문에 문제가 됨
- 물론 위의 함수를 예시로 내부에 `const activeClass = "active 기존클래스이름" `으로 설정하여 유지할 순 있지만
좋지못한 방법이다
- 왜냐하면 html에서 이걸 조금만 변경(class를 추가한다던지..)한다면 JavaScript는 물론이고 CSS까지 업데이트 해줘야 된다
- 좋은 방법은 JavaScript로 모든 class name을 변경하게 하지 않는 것
- 즉, 기존 class가 있다면 기존 class를 유지하면서 active class를 변경하는 것


### 나머지 한 가지 방법, `classList`를 사용하는 방법 
### classList는 말 그대로, 우리가 class들의 목록으로 작업할 수 있게끔 허용해준다

```JavaScript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const activeClass = "active"           
    if(h1.classList.contains(activeClass)){     // classList는 유용한 function들이 있는데 그 중 하나가 contains
        h1.classList.remove(activeClass)        // contains는 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다(classList가 activeClass를 포함하고 있는지 확인)
    } else {                                    // 여기서 우리가 하는건, HTML element가 가지고 있는 또 하나의 요소를 사용하는 것(classList)
        h1.classList.add(activeClass);          // classList를 살펴보면 element의 class 내용물을 조작하는 것을 허용하는 것을 알 수 있다
    }                                 
}                                     

h1.addEventListener("click", handleTitleClick);
```

- 위의 과정들은 개발자들이 아주 흔하게 하는 작업들이다
- 때문에 좀 더 편리한 function이 존재하므로 이용해보자
- toggle => class name이 존재하는지 확인한다 
- => 만약 class name이 존재한다면 toggle은 class name을 제거할 것
- => 만약 class name이 존재하지 않는다면 toggle은 class name을 추가할 것

```JavaScript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("active");  // 지금은 string을 반복할 일이 없어서 변수 지웠음(반대로 말하면 string을 반복하는 순간 const를 생성해야 할 순간이다)
}                                   // 단 한줄로 위와 같은 효과
                                    // toggle은 h1의 classList에 active가 이미 있는지 확인 해서
                                    // 있다면 active를 classList에서 제거, 없다면 active를 classList에 추가
                                    // 간단한 예시로 스마트폰에 잠긴 lock버튼을 누르면 스크린을 잠그고 다시 한번 누르면 스크린을 켜주는 버튼과도 같다
h1.addEventListener("click", handleTitleClick);
```
# LOGIN

## Input Values


#### login-form이라는 id를 우선 찾고
```JavaScript
// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
```


#### 그 안에서 input과 button을 찾았다
```JavaScript
// loginForm은 HTML element이므로, HTML element 안을 바로 검색 가능하다
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
```


#### 코드를 줄여보자
```JavaScript
// 이렇듯 document 또는 하나의 element를 통해서 검색이 가능하다
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
```


```JavaScript
function onLoginBtnClick(){
    console.log(loginInput);
    console.log("Click");
}

loginButton.addEventListener("click", onLoginBtnClick);
```


```JavaScript
// value를 통해 input의 내용을 가져올 수 있다
function onLoginBtnClick(){
    console.log(loginInput.value);
}
```

## Form Submission


- user가 이름을 입력했을 때만 button을 클릭할 수 있게 하고 싶다
- user의 유효성을 검사해 보자(비어있거나, 너무 길거나 등등..)
- 항상 user가 입력하는 값의 유효성을 확인하는 건 좋은 습관이다


```JavaScript
// app.js
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        console.log("Please write your name");
    } else if(username.length > 15){
        alert("Your name is too long");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
```


- 위의 방법은 JS만으로 작업 시에는 위 처럼 해야겠지만 그게 아니라면, 브라우저 자체의 기능을 사용할 수도 있다
- 항상 최고의 tool을 사용해야하고, 이미 가지고 있는 기능들을 사용하는게 좋다
- 가능하다면 JavaScript에서 구현하지 않고 HTML의 기본 속성을 이용할 수 있다면 최대한 이용하자!
<br>
<br>
<br>

```html
// index.html
<div id="login-div">
        <input 
        required        // input을 필수입력 항목으로 만들어준다
        maxlength="15"  // input자체적으로 최대 글자수를 15로 조절할 수도 있다
        type="text"     // 이런 식으로 HTML이 이미 우리를 위한 작업을 도와줄 수 있음, 이런 이점을 잘 활용하자
        placeholder="What  is your name?"   
        />
        <button>Log In</button>  
</div>                           // 그러나 문제는 Log In을 클릭할 때 HTML에서 확인 작업을 안 하고 있다
<script src="app.js"></script>   // 그 이유는 div부분이 form이 아니기 때문
                                 // input의 유효성 검사를 작동시키기 위해서는 input이 form안에 있어야 된다
```


```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Momentum App</title>
</head>
<body>
    <form id="login-form">
        <input 
        required
        maxlength="15"
        type="text" 
        placeholder="What  is your name?"
        />
        <button>Log In</button>
    </form>
    <script src="app.js"></script>
</body>
</html> 
```


```JavaScript
// app.js
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);    // username을 아직 받는다는 걸 확인하기 위해서 console.log(username)만 남겨준다
}                             
loginButton.addEventListener("click", onLoginBtnClick);
```
<br>
<br>


- html에서 button을 없애고 input type을 submint, value값에 Log In을 넣는다
- html요소에 submit을 넣었기 때문에 더 이상 addEventListener가 필요없어 진다(입력 후 클릭이 아닌 엔터를 눌러도 form은 submit되기 때문)
- 웹페이지를 확인해보면 값을 입력하고 버튼을 누르면, 새로고침이 실행되면서 값이 사라져 버린다
- `form`이 `submit`되고 있기 때문이다(새로고침)


```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Momentum App</title>
</head>
<body>
    <form id="login-form">
        <input 
        required
        maxlength="15"
        type="text" 
        placeholder="What  is your name?"
        />
        <input type="submit" value="Log In"/>  
    </form>
    <script src="app.js"></script>
</body>
</html>
```



## Events

- input을 form안에 넣었을 경우에는 엔터를 누를 때마다 form은 자동적으로 submit되고 있음
- 이건 우리가 원하는게 아님, 왜냐면 form이 submit될 때마다 페이지가 새로고침 되기 때문
- 이제 우리는 브라우저가 새로고침하지 않고 user정보를 저장하도록 하고 싶다
- form이 submit되는걸 막아보자



#### submit이라는 event가 발생하는 걸 아예 막거나 중간에 개입해서 submit event가 발생했다는 걸 파악하고 싶음


```JavaScript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- form안에 있는 input의 버튼을 누르거나, enter를 누르면 submit될 때마다 페이지가 새로고침 된다
- 브라우저가 기본적으로 그렇게 설계되어 있기 때문
- 이런 브라우저의 기본 행동을 Browser default라고 부른다
- 이것을 막는게 `preventDefault`
<br>
<br>
<br>
<br>


```JavaScript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){         // event가 아닌 tomato등 아무 이름을 써도 상관은 없으나 event로 쓰는게 관례      
    event.preventDefault();            // event object는 preventDefault함수를 기본적으로 갖고 있음
    console.log(loginInput.value);     // preventDefault함수는 브라우저가 기본 동작을 실행하지 못하게 막는다
}

 
loginForm.addEventListener("submit", onLoginSubmit);    // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
                                                        // 그러나, 사실 submit됐다고 함수를 그냥 실행시키는 것이 아니라 event라는 파라미터를 넣어주고 나서 실행되는 것
                                                        // 즉 => JS는 onLoginSubmit함수 호출시 사실 인자를 담아서 호출하며
                                                        // 해당 인자(event object)는 submit, click등의 event가 발생한 시점의 상황에 대한 기본 정보를 갖고 있다( 누가 submit주체인지, 몇 시에 submit을 했는지 등등..)
```
<br>
<br>


```html
// index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Momentum App</title>
</head>
<body>
    <form id="login-form">
        <input 
        required
        maxlength="15"
        type="text" 
        placeholder="What  is your name?"
        />
        <input type="submit" value="Log In"/>
    </form>
    <a href="https://nomadcoders.co">Go to courses</a>    // test를 위해 링크 추가
    <script src="app.js"></script>
</body>
</html>
```


```JavaScript                                                        
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


const link = document.querySelector("a")

function onLoginSubmit(event){          
    event.preventDefault();         // 링크를 클릭해도 넘어가지지 않는걸 확인
    console.log(loginInput.value);    
}

loginForm.addEventListener("submit", onLoginSubmit);
```


```JavaScript
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

link.addEventListener("click", handleLinkClick);    // addEventListener안에 있는 함수는 직접 실행하지 않는다는 것을 기억(계속 반복할 만큼 중요한 부분이다) 
```
### 요약

- addEventListener 안에 있는 함수는 직접 실행하지 않고, 브라우저가 실행
- 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다
- addEventListener의 함수에서 object에 대한 자리만 할당해주면
- 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다
- 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다
<br>
<br>


## Getting Username

- 로그인 후 form 자체가 사라져야 함
- 방법 1 : HTML 요소 자체를 없애는 것
- 방법 2 : CSS를 이용
- 방법2를 사용, CSS를 이용한 방법으로 CSS에 hidden이라는 class를 만들어 보자 


```JavaScript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // 두 개 이상 쓰이기 때문에 변수로 만들었음
                                    // 근데 왜 대문자?
                                    // 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다
                                    // 그리고 loginForm이나 loginInput처럼 중요한 정보를 담은게 아니라서 대문자로 작성

function onLoginSubmit(event){          
    event.preventDefault();                         // 기본 동작은 실행되지 않도록 막아주고
    loginForm.classList.add(HIDDEN_CLASSNAME);      // hidden이라는 class name을 더해줘서 form을 숨기고
    const username = loginInput.value;              // user의 이름을 변수로 저장해주고, 그 이름은 h1안에 넣어줄거임
    //greeting.innerText = "Hello " + username;     // 변수와 string을 합치거나, 변수를 string안에 포함시키는 다른 방법
    greeting.innerText = `Hello ${username}`;       // ${변수명}, ``(백틱)
    greeting.classList.remove(HIDDEN_CLASSNAME);                  
}

loginForm.addEventListener("submit", onLoginSubmit);
```
<br>
<br>


## Saving Username

- 매번 user의 이름을 물을수는 없다
- 새로고침 해도 user의 이름이 남아있을 수 있게 저장해보자
- local storage라는 API가 있다 => 우리가 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능


```JavaScript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  
                                    
                              
                                  

function onLoginSubmit(event){          
    event.preventDefault();                      
    loginForm.classList.add(HIDDEN_CLASSNAME);      
    const username = loginInput.value;              
    localStorage.setItem("username", username);    
    greeting.innerText = `Hello ${username}`;      
    greeting.classList.remove(HIDDEN_CLASSNAME);                  
}

loginForm.addEventListener("submit", onLoginSubmit);
```
<br>
<br>




## Loading Username

- form을 보여주기 전에, 그리고 addEventListener를 하기 전에 체크를 해줘야 한다
- local storage가 비어 있으면 form부터 보여주고 그대로 진행하면 된다
- 하지만 local storage에 유저정보가 있으면 form을 보여줄게 아니라 h1 요소를 보여줘야 한다
- 그렇다면 우선 할 일은, local storage에 유저정보 유무를 확인하는 것


```JavaScript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  
const USERNAME_KEY = "username";                                 

function onLoginSubmit(event){          
    event.preventDefault();                        
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    const username = loginInput.value;             
    localStorage.setItem(USERNAME_KEY, username);   
    greeting.innerText = `Hello ${username}`;     
    greeting.classList.remove(HIDDEN_CLASSNAME);                  
}




const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Momentum App</title>
</head>
<body>
    <form class="hidden" id="login-form">   // if와 상관없이 form이 보이는 상태였기 때문에
        <input                              // form 태그에도 hidden을 추가해서 form과 greeting 모두 숨긴 채로 시작하게 만든다
        required
        maxlength="15"
        type="text" 
        placeholder="What  is your name?"
        />
        <input type="submit" value="Log In"/>
    </form>
    <h1 id="greeting" class="hidden"></h1>
    <script src="app.js"></script>
</body>
</html>
```
<br>
<br>



- 중복되고 있는 코드를 함수로 만들어서 코드를 간결하게 해보자
```JavaScript
// 중복코드
greeting.innerText = `Hello ${savedUsername}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
```


```JavaScript
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


function onLoginSubmit(event){          
    event.preventDefault();                        
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    const username = loginInput.value;             
    localStorage.setItem(USERNAME_KEY, username);   
    paintGreetings(username);                  
}


const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
```

```JavaScript
// 코드를 이렇게 수정해볼 수도 있음
// paintGreeting의 인자를 받을 필요가 없어짐
// localStorage를 두번 열어야 한다는 단점?이 있음


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";  
const USERNAME_KEY = "username";                                 


function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


function onLoginSubmit(event){          
    event.preventDefault();                        
    loginForm.classList.add(HIDDEN_CLASSNAME);            
    localStorage.setItem(USERNAME_KEY, loginInput.value);   
    paintGreetings();                  
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
```


# CLOCK

## Intervals

- interval이란 '매번' 일어나야 하는 무언가를 말한다
- ex) '매 2초'라고 한다면 이게 interval
- 매 2초마다 무슨 일이 일어나게 하고 싶다 => 이럴 때 쓰는게 interval
- JavaScript에는 이러한 기능이 내장되어 있음
- 예를 들어 서버가 매 2초마다 주식 시장 api를 확인해야 한다든지 등의 일을 수행하기 위해 쓰임
- 이러한 기능을 제공하는 tool이 바로 setInterval()


```JavaScript
const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval은 두 개의 인자를 받는다
// 첫 번째는 내가 실행하고자 하는 function
// 두 번째는 호출되는 function 간격을 몇 ms(milliseconds)로 할 지 쓰면 된다

setInterval(sayHello, 5000);
```

```JavaScript
const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}
// 일정 시간 뒤에 실행되도록 하는 함수
setTimeout(sayHello, 5000);
```


## Timeouts and Dates

```JavaScript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 1초를 기다렸다 보여주기 때문에 시간을 바로 보여주지 않음, 따라서 getClock()을 통해 website가 로드되자마자 getClock()을 실행하고 매초마다 다시 실행되도록 한다
setInterval(getClock, 1000);
```
<br>
<br>

- 1~9초까지는 한 자리수로 나오는 상황
- 두 자리 수로 나오게 하고 싶음
- 길이가 1인 문자가 있을 경우 `padStart()`를 써서 padding을 추가
- `"1".padStart(2,"0")` 문자열 길이가 2가 되게하고 부족하다면 앞쪽에 "0"을 추가해라
- 앞쪽에 채우는 이유는 padStart()를 썼기 때문, 뒤쪽에 채우는 padEnd()도 있음

```JavaScript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();                                      // Date object는 호출 당시의 현재 날짜랑 시간을 알려준다
    const hours = String(date.getHours()).padStart(2, "0")        // getHours()...second는 결과가 number이기 때문에 padStart를 쓸 수 없다 
    const minutes = String(date.getMinutes()).padStart(2, "0")    // 문자열로 변환 후 padStart() 가능
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();                     // 1초를 기다렸다 보여주기 때문에 시간을 바로 보여주지 않음, 따라서 getClick()을 통해 website가 로드되자마자 getClock()을 실행하고 매초마다 다시 실행되도록 한다
setInterval(getClock, 1000);    // 1000ms 즉, 1초마다 getClock함수 반복 실행
```


# QUOTES AND BACKGROUND


## Quotes

```JavaScript
// quotes.js

const quotes = [
    {
        quote : "준비하지 않은 자는 기회가 와도 소용없다",
        author : "알렉시스 드 토크빌"
    },
    {
        quote : "노력에 집착하라. 숙명적인 노력을",
        author : "레오나르도 다 빈치"
    }, 
    .......
];
```

```html
// index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" />
    <title>Momentum App</title>
</head>
<body>
    <form class="hidden" id="login-form">
        <input 
        required
        maxlength="15"
        type="text" 
        placeholder="What  is your name?"
        />
        <input type="submit" value="Log In"/>
    </form>
    <h1 id="greeting" class="hidden"></h1>
    <h2 id="clock">00:00</h2>
    <div id="quote">
        <span>
            
        </span>
        <span>
            
        </span>
    </div>
    <script src="js/greetings.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/clock.js"></script>
</body>
</html>
```




```JavaScript
// quotes.js

// randomness(무작위성)에 대해 알아보자
// 우리는 첫 번째로 Array 안에 있는 element에 어떻게 접근할지 생각해봐야 한다

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


console.log(quotes[0]);    // 첫 번째 element
console.log(quotes[10-1]); // 마지막
```
<br>
<br>


#### 랜덤하게 화면에 출력하고싶은데 어떻게 구현할까?
- `Math module` => JavaScript에서 이미 load되어 제공되고 있다
- Math에는 여러 유용한 function들이 존재하는데 그 중 하나가 `random()`  => Math.random()
- random()은 0부터 1사이의 랜덤한 숫자를 제공한다
- Math.random() * 10; => 10을 곱하여 0~10 사이의 숫자들을 얻을 수 있게 된다
- 그러나 결과로 나오는 숫자들은 Integer(정수)가 아니다, 소수점을 가진 `float`으로 결과값이 나옴
- 해결하기 위한 function 세 가지가 있음
- `round()` => 반올림
- `ceil()` => 올림 1.01 => 2
- `floor()` => 내림 1.9 => 1
- floor을 사용해보자
- Math.floor(Math.random() * 10);

```JavaScript
// quotes.js

// 그러나 여기선 10으로 하드코딩을 했지만, 만약 명언이 10개가 아니라면 문제가 생김
console.log(quotes[Math.floor(Math.random() * 10)]); 


// Array의 길이를 알아내서 적용해보자
console.log(quotes[Math.floor(Math.random() * quotes.length)]); 


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```


## Background

```JavaScript
// background.js

const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// 이번엔 JavaScript를 이용해서 html에서 무언가를 가져왔던 것과는 달리 반대로 추가해볼거임
// 다시 말해 html을 먼저 작성하고 JavaScript를 통해 작성한 html을 다뤄왔지만
// JavaScrip에서 무언가를 생성하고 그걸 html에 추가해보자

/* const bgImage = document.createElement("img");
console.log(bgImage); // <img>태그가 출력되는 걸 확인할 수 있음 */


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);

// appendChild()를 이용해 body에 html을 추가하자(가장 뒤에 추가)
// prepend도 있는데  append와는 반대로 가장 위에 위치하게 됨
document.body.appendChild(bgImage);
```