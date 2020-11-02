//Full Name
var fullName = document.getElementById('fullName');
// Alert name
fullName.addEventListener('blur', checkName);
fullName.addEventListener('focus', uncheckName);
function checkName (e) {
    if (e.target.value.length>=6 && e.target.value.includes(' ')) {
    } else{
        document.getElementsByClassName('wrong')[0].innerHTML = "<p> Enter valid Name and Last Name</p>";
    }
}
function uncheckName() {
    document.getElementsByClassName('wrong')[0].innerHTML = "<p></p>";
}
//Writing name
fullName.addEventListener('keyup',writing);
function writing(e) {
    document.getElementById('hello').innerHTML = '<h2> Hello '+e.target.value+'</h2>' ;
}
//Email
var email = document.getElementById('email');
email.addEventListener('blur', checkEmail);
email.addEventListener('focus', uncheckEmail);
function checkEmail (e) {
    if (e.target.value.includes('.com') && e.target.value.includes('@')) {
    } else{        
        document.getElementsByClassName('wrong')[1].innerHTML = "<p> Enter valid Email</p>";
    }
}
function uncheckEmail() {
    document.getElementsByClassName('wrong')[1].innerHTML = "<p></p>";
}
//Password
var password = document.getElementById('password');
password.addEventListener('blur', checkPassword);
password.addEventListener('focus', uncheckPassword);
function checkPassword (e) {
    if (e.target.value.length<6) {
        document.getElementsByClassName('wrong')[2].innerHTML = "<p> Your password is too short </p>";
    } else if (e.target.value.match('[a-z]')===null) {
        document.getElementsByClassName('wrong')[2].innerHTML = "<p> You have to add letters to your password</p>";
    } else if (e.target.value.match('[0-9]')===null) {
        document.getElementsByClassName('wrong')[2].innerHTML = "<p> You have to add numbers to your password </p>";
    }
}
function uncheckPassword() {
    document.getElementsByClassName('wrong')[2].innerHTML = "<p></p>";
}
//Repeat password
var rPassword = document.getElementById('rPassword');
rPassword.addEventListener('blur', checkRPassword);
rPassword.addEventListener('focus', uncheckRPassword);
function checkRPassword (e) {
    if (e.target.value != password.value) {
        document.getElementsByClassName('wrong')[3].innerHTML = "<p> Password incorrect </p>";
    }    
}
function uncheckRPassword() {
    document.getElementsByClassName('wrong')[3].innerHTML = "<p></p>";
}
//Age
