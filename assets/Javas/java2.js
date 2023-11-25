const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    let input1 = parseInt(document.querySelector("#input1").value);
    let input2 = +document.querySelector("#input2").value;
    let input3 = +document.querySelector("#input3").value;

    let result = input1 + input2 + input3;
    let mensaje = document.querySelector("#mensaje");

    if (result <= 10) {
    mensaje.innerHTML = "LLevas " + result + " Stickers";
    } else {
    mensaje.innerHTML = "Llevas demasiados Stickers";
    }
});