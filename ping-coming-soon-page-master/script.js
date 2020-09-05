document.getElementById("notify").addEventListener("click", check);

document.getElementsByTagName("body")[0].onresize = function () {
    if(screen.width > 375) {
    document.getElementById("notify").style.marginTop = "32vw"
    } else if (screen.width <= 375 && (document.getElementById("nomail").style.display == "block" || document.getElementById("wrongmail").style.display == "block")) {
        document.getElementById("notify").style.marginTop = "165vw"
    } else {
        document.getElementById("notify").style.marginTop = "148vw"
    }
}

function check() {
    var mail = document.getElementById("mail").value
    var result = mail.match(/^\w+@[a-z]+.[a-z]+$/gm);

    if(mail == ""){
        if(screen.width <= 375) {
            document.getElementById("notify").style.marginTop = "165vw"
        }

        document.getElementById("nomail").style.display = "block"
        document.getElementById("mail").style.border = "0.15vw solid hsl(354, 100%, 66%)" 
        document.getElementById("wrongmail").style.display = "none"
    } else if (result == null) {
        if(screen.width <= 375) {
            document.getElementById("notify").style.marginTop = "165vw"
        }

        document.getElementById("wrongmail").style.display = "block"
        document.getElementById("mail").style.border = "0.15vw solid hsl(354, 100%, 66%)"  
        document.getElementById("nomail").style.display = "none"
    } else {
        if(screen.width <= 375) {
            document.getElementById("notify").style.marginTop = "148vw"
        }

        document.getElementById("nomail").style.display = "none"
        document.getElementById("wrongmail").style.display = "none"
        document.getElementById("mail").style.border = "0.1vw solid hsl(223, 100%, 88%)"   
    }
}

