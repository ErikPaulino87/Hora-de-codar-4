var planetas = ["TERRA", "MARTE", "PLUTÃO", "VÊNUS", "JÚPITER", "SATURNO"];

var nomeie = prompt("Digite o nome do planeta:");

nomeie = nomeie.toUpperCase();

if (planetas.includes(nomeie)) {
    alert("Este planeta está na array");
} else {
    alert("Esse planeta não está na array");
}


