// function validate() {
//     email = document.getElementById("email");
//     password = document.getElementById("pass");

//     if(email.value.trim() === "") {
//         // alert("Blank Username");
//         // email.style.border = "solid 3px red" 
//         document.getElementById("lbuber").style.visibility="visible";
//         return false
//     }

//     else if(password.value.trim() === "") {
//         alert("Blank Password")
//         return false
//     }

//     else if(password.value.trim().length<5) {
//         alert("Password too short")
//         return false
//     }

//     else{
//         return true
//     }
// }
function validate() {
    email = document.getElementById("email").value
    regx = /E00/

    if (regx.test(email)) {
        alert("Validate username")
    }
    else {
        alert("Invalid Username")
        document.getElementById("lbuber").style.visibility="visible";
    }
}