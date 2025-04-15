function checkForm() {
   // TODO: Perform input validation 

   let name = document.getElementById("fullName");
   let email = document.getElementById("email");
   let password = document.getElementById("password"); 
   let passwordConfirm = document.getElementById("passwordConfirm");
   let errors = document.getElementById("formErrors");
   let flagFormError = false;

   if (flagFormError === false){
      errors.classList.add("hide");
      name.classList.remove("error");
      email.classList.remove("error");
      password.classList.remove("error");
      passwordConfirm.classList.remove("error");
   }
   
   if (!name.value > 0) {
      flagFormError = true;
      name.classList.add("error");
      errors.classList.remove("hide");
      let nameError = document.createElement("li");
      nameError.innerHTML = "Missing full name.";
      errors.appendChild(nameError);
   }

   if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)){
      flagFormError = true;
      email.classList.add("error");
      errors.classList.remove("hide");
      let emailError = document.createElement("li");
      emailError.innerHTML = "Invalid or missing email address.";
      errors.appendChild(emailError);
   }

   if(password.value.length < 10 || password.value.length > 20){
      flagFormError = true;
      password.classList.add("error");
      errors.classList.remove("hide");
      let passwordError1 = document.createElement("li");
      passwordError1.innerHTML = "Password must be between 10 and 20 characters.";
      errors.appendChild(passwordError1);
   }

   if (!password.value || !/[a-z]/.test(password.value)){
      flagFormError = true;
      password.classList.add("error");
      errors.classList.remove("hide");
      let passwordError2 = document.createElement("li");
      passwordError2.innerHTML = "Password must contain at least one lowercase character.";
      errors.appendChild(passwordError2);
   }

   if (!password.value || !/[A-Z]/.test(password.value)){
      flagFormError = true;
      password.classList.add("error");
      errors.classList.remove("hide");
      let passwordError3 = document.createElement("li");
      passwordError3.innerHTML = "Password must contain at least one uppercase character.";
      errors.appendChild(passwordError3);
   }

   if (!password.value || !/[0-9]/.test(password.value)){
      flagFormError = true;
      password.classList.add("error");
      errors.classList.remove("hide");
      let passwordError4 = document.createElement("li");
      passwordError4.innerHTML = "Password must contain at least one digit.";
      errors.appendChild(passwordError4);
   }

   if (passwordConfirm && password.value !== passwordConfirm.value){
      flagFormError = true;
      password.classList.add("error");
      passwordConfirm.classList.add("error");
      errors.classList.remove("hide");
      let passwordError5 = document.createElement("li");
      passwordError5.innerHTML = "Password and confirmation password don't match.";
      errors.appendChild(passwordError5);
   }

}

// do not mess with below code
document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});