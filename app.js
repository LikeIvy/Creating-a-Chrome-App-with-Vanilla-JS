// 내가 listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름(예를 들어 h1)을
// Mozilla Developer Network인 MDN에 검색해보는 것
// 지금 하고있는 것들은 JavaScript로 HTML element를 가져오고, 가져온 element에 event listener을 추가해 주는 것

const h1 = document.querySelector(".hello:first-child h1");


function handleTitleClick(){
    h1.style.color = "blue";     // 이 코드의 경우 잘못된것은 없다.                                   
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

// 3가지의 event가 발생하고
// JavaScript가 이 3가지의 function을 조작해준다
// 우리가 직접 실행시킨 것은 없음(function의 실행버튼인 ()를 쓰지 않았음)
// JavaScript에 뭘 할지 알려주고 JavaScript는 그걸 수행함
h1.addEventListener("click", handleTitleClick);      // 클릭 감지(JavaScript에게 누군가 h1을 클릭하면 handleTitleClick을 실행하라고 이야기 해준것)
h1.addEventListener("mouseenter", handleMouseEnter); // 마우스가 위치한 것을 감지
h1.addEventListener("mouseleave", handleMouseLeave); // 마우스가 해당 위치 벗어난 것을 확인


/* // event 사용에는 두 가지 방법이 있다

// 첫 번째는 지금까지 사용했던 addEventListener()
title.addEventListener("click", handleTitleClick);

// 두 번째는 title.onclick()
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave; */

// 하지만, 노마드코더에서 addEventListener를 더 추천하는 이유는
// 나중에 removeEventListener를 통해서 event listener를 제거할 수 있기 때문




//document가 JavaScript에서 기본적으로 제공되듯이 window도 기본적으로 제공 된다
window.addEventListener("resize", handleWindowResize); // 화면 크기 변화 감지
window.addEventListener("copy", handleWindowCopy);     // copy 감지
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);
