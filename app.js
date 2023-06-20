
/* console.log(player);
player.points = player.points + 15; 
console.log(player);
// console도 object라고 했고 log는 console이라는 object안에 있다고 했다. 그러나 points와 달리 ()가 존재
// 왜 points는 ()가 없을까? => function이 아니기 때문이다, 여기서 points는 숫자
// player에게 function을 주기 전에, 어떻게 function을 만드는지부터 배워보자 */



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


// 함수를 생성해보자
// sayHello()를 실행시킬 때 마다 {}안의 코드가 실행된다고 보면 된다
// 함수는 어떻게 실행시킬까?
// console.log(), alert(), array.push() 등등이 그랬듯 ()가 바로 function을 실행하는 방법이다
function sayHello(){
     console.log("Hello!");
}

sayHello();
sayHello();
sayHello();


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


// argument는 몇개든 받을 수 있음
// 이 때 nameOfPerson, age, hobby는 {} 즉, 해당 function의 body에만 존재하는 것
// 첫 번째 변수인 nameOfPerson에는 첫 번째 argument의 데이터가 전달... 세 번째 변수 hobby에는 세 번재 argument의 데이터가 전달 된다

function sayHello3(nameOfPerson, age, hobby){
    console.log("Hello my name is", nameOfPerson);
    console.log("I'm ", age);
    console.log("My hobby is", hobby);

}

sayHello3("ivy", 28, "coding")


function plus(a, b){
    console.log(a,b);  // plus()로 인자없이 실행하면 실행결과 undefined
    console.log(a+b);  // plus()로 인자없이 실행하면실행결과 Nan(Not a Number)
}

plus(2, 3);  
plus("apple", 3);


function divide(a, b){
    console.log(a/b);
}

divide(10, 40);

// 우리는 player.sayHello()와 같은 것을 하고 싶다
// object안에 함수를 만드는 방법
// 밖에서 만들때와는 달리 function과 해당 function의 name 위치기 바뀜
const player = {
    name : "ivy",
    sayHello : function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meey you");
    }
}

console.log(player.name);
player.sayHello("Moon");
player.sayHello("ivy");
player.sayHello("sun");
player.sayHello("sky");
