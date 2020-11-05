let manage = document.getElementById("Manage")
let book = document.getElementById("Book")
let airline = document.getElementById("Airline")

function downBook(){
    book.classList.toggle("nav-hidden")
    manage.classList.remove("nav-hidden")
    airline.classList.remove("nav-hidden")
}
function downManage(){
    manage.classList.toggle("nav-hidden")
    book.classList.remove("nav-hidden")
    airline.classList.remove("nav-hidden")

}
function downAirline(){
    airline.classList.toggle("nav-hidden")
    book.classList.remove("nav-hidden")
    manage.classList.remove("nav-hidden")
}