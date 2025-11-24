const inputPassword = document.getElementById("password");
const inputPasswordConf = document.getElementById("password-conf");
const inputEmail = document.getElementById("email");
const inputEmailConf = document.getElementById("email-conf");

inputPassword.addEventListener("input", updateValidity);
inputPasswordConf.addEventListener("input", updateValidity);
inputEmail.addEventListener("input", updateValidity);
inputEmailConf.addEventListener("input", updateValidity);

function updateValidity(event){
    let target = event.currentTarget;

    if(target.id.includes("password")){
        if(inputPassword.value !== inputPasswordConf.value && inputPassword.value !== "" && inputPasswordConf.value !== "")
            inputPasswordConf.setCustomValidity("Passwords don't match!");
        else
            inputPasswordConf.setCustomValidity("");
    }
    else if (target.id.includes("email")){
        if(inputEmail.value !== inputEmailConf.value && inputEmail.value !== "" && inputEmailConf.value !== "")
            inputEmailConf.setCustomValidity("Emails don't match!");
        else
            inputEmailConf.setCustomValidity("");
    }
}