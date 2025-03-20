
function ExecutaTabuada(event){

    event.preventDefault();

    let resultado1, resultado2, resultado3;
    const resp1 = document.getElementById("DigitaTabuada1");
    const resp2 = document.getElementById("DigitaTabuada2");
    const resp3 = document.getElementById("DigitaTabuada3");
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const numero3 = document.getElementById("numero3").value;

    resultado1 = " ";
    resultado2 = " ";
    resultado3 = " ";

    for(i = 1; i <= 10; i++){

        resultado1 = resultado1 + numero1 + " x " + i + " = " + (numero1 * i) + "<br>";
    }

    resp1.innerHTML = resultado1;

    for(a = 1; a <= 10; a++){

        resultado2 = resultado2 + numero2 + " x " + a + " = " + (numero2 * a) + "<br>";
    }

    resp2.innerHTML = resultado2;

    for(b = 1; b <= 10; b++){

        resultado3 = resultado3 + numero3 + " x " + b + " = " + (numero3 * b) + "<br>";
    }

    resp3.innerHTML = resultado3;
}
