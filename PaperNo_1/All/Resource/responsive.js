function show() {
    if (document.getElementById('para2').style.display == "block") {
        document.getElementById('para2').style.display = "none";
        document.getElementById('para3').textContent = "SHOW ALL"
    } else {
        document.getElementById('para2').style.display = "block";
        document.getElementById('para3').textContent = "SHOW LESS";
    }
}

function Enroll() {
    var name = document.getElementById('t1').value;
    var email = document.getElementById('t2').value;
    var password = document.getElementById('t3').value;
    var repassword = document.getElementById('t4').value;
    if (name == "" || email == "" || password == "" || repassword == "") {
        alert("please fill all fields");
        return false;
    } else if (!(password == repassword)) {
        alert("password/repassword is invalid");
        return false;
    } else {
        alert("would you like to choose options");
        return true;
    }
}