
function loader() {
    let enterpass = window.prompt('Enter Password:')
    let password = "GUND1976";
    if (enterpass != password) {
        document.getElementById("main").style.display = "none";
        document.getElementById("warn").innerHTML = "Invalid Password";
    } else {
        document.getElementById("main").style.display = "";
    }
}






function UserNames() {
    let person = document.getElementById('personNames').value;
    let user = person.toUpperCase();
    if (user == 'SHIVA') {
        document.getElementById("circle").style.backgroundImage = "url('Images/shiva-cropped.jpg')";
        document.getElementById('familyManPhone').innerHTML = `9392240740`;
        document.getElementById('birthday').innerHTML = `14-03-2005`;
        document.getElementById('familynumber').innerHTML = `6501 4156 5246`;
    } else if (user == "SRINIVAS") {
        document.getElementById("circle").style.backgroundImage = "url('Images/dad.jpg')";
        document.getElementById('familyManPhone').innerHTML = `9014275494`;
        document.getElementById('birthday').innerHTML = `13-02-1976`;
        document.getElementById('familynumber').innerHTML = `3117 9822 6321`;
    } else if (user == "RADHA") {
        document.getElementById("circle").style.backgroundImage = "url('Images/mom.jpg')";
        document.getElementById('familyManPhone').innerHTML = `8886953573`;
        document.getElementById('birthday').innerHTML = `15-02-1982`;
        document.getElementById('familynumber').innerHTML = `2484 0295 1848`;
    } else if (user == "CHITRA") {
        document.getElementById("circle").style.backgroundImage = "url('Images/chitra.jpg')";
        document.getElementById('familyManPhone').innerHTML = `9014239247`;
        document.getElementById('birthday').innerHTML = `11-07-2001`;
        document.getElementById('familynumber').innerHTML = `5403 0774 9756`;
    }
    else {
        document.getElementById('note').innerHTML = "Invalid Name";
        document.getElementById('note2').innerHTML = "Drag from top to reload";
    }

    document.getElementById('familyNames').innerHTML = `Hello, ${user}`
    document.getElementById('familyMan').innerHTML = `${user}`;



}

