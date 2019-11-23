var button = document.getElementById("btn")

// event listener:
// button.addEventListener("click", function() {
//     button.innerHTML = parseInt(button.innerHTML) + 1
// })

// arrow function:
//     button.addEventListener("click", () => button.innerHTML = parseInt(button.innerHTML) + 1)

// arrow function and event listener:
 button.onclick = function() {
    button.innerHTML = parseInt(button.innerHTML) + 1
} 