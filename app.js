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
