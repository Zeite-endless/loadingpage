/* Escreva uma função chamada espereNSegundos(), que obedece as premissas abaixo:
Recebe um numero inteiro como parametro;
Retorna uma promessa;
Se o número não for inteiro (ex: 1,5) reject a promessa com uma mensagem de erro;
Espere a quantidade de segundos indicada, e então resolve com sucesso a promessa; */

function espereNSegundos(x){
    var num1 = x

    new Promise(function(resolve, reject){

        if(Number.isInteger(num1)){
            setTimeout(() => {
                resolve("é Inteiro!")
            }, 1000*num1);  
        }
        else {
            setTimeout(() => {
                reject("não é inteiro")
            }, 1000);
        }   
    }).then(res =>{
        console.log("O seu Número " + res)
    }).catch(res =>{
        console.log("O seu Número " + res)
    }).finally(() => {
        setTimeout(() => {
            console.log("Promessa finalizada.");
        }, 3000);   
    })
} espereNSegundos(x)

//-----------------------------------------------------------------------------------------------------------------------------


