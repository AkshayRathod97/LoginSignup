const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

function loginPress(){
    var data = document.getElementById("loginForms")
    loginId = data.elements['loginId'].value;
    password = data.elements['password'].value;
    if(localStorage.getItem(loginId) == password){
        alert("credentials valid !!")
    }
    else {
        alert("invalid credentials, Sign Up first !!!")
    }    
    return false;
}

function signUpPress(){
    var data = document.getElementById("signupForms")
    loginId = data.elements['inputLoginId'].value;
    password = data.elements['inputPassword'].value;
    localStorage.setItem(loginId,password)
    alert("Onboarded !!!")
    return false;
}