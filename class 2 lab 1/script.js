function questions() {
    let a1 = prompt("What is your favorite sports team");
    alert("The " + a1 + " is a good sports team!");
    let a2 = prompt("What year was the last chapmionship for the " + a1);
    alert(a2 + " Was a great year for that team");
    let a3 = prompt("What is your favorite player on the team");
    alert(a3 + " was the MVP");
    let a4 = prompt("What is your team colors");
    alert(a4 + " your teams colors are my favorite color");
    let a5 = prompy("Guess a number 1-50");
    let a6 = Math.ceil(Math.random() * 50 ) ;
    if (a5 == a6) {
        alert(a5 + "Right Answer"); 
    } else{
        alert(a5 + "Wrong Answer")
    }
}