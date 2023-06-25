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