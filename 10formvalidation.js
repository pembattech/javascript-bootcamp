function validFname(){
    const fName = document.getElementById('firstname').value 
    if(fName === ""){
        displayMessage("Field shouln't be empty.",'fnamemsg','red')
        return false    }
    else if(fName.length < 3){
        displayMessage("Name must contain more than 2 characteres.",'fnamemsg','red')
        return false
    }
    else if(!fName.match(/^[a-zA-Z\s]*$/)){                      //match checks regex
        displayMessage('Name must contain alphabets only.','fnamemsg','red')
        return false
    }
    else{
        displayMessage("First name is valid",'fnamemsg','green')
    }
}

function validLname(){
    const lName = document.getElementById('lastname').value 
    if(lName === ""){
        displayMessage("Field shouln't be empty.",'lnamemsg','red')
        return false    }
    else if(lName.length < 3){
        displayMessage("LAst name must contain more than 2 characteres.",'lnamemsg','red')
        return false
    }
    else if(!lName.match(/^[a-zA-Z\s]*$/)){                      //match checks regex
        displayMessage('Name must contain alphabets only.','lnamemsg','red')
        return false
    }
    else{
        displayMessage("LAst name is valid",'lnamemsg','green')
    }
}

function validEmail(){
    const email = document.getElementById('email').value 
    if (email ===''){
        displayMessage('EMail cannot be empty','emailmsg','red')
        return false //doesnt let form submission

    }
    else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )) {
        displayMessage('Invalid email','emailmsg','red')
        return false
    }
    else{
        displayMessage('Email is valid','emailmsg','green')
        }
}

function validPassword(){
    const password = document.getElementById('password').value
    if (password ===''){
        displayMessage('PAssword cannot be empty','passwordmsg','red')
        return false
}

else if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)) {
    displayMessage('Invalid password','passwordmsg','red')
        return false
}
/* REGEX
Contain at least one letter.
Contain at least one digit.
Be at least 8 characters long.
*/
else{
    displayMessage('Password is valid','passwordmsg','green')
    }
}

document.getElementById("switch_button").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.innerHTML = "Hide password ";
    } else {
      passwordInput.type = "password";
      this.innerHTML = "Show password &#128064;";
    }
  });

function cvalidPassword() {
    const passWord = document.getElementById("password").value;
    const confirmPassword = document.getElementById("cpassword").value;
    if (passWord != confirmPassword) {
        displayMessage('PAssword doesnt match','passwordconf','red')
        return false
    }
    else{
        displayMessage('Password matched','passwordconf','green')
    }
  }

function displayMessage(msg,id,color){
    document.getElementById(id).innerText = msg 
    document.getElementById(id).style.color = color
}