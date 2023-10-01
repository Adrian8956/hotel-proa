let hotel = prompt("Qual o nome do hotel?");
let hotelNome = document.getElementById("hotemNome");
hotelNome.innerHTML = hotel; 

let nome = prompt("Qual o nome do usuário?");
 let senha = parseInt(prompt("Digite a senha"))

while(senha != 2678){
    alert("Senha incorreta, digite novamente");
    senha = parseInt(prompt("Digite a senha"))
}

let nomeUsuario = document.getElementById("nomeUser");
nomeUsuario.innerHTML = "Bem-vindo, " + nome;  

function reserva(){
    let diaria = parseFloat(prompt("Qual o valor da diária?"));
    let dias = parseInt(prompt("Quantas diária serão necessárias?"));

    if(diaria <= 0){
        alert(`Valor inválido, ${nome}`);
    }
    else if(dias > 30){
        alert(`Valor inválido`);
    }
    else{
        let total = diaria * diaria;
        alert(`O valor de ${dias} dias de hospedagem é de R$${total}`)
        let hospede = prompt("Qual o nome do hóspede?");
        let confirmacao = confirm(`${nome}, Você confirma a hospegem para ${hospede} por ${dias} dias?`);
        switch(confirmacao){
            case true:
                alert(`${nome}, reserva efetuada para ${hospede}. O valor total é de R$${total}`)
                break;
            default:
                alert(`${nome}, reserva não efetuada.`);
        }
    }
}

function cadastro(){
    let opcao = confirm("Deseja fazer cadastro?")
    let diaria = parseFloat(prompt("Qual o valor da diária?"));
    let inteiro = [];
    let meio = [];
    let gratuito = [];
    let valor = 0;
    while(opcao != false){
        var hospede = prompt("Qual o nome do Hóspede?");
        var idade = parseInt(prompt("Qual a idade do Hóspede?"));

        if(idade > 0 && idade <=6){
            gratuito.push(hospede);
            alert(`${hospede} cadastrado(a) com sucesso. ${hospede} possui gratuidade.`);
        }
        else if(idade > 6 && idade < 60){
            inteiro.push(hospede);
            alert(`${hospede} cadastrado(a) com sucesso`);
        }
        else if(idade > 60 && idade < 130){
            meio.push(hospede);
            alert(`${hospede} cadastrado(a) com sucesso. ${hospede} paga meia.`);
        }
        else{
            alert("Valor inválido.")
        }
        opcao = confirm("Deseja fazer cadastro?");
    }

    if(inteiro.length >= 1 && meio.length === 0){
      valor = parseFloat(inteiro.length * diaria)
      alert(`${nome}, o valor total das hospedagens é: R$${valor}. \n ${gratuito.length} gratuidade(s) \n ${meio.length} meia(s).`)

    }
    else{
        valor = parseFloat((inteiro.length * diaria) + (meio.length * diaria / (meio.length * 2)));
        alert(`${nome}, o valor total das hospedagens é: R$${valor}. \n ${gratuito.length} gratuidade(s) \n ${meio.length} meia(s).`)
    }
    
}

function menu(){
    let menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
    let db = [];
    let hospede
    while(menu != "4"){
        switch(menu){
            case "1":
                hospede = prompt("Qual o nome do Hóspede?");
                db.push(hospede)
                alert(`Hóspede ${hospede} foi cadastrado(a) com sucesso!`)
                if(db.length <= 15){
                    menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
                }
                else{
                    alert("Quantidade maxima de hóspede!");
                    menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
                }
                
            
            break;
            case "2":
                hospede = prompt("Qual o nome do Hóspede?");
                if (db.includes(hospede)) {
                    alert(`Hóspede ${hospede} foi encontrado(a)!`);
                    menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
                } 
                else {
                    alert(`Hóspede ${hospede} não foi encontrado(a)!`);
                    menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
                }
                break;
            case "3":
                let lista = "";
                for(let i = 0; i < db.length; i++){
                    lista += db[i] + "\n";
                }
                alert(lista)
                menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
                break;
            default:
                alert("Valor inválido");
                menu = prompt("Selecione a opção: \n 1- Cadastrar \n 2- Pesquisar \n 3- Listar \n 4- Sair");
                break;
        }
    }
}

function buffet(){
    let duracao = parseInt(prompt("Qual a duração do evento em horas?"));
    let garcon = parseInt(prompt("Quantos garçons serão necessários?"));
    let custo_garcon = parseInt((duracao * 10.50) * garcon);
    let convidados = parseInt(prompt("Serão quantos convidados?"));
    let custo_cafe = 0.80;
    let custo_agua = 0.40;
    let cento_salgado = 34;
    let cafe = 0.20;
    let agua = 0.40;
    let salgado = 7;
    let l_cafe = convidados * cafe;
    let l_agua = convidados * agua;
    let cento = 100
    let q_salgados = salgado * convidados;
    let q_centos = Math.ceil(q_salgados / 100)
    let valor_centos = q_centos * cento_salgado;
    let custo_alimento = (custo_agua * convidados) + (custo_cafe * convidados) + valor_centos;
    let total = custo_alimento + custo_garcon;
     if(convidados <= 350){
        alert(`O evento precisará de ${l_cafe.toFixed(2)} litros de café. ${l_agua.toFixed(2)} litros de água, ${q_salgados} salgados, custo com garçons será: R$${custo_garcon.toFixed(2)}, custo com alimentos será: R$${custo_alimento.toFixed(2)}. O custo total do evento será de R$${total.toFixed(2)}`);
        let confirmacao = confirm("Gostaria de efetuar a reserva?");
        if(confirmacao === true){
            alert(`${nome}, reserva efetuada com sucesso.`);
        }
        else{
            alert("Reserva não efetuada");
        }
    } 
    else{
        alert("Valor inválido")
    }
}

function auditorio(){
    let convidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));
    let laranja = 150;
    let colorado = 350;
    let cadeiras = convidados % laranja;
    let confimacao;
    if(convidados > 0 && convidados <=220){
        alert(`use o auditório Laranja (inclua mais ${cadeiras} cadeiras)`)
        confimacao = confirm("Gostaria de efetuar a reserva?")
        switch(confimacao){
            case true:
                alert(`${nome}, reserva efetuada`);
                break;
            default:
                alert(`${nome}, reserva não efetuada`);
                break;
        } 
    }
    else{
        alert("Use o auditório colorado");
        confimacao = confirm("Gostaria de efetuar a reserva?")
        switch(confimacao){
            case true:
                alert(`${nome}, reserva efetuada`);
                break;
            default:
                alert(`${nome}, reserva não efetuada`);
                break;
        } 
    }
}

function evento(){
    let dia = prompt("Qual o dia do seu evento?");
    let hora = parseInt(prompt("Qual a hora do seu evento?"))
    let empresa;
    if(dia == "segunda" && hora >= 7 && hora <=23){
       empresa = prompt("Qual o nome da empresa?");
       alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
    }
    else if(dia == "terça" && hora >= 7 && hora <=23){
        empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
    }
    else if(dia == "quarta" && hora >= 7 && hora <=23){
        empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
     }
    else if(dia == "quinta" && hora >= 7 && hora <=23){
        empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
    }
    else if(dia == "sexta" && hora >= 7 && hora <=23){
        empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
    }
    else if(dia == "sabado" && hora >= 7 && hora <=15){
        empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
    }
    else if(dia == "domingo" && hora >= 7 && hora <=15){
        empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${empresa}. ${dia} às ${hora}hs.`)
    }
    else{
        alert("Restaurante indisponível");
    }
}

function abastecer(){
    let alcoolW = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    let gasolinaW = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    let alcoolS = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    let gasolinaS = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"))
    let litros = 42;
    let valor_gasolinaW = gasolinaW * litros;
    let valor_alcoolW = alcoolW * litros;
    let valor_gasolinaS = gasolinaS * litros;
    let valor_alcoolS = alcoolS * litros;
    let desconto = 0.30;
    let valor_descontoS = gasolinaS - (gasolinaS * desconto);
    let valor_descontoW = gasolinaW - (gasolinaW * desconto);
    let valor_alcool_descontoS = valor_descontoS * litros; 
    let valor_alcool_descontoW = valor_descontoW * litros;
    
    if(valor_alcool_descontoS < gasolinaS && valor_alcool_descontoS < gasolinaW && valor_alcool_descontoS < valor_alcool_descontoW){
        alert(`${nome}, é mais barato abastecer com álcool no posto Stark Petrol`)
    }
    else if(valor_alcool_descontoW < gasolinaW && valor_alcoolW < gasolinaS && valor_alcool_descontoW < valor_alcool_descontoS){
        alert(`${nome}, é mais barato abastecer com álcool no posto Wayne Oil`)
    }
    else if(gasolinaS < valor_alcool_descontoS && gasolinaS < valor_alcool_descontoW && gasolinaS < gasolinaW){
        alert(`${nome}, é mais barato abastecer com gasolina no posto Stark Petrol`);
    }
    else{
        alert(`${nome}, é mais barato abastecer com gasolina no posto Wayne Oil`)
    }
        
}

function manutencao(){
    let db = [];
    let confimacao = confirm("Deseja cadastrar empresa?");
    while(confimacao != false){
        let empresa = prompt("Qual o nome da empresa?");
        let valor = parseFloat(prompt("Qual o valor por aparelho?"));
        let quantidade = parseInt(prompt("Qual a quantidade de aparelhos?"));
        let desconto = parseInt(prompt("Qual a porcetagem de desconto?"));
        let porcetagem = desconto / 100;
        let minimo = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir desconto?"));
        let total = (valor * quantidade) * (1 - porcetagem);
        if(desconto === 0){
            total = valor * quantidade;
        }
        if(quantidade >= minimo){
            total = (valor * quantidade) * (1 - porcetagem);
        }
        else{
            total = valor * quantidade;
        }
        const dados = {
            nome: empresa,
            valor: total
        }
        db.push(dados);

        confimacao = confirm("Deseja cadastrar outra empresa?")
    }
    
    //verificar qual o menor valor e mostrar o nome da empresa
    let menor = db[0].valor;
    let nome = db[0].nome;
    for(let i = 0; i < db.length; i++){
        if(db[i].valor < menor){
            menor = db[i].valor;
            nome = db[i].nome;
        }
    }
    alert(`A empresa com o menor valor é ${nome} com o valor de R$${menor.toFixed(2)}`)
}