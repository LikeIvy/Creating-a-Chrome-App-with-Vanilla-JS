/* // 나머지 한 가지 방법, classList를 사용하는 방법 
// classList는 말 그대로, 우리가 class들의 목록으로 작업할 수 있게끔 허용해준다

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


================================================ */

// 위의 과정들은 개발자들이 아주 흔하게 하는 작업들이다
// 때문에 좀 더 편리한 function이 존재하므로 이용해보자
// toggle => class name이 존재하는지 확인한다 
// => 만약 class name이 존재한다면 toggle은 class name을 제거할 것
// => 만약 class name이 존재하지 않는다면 toggle은 class name을 추가할 것

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("active");  // 지금은 string을 반복할 일이 없어서 변수 지웠음(반대로 말하면 string을 반복하는 순간 const를 생성해야 할 순간이다)
}                                   // 단 한줄로 위와 같은 효과
                                    // toggle은 h1의 classList에 active가 이미 있는지 확인 해서
                                    // 있다면 active를 classList에서 제거, 없다면 active를 classList에 추가
                                    // 간단한 예시로 스마트폰에 잠긴 lock버튼을 누르면 스크린을 잠그고 다시 한번 누르면 스크린을 켜주는 버튼과도 같다
h1.addEventListener("click", handleTitleClick);