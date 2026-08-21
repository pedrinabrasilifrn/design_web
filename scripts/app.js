alert("olá mundo!");

var nasc = 1991;
let nome = "'Pedrina'";
const viva = true;
let altura = 1.64;

if (viva){
    let saudacao = "Olá "+ nome +"!";
    let msg = `Altura ${altura}m | Idade ${2026-nasc}`;
    alert(saudacao+"\n"+msg);
}else{
    alert("R.I.P");
}