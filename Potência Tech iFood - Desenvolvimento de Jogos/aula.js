// AULA 1 - PRIMEIROS PASSOS COM JAVASCRIPT
/*
--------------------------------------------------------
console.log('Qual o Valor gasto para realizar uma viagem, onde o valor do combust�vel etanol �: R$5,79');
console.log('Gasto m�dio do combust�vel por KM: 10km por litro');
console.log('Dist�ncia da viagem: 100km ');


const precoCombustivel = 5.79;
const kmPorLitros = 14;
let distanciaEmKM = 186;

let valorViagem = (distanciaEmKM/kmPorLitros)*precoCombustivel;

console.log('A viagem vai custar: R$' + valorViagem.toFixed(2));
--------------------------------------------------------
// M�DULO 2 - ESTRUTURA CONDICIONAIS
--------------------------------------------------------
BOOLEAN = VERDADEIRO OU FALSO;
console.log('Qual o Valor gasto para realizar uma viagem');
console.log ('Pre�o Etanol: R$');
console.log ('Pre�o Gasolina: R$');
console.log ('Qual o tipo do combust�vel:');
console.log('Gasto m�dio do combust�vel por KM: 10km por litro');
console.log('Dist�ncia da viagem: 100km ');

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 14;
let distanciaEmKM = 186;
let tipoCombustivel = 'Gasolina';

let valorGasto = (distanciaEmKM / kmPorLitros);

if (tipoCombustivel === 'Etanol') {
    const valorViagem = valorGasto * precoEtanol;
    console.log('A viagem vai custar: R$' + valorViagem.toFixed(2));
} else {
    const valorViagem = valorGasto * precoGasolina;
    console.log('A viagem vai custar: R$' + valorViagem.toFixed(2));
}
--------------------------------------------------------
// M�DULO 3 exercicios:
--------------------------------------------------------
M�DIA DO ALUNO.
media = ( nota1 + nota2 + nota3) / 3;
Classifica��o
< 5 = reprovado!;
>= 5 && <= 7 = recupera��o!;
> 7 = aprovado!;

let nota1 = 8 ;
let nota2 = 7 ;
let nota3 = 7 ;
const media = ( nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5){
    console.log('Reprovado!');
} else if (media >=5 && media <=7){
    console.log('Recupera��o!');
} else {
    console.log('Aprovado!');
}
--------------------------------------------------------
CALCULO IMC

let peso = 56.6;
let altura = 1.54;
const imc = peso / Math.pow(altura, 2);

console.log('imc e: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else if (imc >= 40) {
    console.log('Obesidade GRAVE');
}
--------------------------------------------------------
VALOR PAGO DE UM PRODUTO

Considere o valor da etiqueta e a escolha de condi��o de pagamento.
Condi��o de pagamento
1 - � vista d�bito, 10% de desconto;
2 - � vista no dinheiro ou PIX, 15% de desconto;
3 - em 2x, pre�o normal;
4 - acima de 2x, pre�o etiqueta + 10% juros.

const precoEtiqueta = 100;
const formaDePagamento = 4 ;

if (formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
--------------------------------------------------------
*/
// --------------------------------------------------------
// --------------------------------------------------------

// AULA 2 - CONHECENDO FUN��ES JAVASCRIPT
/*
--------------------------------------------------------
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else if (imc >= 40) {
        return 'Obesidade GRAVE';
    }

}

function main() {
    let peso = 56.6;
    let altura = 1.54;

    const imc = calcularImc(peso, altura);

    console.log('imc e: ' + imc.toFixed(2));
    console.log(classificarImc(imc));
}

main();
--------------------------------------------------------
//M�DULO 2
--------------------------------------------------------
FUN��O ESCREVAMEUNOME

function digaMeuNome(nome){
    console.log('Seu nome e: '+nome);
}
digaMeuNome('Talita Mendonca Marques');
digaMeuNome('Leonardo Vinicius da Costa Gomes');

--------------------------------------------------------
FUN��O VERIFICAIDADE

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('De maior');
    } else {
        console.log('De menor');
    }    
} 
verificarIdade(27);

--------------------------------------------------------
FUN��O INVOCANDO FUN��O DENTRO DE OUTRA FUN��O

function digaMeuNome(nome){
    return ('Seu nome e: '+nome);
}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(digaMeuNome('Talita Mendonca Marques')+' De maior');
    } else {
        console.log(digaMeuNome('Leonardo Vinicius da Costa Gomes')+' De menor');
    }    
} 
verificarIdade(17);

--------------------------------------------------------
FUN��O PARA CALCULAR PRE�O


--------------------------------------------------------
*/

//--------------------------------------------------------
//--------------------------------------------------------

// AULA 3 - 
