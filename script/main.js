// Une fonction de validation de formulaire
let nombre = 0;
let res = 0;
let response = document.getElementById("respons");

form.onsubmit = () => {
    nombre = Number.parseInt(document.getElementById("nbre").value);
    res = nombre % 3;

    if( res === 0 ){
        respons.textContent = "Le nombre est divisible par 3";
    } else {
        respons.textContent = "Le nombre n'est pas divisible par 3";
    }

    // respons.textContent = nb1+nb2;

    return false;
} 



