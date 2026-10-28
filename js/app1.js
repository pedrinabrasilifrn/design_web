/*Processamento/Armazenamento*/
let hoje = new Date();
/*Entradas*/
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
/*Saidas*/
const saudacao = document.getElementById("saudacao");
const aniversario = document.getElementById("aniversario");

/*Passo a passo*/
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(2026, data_nasc.getMonth(), data_nasc.getDate());
    let data_formatada = `${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje é ${data_formatada}`;
    if (data_aniv > hoje){  
        let dias = 0;
        if (data_aniv.getMonth() > hoje.getMonth()){
            dias = data_aniv.getMonth() - hoje.getMonth();
            dias = dias * 30 + data_aniv.getDate()- hoje.getDate();
        }else {
            dias = data_aniv.getDate()+ hoje.getDate();
        }
        
        aniversario.innerHTML = `Diferenca de hoje para aniv ${dias}`;
    }else{
        aniversario.innerHTML = `Diferenca de hoje para aniv ${hoje - data_aniv}`;
    }
    
    cadastro.reset();
});