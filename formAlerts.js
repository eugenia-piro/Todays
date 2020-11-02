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
var age = document.getElementById('age');
age.addEventListener('blur', checkAge);
age.addEventListener('focus', uncheckAge);
function checkAge (e) {
    if (e.target.value-Math.floor(e.target.value) != 0) {
        document.getElementsByClassName('wrong')[4].innerHTML = "<p> Enter a valid number, not decimal </p>";
    } else if (e.target.value<18) {
        document.getElementsByClassName('wrong')[4].innerHTML = "<p> Must be over 18 </p>";
    }
}
function uncheckAge() {
    document.getElementsByClassName('wrong')[4].innerHTML = "<p></p>";
}
//Telephone number
var tel = document.getElementById('tel');
tel.addEventListener('blur', checkTel);
tel.addEventListener('focus', uncheckTel);
function checkTel (e) {    
    if (e.target.value.match('[,()-.]')!=null) {        
        document.getElementsByClassName('wrong')[5].innerHTML = "<p> Do not enter special characters </p>";
    } else if (e.target.value.match('[a-z]')!=null) {
        document.getElementsByClassName('wrong')[5].innerHTML = "<p> Wrtie only numbers </p>";
    } else if (e.target.value.length<7) {
        document.getElementsByClassName('wrong')[5].innerHTML = "<p> Enter at least 7 numbers </p>";
    }
}
function uncheckTel() {
    document.getElementsByClassName('wrong')[5].innerHTML = "<p></p>";
}
//Address
var ad = document.getElementById('ad');
ad.addEventListener('blur', checkAd);
ad.addEventListener('focus', uncheckAd);
function checkAd (e) {
    if (e.target.value.length<5) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> You need at least 5 characters </p>";
    } else if (e.target.value.match('[a-z]')===null) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> You have to write the name of the street </p>";
    } else if (e.target.value.match('[0-9]')===null) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> It need a number </p>";
    } else if (e.target.value.match(' ')===null) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> It's not and address </p>";
    }
}
function uncheckAd() {
    document.getElementsByClassName('wrong')[6].innerHTML = "<p></p>";
}
//City
var city = document.getElementById('city');
city.addEventListener('blur', checkCity);
city.addEventListener('focus', uncheckCity);
function checkCity (e) {
    if (e.target.value.length<3) {
        document.getElementsByClassName('wrong')[7].innerHTML = "<p> It's too short </p>";
    }
}
function uncheckCity() {
    document.getElementsByClassName('wrong')[7].innerHTML = "<p></p>";
}
//ZIP Code
var zip = document.getElementById('zip');
zip.addEventListener('blur', checkZip);
zip.addEventListener('focus', uncheckZip);
function checkZip (e) {
    if (e.target.value.length<3) {
        document.getElementsByClassName('wrong')[8].innerHTML = "<p> It's too short </p>";
    }
}
function uncheckZip() {
    document.getElementsByClassName('wrong')[8].innerHTML = "<p></p>";
}
//ID Number
var idn = document.getElementById('idn');
idn.addEventListener('blur', checkIdn);
idn.addEventListener('focus', uncheckIdn);
function checkIdn (e) {
    if (e.target.value.length<7 || e.target.value.length>8) {
        document.getElementsByClassName('wrong')[9].innerHTML = "<p> Must be between 7 and 8 numbers </p>";
    }
}
function uncheckIdn() {
    document.getElementsByClassName('wrong')[9].innerHTML = "<p></p>";
}
