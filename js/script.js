const db = firebase.firestore(); // to take the power of firebase we defined const
let email = document.getElementById("inputEmail");
let name = document.getElementById("inputName");

let address = document.getElementById("inputAddress");
let phone = document.getElementById("inputPhone");
let password = document.getElementById("inputPassword");
let privacy = document.getElementById("privacy");
let form = document.getElementById("registraion__form");
let submit_btn = document.getElementById("submit_button");

submit_button.addEventListener("click", formsubmit); // here we submit form

function formsubmit() {          // formsubmit function
  if (form.checkValidity()) {   // here we are checking form validity 
    addTofirestore();
  }
}

function addTofirestore() {      // after checking validity here we add
                                 // values in firestore by calling function 
    db.collection("users")
    .add({
        name: name.value,
        email: email.value,
        address: address.value,
        phone: phone.value,
        password: password.value
    })
    .then(function(docRef){
      console.log(docRef.id);
      document.getElementById("alert__email").textContent=email.value;
      document.getElementById("alert").classList.remove("hide");

})
    .catch(function(error){
        console.log("this is my error",error);
    })
  }

