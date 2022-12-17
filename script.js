let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('password');
let button=document.getElementById('btn');
let message1=document.getElementById('message1');
let message2=document.getElementById('message2');

passwordInput.addEventListener('change',validation)

function validation(){
    let email=emailInput.value;
    let password=passwordInput.value;
    
    if(email !="" && email.length >3 && email.includes("@") && email.includes(".") ){
        if(password !="" && password.length >8){
            alert("Email & password valid")
            message2.innerText="All good to go!";
            message2.style.color="green";
        }
    }
    else{
        message1.innerText="Make sure email is more than 3 characters and has @ and .";
        message1.style.color="red";
        message2.innerText="Make sure Password is more than 8 characters";
        message2.style.color="red";
        alert("Email or password invalid")
    }
}