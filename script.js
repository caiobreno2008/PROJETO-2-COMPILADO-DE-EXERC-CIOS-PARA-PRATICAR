// 1. Mostrar a mensagem "Olá mundo"
console.log("Olá mundo");

// 2. Solicitar um número e mostrar a mensagem
let numero = prompt("Por favor, insira um número:");
console.log("O número informado foi " + numero);

// 3. Solicitar dois números e imprimir a soma
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
console.log("A soma dos números é " + soma);

// 4. Solicitar as 4 notas bimestrais e mostrar a média
let nota1 = parseFloat(prompt("Digite a nota do primeiro bimestre:"));
let nota2 = parseFloat(prompt("Digite a nota do segundo bimestre:"));
let nota3 = parseFloat(prompt("Digite a nota do terceiro bimestre:"));
let nota4 = parseFloat(prompt("Digite a nota do quarto bimestre:"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média das notas é " + media.toFixed(2));

// 5. Converter metros para centímetros
let metros = parseFloat(prompt("Digite o valor em metros:"));
let centimetros = metros * 100;
console.log(metros + " metros é igual a " + centimetros.toFixed(2) + " centímetros.");

// 6. Solicitar o raio de um círculo, calcular e mostrar a área
let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area = Math.PI * Math.pow(raio, 2);
alert("A área do círculo com raio " + raio + " é " + area.toFixed(2));
// 7.Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário
let lado = parseFloat(prompt("Digite o comprimento do lado do quadrado:"));
let area = Math.pow(lado, 2);
let dobroArea = 2 * area;
alert("O dobro da área do quadrado é " + dobroArea.toFixed(2));
// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês
let ganhoPorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salario = ganhoPorHora * horasTrabalhadas;
alert("O total do seu salário no mês é R$ " + salario.toFixed(2));
// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9)
let fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
let celsius = 5 * ((fahrenheit - 32) / 9);
alert("A temperatura de " + fahrenheit + " graus Fahrenheit é igual a " + celsius.toFixed(2) + " graus Celsius.");
// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
let fahrenheit = (celsius * 9 / 5) + 32;
alert("A temperatura de " + celsius + " graus Celsius é igual a " + fahrenheit.toFixed(2) + " graus Fahrenheit.");
// 11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.
let primeiroNumero = parseInt(prompt("Digite o primeiro número inteiro:"));
let segundoNumero = parseInt(prompt("Digite o segundo número inteiro:"));
let numeroReal = parseFloat(prompt("Digite um número real:"));
let produto = (2 * primeiroNumero) * (segundoNumero / 2);
let soma = (3 * primeiroNumero) + numeroReal;
let cubo = Math.pow(numeroReal, 3);
alert("Produto do dobro do primeiro número com a metade do segundo: " + produto);
alert("Soma do triplo do primeiro número com o terceiro: " + soma);
alert("O terceiro número elevado ao cubo: " + cubo.toFixed(2));
// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = parseFloat(prompt("Digite a sua altura em metros:"));
let pesoIdeal = (72.7 * altura) - 58;
alert("O seu peso ideal é " + pesoIdeal.toFixed(2) + " kg.");
// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
let altura = parseFloat(prompt("Digite a sua altura em metros:"));
let genero = prompt("Digite o seu gênero (homem ou mulher):").toLowerCase();
let pesoIdeal;
if (genero === "homem") {
  pesoIdeal = (72.7 * altura) - 58;
} else if (genero === "mulher") {
  pesoIdeal = (62.1 * altura) - 44.7;
} else {
  alert("Gênero inválido. Por favor, insira 'homem' ou 'mulher'.");
}
if (pesoIdeal !== undefined) {
    alert("O seu peso ideal é " + pesoIdeal.toFixed(2) + " kg.");
}
// 14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas
let peso = parseFloat(prompt("Digite o peso dos peixes em quilos:"));
const limitePeso = 50;
const valorMultaPorQuilo = 4;
let excesso = peso > limitePeso ? peso - limitePeso : 0;
let multa = excesso * valorMultaPorQuilo;
if (excesso > 0) {
  alert("Peso excedente: " + excesso.toFixed(2) + " quilos\n" +
        "Multa a ser paga: R$ " + multa.toFixed(2));
} else {
  alert("Não há excesso de peso. Não há multa a ser paga.");
}
// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//salário bruto.
//quanto pagou ao INSS.
//quando pagou para o sindicato.
//o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
//Salário Bruto : R$
//INSS (8%) : R$
//Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let ganhoPorHora = parseFloat(prompt("Digite quanto você ganha por hora (R$):"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioBruto = ganhoPorHora * horasTrabalhadas;
let inss = salarioBruto * 0.08;
let sindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - inss - sindicato;
alert("Salário Bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
  "INSS (8%): R$ " + inss.toFixed(2) + "\n" +
  "Sindicato (5%): R$ " + sindicato.toFixed(2) + "\n" +
  "Salário Líquido: R$ " + salarioLiquido.toFixed(2));