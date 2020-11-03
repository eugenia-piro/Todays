var arrayWrong = [];
var arrayInputs = [];
//Full Name
var fullName = document.getElementById('fullName');
// Alert name
fullName.addEventListener('blur', checkName);
fullName.addEventListener('focus', uncheckName);
function checkName (e) {
    arrayInputs[0] = ''+e.target.value+'';
    if (e.target.value.length>=6 && e.target.value.includes(' ')) {
    arrayWrong[0] = ' ';
    } else{
        document.getElementsByClassName('wrong')[0].innerHTML = "<p> Enter valid Name and Last Name</p>";
        arrayWrong[0] = 'Error: Enter valid Name and Last Name';
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
    arrayInputs[1] = ''+e.target.value+'';
    if (e.target.value.includes('.com') && e.target.value.includes('@')) {
        arrayWrong[1] = ' ';
    } else{        
        document.getElementsByClassName('wrong')[1].innerHTML = "<p> Enter valid Email</p>";
        arrayWrong[1] = 'Error: Enter valid Email';
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
    arrayInputs[2] = ''+e.target.value+'';
    if (e.target.value.length<6) {
        document.getElementsByClassName('wrong')[2].innerHTML = "<p> Your password is too short </p>";
        arrayWrong[2] = 'Error: Your password is too short';
    } else if (e.target.value.match('[a-z]')===null) {
        document.getElementsByClassName('wrong')[2].innerHTML = "<p> You have to add letters to your password</p>";
        arrayWrong[2] = 'Error: You have to add letters to your password';
    } else if (e.target.value.match('[0-9]')===null) {
        document.getElementsByClassName('wrong')[2].innerHTML = "<p> You have to add numbers to your password </p>";
        arrayWrong[2] = 'Error: ou have to add numbers to your password';
    } else {
        arrayWrong[2] = ' ';
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
    arrayInputs[3] = ''+e.target.value+'';
    if (e.target.value != password.value) {
        document.getElementsByClassName('wrong')[3].innerHTML = "<p> Password incorrect </p>";
        arrayWrong[3] = 'Error: Password incorrect';
    } else {
        arrayWrong[3] = ' ';
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
    arrayInputs[4] = ''+e.target.value+'';
    if (e.target.value-Math.floor(e.target.value) != 0) {
        document.getElementsByClassName('wrong')[4].innerHTML = "<p> Enter a valid number, not decimal </p>";
        arrayWrong[4] = 'Error: Enter a valid number, not decimal';
    } else if (e.target.value<18) {
        document.getElementsByClassName('wrong')[4].innerHTML = "<p> Must be over 18 </p>";
        arrayWrong[4] = 'Error: Must be over 18';
    } else {
        arrayWrong[4] = ' ';
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
    arrayInputs[5] = ''+e.target.value+'';
    if (e.target.value.match('[,()-.]')!=null) {        
        document.getElementsByClassName('wrong')[5].innerHTML = "<p> Do not enter special characters </p>";
        arrayWrong[5] = 'Error: Do not enter special characters';
    } else if (e.target.value.match('[a-z]')!=null) {
        document.getElementsByClassName('wrong')[5].innerHTML = "<p> Wrtie only numbers </p>";
        arrayWrong[5] = 'Error: Wrtie only numbers';
    } else if (e.target.value.length<7) {
        document.getElementsByClassName('wrong')[5].innerHTML = "<p> Enter at least 7 numbers </p>";
        arrayWrong[5] = 'Error: Enter at least 7 numbers';
    } else {
        arrayWrong[5] = ' ';
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
    arrayInputs[6] = ''+e.target.value+'';
    if (e.target.value.length<5) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> You need at least 5 characters </p>";
        arrayWrong[6] = 'Error: You need at least 5 characters';
    } else if (e.target.value.match('[a-z]')===null) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> You have to write the name of the street </p>";
        arrayWrong[6] = 'Error: You have to write the name of the street';
    } else if (e.target.value.match('[0-9]')===null) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> It need a number </p>";
        arrayWrong[6] = 'Error: It need a number';
    } else if (e.target.value.match(' ')===null) {
        document.getElementsByClassName('wrong')[6].innerHTML = "<p> It's not and address </p>";
        arrayWrong[6] = "Error: It's not and address";
    } else {
        arrayWrong[6] = ' ';
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
    arrayInputs[7] = ''+e.target.value+'';
    if (e.target.value.length<3) {
        document.getElementsByClassName('wrong')[7].innerHTML = "<p> It's too short </p>";
        arrayWrong[7] = "Error: It's too short";
    } else {
        arrayWrong[7] = ' ';
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
    arrayInputs[8] = ''+e.target.value+'';
    if (e.target.value.length<3) {
        document.getElementsByClassName('wrong')[8].innerHTML = "<p> It's too short </p>";
        arrayWrong[8] = "Error: It's too short";
    } else {
        arrayWrong[8] = ' ';
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
    arrayInputs[9] = ''+e.target.value+'';
    if (e.target.value.length<7 || e.target.value.length>8) {
        document.getElementsByClassName('wrong')[9].innerHTML = "<p> Must be between 7 and 8 numbers </p>";
        arrayWrong[9] = 'Error: Must be between 7 and 8 numbers';
    } else {
        arrayWrong[9] = ' ';
    }
}
function uncheckIdn() {
    document.getElementsByClassName('wrong')[9].innerHTML = "<p></p>";
}
console.log(arrayWrong, arrayInputs);
//SUBMIT
var label = document.querySelectorAll('label');
var arrayLabel = Array.from(label).map(element=>element.textContent);
console.log(arrayLabel);
var myArray = [];
//myArray[0] = arrayLabel[0].concat(arrayInputs[0]+'Hola');
console.log(arrayLabel.length)
for (var i; arrayLabel.length ;i++) {
    if (arrayWrong[i] === ' ') {
        var x = arrayLabel[i] +''+ arrayInputs[i];
        myArray.push(x);
    } else {
        var x = arrayLabel[i] +''+ arrayInputs[i];
        myArray.push(x);
    }
}
console.log(myArray);
//Buttom action
var myForm = document.getElementById('submit');
myForm.addEventListener('click', submitForm);
function submitForm (e) {    
    alert(myArray);
}