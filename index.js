//Entrada
let heroi = "Homen de Ferro"
let XP =  4500
let nivel;

//Verifica o nível do XP
if (XP <= 1000){
    nivel="Ferro";
}
else if (XP >= 1001 &&  XP <= 2000){
    nivel = "Bronze";
}
else if (XP >=2001 && XP <= 5000){
    nivel= "Prata"
}
else if (XP >=5001 && XP <=7000){
    nivel = "Ouro"
}
else if (XP >=7001 && XP <=8000){
    nivel = "Platina"
}
else if (XP >=8001 && XP <=9000){
    nivel = "Ascendente"
}
else if (XP >= 9001 && XP <= 10000){
    nivel = "Imortal"
}
else{ 
    nivel = "Radiente"
}
// saída 
switch(nivel){
    case "Ferro":
        console.log("O Herói de nome " + heroi + " está no nível de " + nivel);
    break;
    case "Bronze":
        console.log("O Herói de nome " + heroi+ " está no nível de " + nivel);
    break;
    case "Prata":
        console.log("O Herói de nome " + heroi+ " está no nível de " + nivel);
    break;
    case "Ouro":
        console.log("O Herói de nome " + heroi+ " está no nível de " + nivel);
    break;
    case "Platina":
        console.log("O Herói de nome " + heroi+ " está no nível de " + nivel);
    break;
    case "Ascendente":
        console.log("O Herói de nome " + heroi+ " está no nível de " + nivel);
    break;
    case "Imortal": 
        console.log("O Herói de nome " + heroi+ " está no nível de " + nivel);
    break;
    default:
        console.log("O Herói de nome " + heroi+ " está no nível de " +nivel);
}