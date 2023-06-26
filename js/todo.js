// 문제점
// 1. local storage를 보면 잘 저장되고 있으나 새로고침 후 저장된 toDo들이 화면에 출력되지 않음
// 2. 새로고침 이후에 새로운 toDo를 입력하면 기존에 저장되어 있던 toDo들은 초기화 됨
// 3. 단순 텍스트가 아닌 array로 저장하고싶음

// 브라우저가 가지고 있는 기능중 JavaScript object나, array 등 어떤 것이든 string으로 바꿔주는 기능이 있음
// JSON.stringify()


const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");      
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));  // local storage를 확인해보면 ["a","b"...] array 형태로 저장되는걸 확인할 수 있다
}                                                          // 물론 아직까지는 새로고침 후 toDos 입력시 덮어쓰고 있는 상태


function deleteTodo(event) {
    const li = (event.target.parentElement);   
    li.remove();                               
}                                               
                                                

function paintTodo(newTodo) {                     
    const li = document.createElement("li");       
    const span = document.createElement("span"); 
    span.innerText = newTodo;                     
    const button = document.createElement("button");
    button.innerText = "❌";   
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);       
    li.appendChild(button);                           
    toDoList.appendChild(li);                
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();              
}                                       

toDoForm.addEventListener("submit", handleToDoSubmit);

