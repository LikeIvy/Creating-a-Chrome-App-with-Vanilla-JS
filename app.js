// HTML코드중..<script src="app.js"></script>
// app.js가 있기 때문에 javascript를 통해 HTML의 내용을 가져올 수 있음
// app.js를 import하지 않았다면, 당연히 document는 여기 존재할 수도 없었음
// point는 document가, HTML이 app.js를 load하기 때문에 존재하는 것



/* 
const title = document.querySelector(".hello");              hello란 class를 가진 element를 하나 가지고 올 수 있음

const title2 = document.querySelectorAll(".hello");          hello란 class를 가진 모든 element를 가져올 수 있음

const title3 = document.querySelector("#hello:first-child"); 위의 두 가지를 섞어서 사용할 수도 있음 ex) #id:first-child 
*/
  

/* const title = document.querySelector(".hello:first-child h1");
console.log(title);   


const title2 = document.querySelector(".hello:first-child h1");
title2.innerText = "Hello!!";    



const title3 = document.querySelector("div.hello:first-child h1"); // class hello를 가진 div 내부의 first-child인 h1을 찾아 와라
console.log(title3);
console.dir(title3);  // element의 내부를 보고 싶다면 dir

title3.style.color = "orange"; */

//========================================================//
const title = document.querySelector("div.hello:first-child h1");

// addEventListener는 말 그대로 , event를 listen하는 것
//title.addEventListener();

// 하지만 자바스크립트에 무슨 event를 listen하고 시은지 알려줘야 한다
//title.addEventListener("click");

// 누군가 title을 실제로 click 했을 때 무언가를 해줘야 함
// 함수를 만들거임
function handleTitleClick(){
    console.log("title was clicked");
}

// 정의한 function을 두 번째 인수로 전달
// 이제 click event를 listen하고, 이 click event가 발생하면, handleTitleClick이라는 function이 동작
title.addEventListener("click", handleTitleClick);  // 여기서 중요한건 ()를 넣지 않는 것
                                                    // JavaScript에 function만을 넘겨주고 유저가 click할 경우에 JavaScript가 실행버튼을 대신 눌러주길 바라기 때문에


const title2 = document.querySelector(".hello h1");

title2.innerText = "Click Me!!";
title2.style.color = "orange";

function handleTitleClick2(){
    console.log("title was clicked");
}

title2.addEventListener("click", handleTitleClick2);