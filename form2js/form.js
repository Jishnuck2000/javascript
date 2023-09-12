function register() {
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var mobile = document.getElementById("mobile").value
    var date = document.getElementById("date").value
    var adrs = document.getElementById("adrs").value
    var city = document.getElementById("city").value
    var area = document.getElementById("area").value
    var state = document.getElementById("state").value
    var pass = document.getElementById("pass").value



    var expname = /^([A-Za-z]{3,20})$/
    var expemail = /^([A-Za-z0-9]+)@([a-z]{5}).([a-z]{3})$/
    var expphone = /^([0-9]{4})([0-9]{3})([0-9]{3})$/
    var pin = /^([0-9]{5,10})$/
    var expass = /^([A-Za-z0-9\@#&*]{8,30})$/


    if (expname.test(firstname)) {
        document.getElementById("firstname1").innerHTML = "valid"
        firstname1.style.color = "green"
    }
    else {
        document.getElementById("firstname1").innerHTML = "Not valid"
        firstname1.style.color = "red"
    }

    if (expname.test(lastname)) {
        document.getElementById("lastname1").innerHTML = "valid"
        lastname1.style.color = "green"
    }
    else {
        document.getElementById("lastname1").innerHTML = "Not valid"
        lastname1.style.color = "red"
    }

    if (expemail.test(email)) {
        document.getElementById("email1").innerHTML = "valid"
        email1.style.color = "green"
    }
    else {
        document.getElementById("email1").innerHTML = " Not valid "
        email1.style.color = "red"

    }
    if (expphone.test(mobile)) {
        document.getElementById("mobile1").innerHTML = "valid"
        mobile1.style.color = "green"

    } else {
        document.getElementById("mobile1").innerHTML = " Not valid "
        mobile1.style.color = "red"
    }



    if (date == "") {
        document.getElementById("date1").innerHTML = "Not valid";
        date1.style.color = "red"

    }
    else {
        document.getElementById("date1").innerHTML = " valid";
        date1.style.color = "green";
    }


    if (expname.test(adrs)) {
        document.getElementById("adrs1").innerHTML = "valid"
        adrs1.style.color = "green"
    }
    else {
        document.getElementById("adrs1").innerHTML = "Not valid"
        adrs1.style.color = "red"
    }


    if (expname.test(city)) {
        document.getElementById("city1").innerHTML = "valid"
        city1.style.color = "green"
    }
    else {
        document.getElementById("city1").innerHTML = "Not valid"
        city1.style.color = "red"
    }


    if (pin.test(area)) {
        document.getElementById("area1").innerHTML = "valid"
        area1.style.color = "green"

    } else {
        document.getElementById("area1").innerHTML = " Not valid "
        area1.style.color = "red"
    }


    if (expname.test(state)) {
        document.getElementById("state1").innerHTML = "valid"
        state1.style.color = "green"
    }
    else {
        document.getElementById("state1").innerHTML = "Not valid"
        state1.style.color = "red"
    }

    if (pass.length < 8) {
        document.getElementById("pass1").innerHTML = "use strong password"
        pass1.style.color="red"

    }
    else if (expass.test(pass)) {
        document.getElementById("pass1").innerHTML = "valid"
        pass1.style.color = "green"
    }
    else {
        document.getElementById("pass1").innerHTML = "Not valid"
        pass1.style.color="red"
    }


}
