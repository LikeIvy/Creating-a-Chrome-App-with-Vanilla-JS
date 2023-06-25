// 1~9초까지는 한 자리수로 나오는 상황
// 두 자리 수로 나오게 하고 싶음
// 길이가 1인 문자가 있을 경우 padStart()를 써서 padding을 추가
// `"1".padStart(2,"0")` 문자열 길이가 2가 되게하고 부족하다면 앞쪽에 "0"을 추가해라
// 앞쪽에 채우는 이유는 padStart()를 썼기 때문, 뒤쪽에 채우는 padEnd()도 있음


const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")        // getHours()...second는 결과가 number이기 때문에 padStart를 쓸 수 없다 
    const minutes = String(date.getMinutes()).padStart(2, "0")    // 문자열로 변환 후 padStart() 가능
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 1초를 기다렸다 보여주기 때문에 시간을 바로 보여주지 않음, 따라서 getClick()을 통해 website가 로드되자마자 getClock()을 실행하고 매초마다 다시 실행되도록 한다
setInterval(getClock, 1000);