const leia = require("prompt-sync")()

let cod = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"]
let servico = ["encomenda de pulseiras", "troca de pulseiras", "manutençao de pulseiras", "app pulseiras ajuda", "relatar problemas app", "ajuda a crianças de rua", "rastreamento de criança", "bem estar da criança", "pulseira de panico", "criancas adotadas"]
let doacao = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let movimento = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let opcaoMenuPrincipal = ""
let opcaoSubMenu = ""
let auxCod = ""
let posicao = -1
let auxdoar = 0

while (opcaoMenuPrincipal != "3") {
    let opcaoSubMenu = ""
    console.log("\nhope child\n\n")
    console.log("MENU PRINCIPAL")
    console.log("1 - comprar")
    console.log("2 - carrinho")
    console.log("3 - Sair")
    opcaoMenuPrincipal = leia("Digite o numero da sua opção : ")
    if (opcaoMenuPrincipal == "1") {
        console.log("COD\tSERVIÇO")

        for (let i = 0; i < cod.length; i++) {
            console.log(cod[i] + "\t" + servico[i].toUpperCase())
        }
        auxCod = leia("Digite o cod serviço que desejar : ").toUpperCase()
        for (let x = 0; x < cod.length; x++) {
            if (auxCod == cod[x]) {
                posicao = x
            }
            movimento[posicao]=servico[posicao]
        }
    }
    if (opcaoMenuPrincipal == "2"){
        while(opcaoSubMenu != "2"){
        console.log("SERVIÇO")
        
        for (let i = 0; i < cod.length; i++) {
            console.log(movimento[i])
        }
        console.log("\n1 - DOAR")
        console.log("2 - SAIR")
        opcaoSubMenu = leia("Digite o numero da sua opção : ")
         if(opcaoSubMenu=="1"){ 
            console.log("doar")
            for (let i = 0; i < cod.length; i++) {
                console.log(doacao[i])
               
            }
          auxdoar = leia("quanto quer doar?")       
                console.log("obrigado por doar")
                for (let i = 0; i < cod.length; i++) {
                    movimento[i]=0
                }
                opcaoSubMenu = "2"
            }
    }
  }
}