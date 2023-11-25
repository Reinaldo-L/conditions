function valor() {
    let valorUno = document.querySelector("#select1").value;
    let valorDos = document.querySelector("#select2").value;
    let valorTres = document.querySelector("#select3").value;

    let total = +valorUno + valorDos + valorTres;
    let h2 = document.querySelector("#resultado");

    if (total == 911) {
        h2.innerHTML = "Password 1 Correcta";

    } else if (total == 714) {
        h2.innerHTML = "Password 2 Correcta";
        
    } else {
        h2.innerHTML = "Password Incorrecta";
    }
    }




//} ifelse (result = 714) {
//   mensaje.innerHTML = "Password 2 es Correcto";