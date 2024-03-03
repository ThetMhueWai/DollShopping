// For buy page
const element = document.getElementById("order");
const myname = document.getElementById("myname");
const add = document.getElementById("add");

element.addEventListener("click", myFunction);

function myFunction() {
    if (myname.value == "" || add.value == "") {
        alert("Form is empty");
    } else {
        window.location.assign("./index.html")
    }
}