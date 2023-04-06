const loginLink = document.querySelector(".Login-link");
const registerLink = document.querySelector(".register-link");
const wrapper = document.querySelector(".wrapper");
registerLink.addEventListener('click', () => { wrapper.classList.add('active') })
loginLink.addEventListener('click', () => { wrapper.classList.remove('active') })

const logform = document.querySelector('.loginform')
logform.addEventListener('submit', event => {
    event.preventDefault();
})



function validation() {
    var returnval1 = true;
    var email = document.forms['loginform']['email'].value;
    var password = document.forms['loginform']['password'].value;
    console.log("name is " + email + password);
    var emailcheck = /^[a-zA-Z0-9]+@gmail\.com$/
    var passcheck = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>/?]).{8,}$/;
    if (emailcheck.test(email)) {
        document.querySelector(".emailerror").innerHTML = "";

    } else {
        console.log(emailcheck.test(email));
        document.querySelector(".emailerror").innerHTML = "*Email should contain @gmail.com";
        return false;
    }
    if (passcheck.test(password)) {
        document.querySelector(".passworderror").innerHTML = ""

    } else {
        document.querySelector(".passworderror").innerHTML = "*minimum 8 characters, and must have a capital letter,number and special character"
        return false
    }

    if (emailcheck.test(email) && passcheck.test(password)) {
        window.location.href = "index.html";
    }
    return returnval1;

}

const regform = document.querySelector('.regform')
regform.addEventListener('submit', event => {
    event.preventDefault();
})

function uregister() {

    var returnval1 = true;
    var remail = document.forms['register']['remail'].value;
    var rpassword = document.forms['register']['rpassword'].value;
    var rusername = document.forms['register']['rusername'].value;
    console.log(remail + " " + rpassword + " " + rusername);
    var emailcheck = /^[a-zA-Z0-9]+@gmail\.com$/
    var passcheck = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>/?]).{8,}$/;
    if (emailcheck.test(remail)) {
        document.querySelector(".Remailerror").innerHTML = ""
    } else {
        console.log(emailcheck.test(remail));
        document.querySelector(".Remailerror").innerHTML = "*Email should contain @gmail.com";
        return false;
    }
    if (passcheck.test(rpassword)) {
        document.querySelector(".Rpassworderror").innerHTML = ""
    } else {
        document.querySelector(".Rpassworderror").innerHTML = "*minimum 8 characters, and must have a capital letter,number and special character"
        return false
    }

    if (passcheck.test(rpassword) && emailcheck.test(remail)) {

        const formData = new FormData(regform);
        const data = Object.fromEntries(formData);
        console.log(JSON.stringify(data));
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(res => res.json()).
        then(data => console.log(data)).
        catch(err => console.log(err));

    }

    //  
    return true;
}