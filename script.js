var button = document.querySelector("button")
var output = document.querySelector(".output")

button.addEventListener('click', calc)

function calc() {

    var cost = document.querySelector("input").value
    var tip = (cost * 0.15).toFixed(2)
    
    output.innerHTML = `<h3>The value of TIP is ${tip} € on ${cost} €</h3>`

}