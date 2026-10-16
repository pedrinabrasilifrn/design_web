const estrelinha = {
    nome: "Estrelinha Bolinha",
    cor: "amarela",
    altura: 0.58,
    peso: 11.5,
    raca: "Vira-lata com salsisha",
    latir(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
    },
    cagar(kg){
        this.peso = this.peso - kg;
    },
    saudar(){
        let msg = `Olá meu nome é: ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor}\n`
        msg = msg + `Raça: ${this.raca}\n`
        msg = msg + `Peso: ${this.peso}\n`
        msg = msg + `Altura: ${this.altura}\n`
        alert(msg)
    }
}