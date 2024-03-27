var lista = ["MANGA", "MELANCIA", "LARANJA", "PERA"];

function procurarFruta(fruta, lista) {
    var indice = lista.indexOf(fruta);
    if (indice !== -1) {
        lista.splice(indice, 1);
        return true;
    } else {
        return false;
    }
}

console.log("Mercado de frutas! Frutas disponíveis: " + lista.join(", "));

alert("Mercado de frutas! Frutas disponíveis: " + lista.join(", "));

while (lista.length >= 1) {
    var frutaProcurada = prompt("Qual fruta você procura?");
    frutaProcurada = frutaProcurada.toUpperCase();
    if (procurarFruta(frutaProcurada, lista)) {
        alert("Fruta retirada da lista");
    } else {
        alert("Fruta indisponível no nosso mercado");
    }
}

alert("Lista de compras finalizada");
