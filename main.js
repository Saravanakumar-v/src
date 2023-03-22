function displayExperience() {
    var wrk = document.getElementById("work");
    var exp = document.getElementById("experience");
    var cnt = document.getElementById("contact");

    var nav1 = document.getElementById("nav1")
    var nav2 = document.getElementById("nav2");
    var nav3 = document.getElementById("nav3");
    
    nav1.style.borderTop = "none";
    nav2.style.borderTop = "solid";
    nav2.style.paddingTop = "10px";
    nav3.style.borderTop = "none";

    cnt.style.display = "none";
    wrk.style.display = "none";
    exp.style.display = "block";
}

function displayWork() {
    var wrk = document.getElementById("work");
    var exp = document.getElementById("experience");
    var cnt = document.getElementById("contact");
    
    var nav1 = document.getElementById("nav1")
    var nav2 = document.getElementById("nav2");
    var nav3 = document.getElementById("nav3");
    
    nav1.style.borderTop = "solid";
    nav1.style.paddingTop = "10px";
    nav2.style.borderTop = "none";
    nav3.style.borderTop = "none";

    exp.style.display = "none";
    wrk.style.display = "block";
    cnt.style.display = "none";
}

function displayContact() {
    var wrk = document.getElementById("work");
    var exp = document.getElementById("experience");
    var cnt = document.getElementById("contact");
    
    var nav1 = document.getElementById("nav1")
    var nav2 = document.getElementById("nav2");
    var nav3 = document.getElementById("nav3");
    
    nav1.style.borderTop = "none";
    nav2.style.borderTop = "none";
    nav3.style.borderTop = "solid";
    nav3.style.paddingTop = "10px";
    
    wrk.style.display = "none"
    exp.style.display = "none";
    cnt.style.display = "block";
}