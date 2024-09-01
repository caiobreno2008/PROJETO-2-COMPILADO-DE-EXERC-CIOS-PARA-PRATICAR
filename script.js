// 1. Mostrar a mensagem "Olá mundo"
console.log("Olá mundo");

// 2. Solicitar um número e mostrar a mensagem
let numero = 7; // Exemplo de número fixo
console.log("O número informado foi " + numero);

// 3. Solicitar dois números e imprimir a soma
let numero1 = 10; // Exemplo do primeiro número
let numero2 = 20; // Exemplo do segundo número
let soma = numero1 + numero2;
console.log("A soma dos números é " + soma);

// 4. Solicitar as 4 notas bimestrais e mostrar a média
let nota1 = 7.5; // Exemplo da nota do primeiro bimestre
let nota2 = 8.0; // Exemplo da nota do segundo bimestre
let nota3 = 9.0; // Exemplo da nota do terceiro bimestre
let nota4 = 6.5; // Exemplo da nota do quarto bimestre
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média das notas é " + media.toFixed(2));

// 5. Converter metros para centímetros
let metros = 2.5; // Exemplo de valor em metros
let centimetros = metros * 100;
console.log(metros + " metros é igual a " + centimetros.toFixed(2) + " centímetros.");

// 6. Solicitar o raio de um círculo, calcular e mostrar a área
let raio = 5; // Exemplo de raio do círculo
let area = Math.PI * Math.pow(raio, 2);
console.log("A área do círculo com raio " + raio + " é " + area.toFixed(2));

// 7. Calcular o dobro da área de um quadrado
let lado = 4; // Exemplo do comprimento do lado do quadrado
let areaQuadrado = Math.pow(lado, 2);
let dobroArea = 2 * areaQuadrado;
console.log("O dobro da área do quadrado é " + dobroArea.toFixed(2));

// 8. Calcular o salário no mês
let ganhoPorHora = 25; // Exemplo de quanto se ganha por hora
let horasTrabalhadas = 160; // Exemplo do número de horas trabalhadas no mês
let salario = ganhoPorHora * horasTrabalhadas;
console.log("O total do seu salário no mês é R$ " + salario.toFixed(2));

// 9. Converter Fahrenheit para Celsius
let fahrenheit = 75; // Exemplo de temperatura em Fahrenheit
let celsius = 5 * ((fahrenheit - 32) / 9);
console.log("A temperatura de " + fahrenheit + " graus Fahrenheit é igual a " + celsius.toFixed(2) + " graus Celsius.");

// 10. Converter Celsius para Fahrenheit
let celsius2 = 25; // Exemplo de temperatura em Celsius
let fahrenheit2 = (celsius2 * 9 / 5) + 32;
console.log("A temperatura de " + celsius2 + " graus Celsius é igual a " + fahrenheit2.toFixed(2) + " graus Fahrenheit.");

// 11. Calcular o produto e soma com o número real
let primeiroNumero = 4; // Exemplo do primeiro número inteiro
let segundoNumero = 6; // Exemplo do segundo número inteiro
let numeroReal = 3.5; // Exemplo do número real
let produto = (2 * primeiroNumero) * (segundoNumero / 2);
let soma = (3 * primeiroNumero) + numeroReal;
let cubo = Math.pow(numeroReal, 3);
console.log("Produto do dobro do primeiro número com a metade do segundo: " + produto);
console.log("Soma do triplo do primeiro número com o terceiro: " + soma);
console.log("O terceiro número elevado ao cubo: " + cubo.toFixed(2));

// 12. Calcular o peso ideal
let altura = 1.75; // Exemplo de altura em metros
let pesoIdeal = (72.7 * altura) - 58;
console.log("O seu peso ideal é " + pesoIdeal.toFixed(2) + " kg.");

// 13. Calcular o peso ideal conforme o gênero
let altura2 = 1.75; // Exemplo de altura em metros
let genero = "homem"; // Exemplo de gênero
let pesoIdeal2;
if (genero === "homem") {
  pesoIdeal2 = (72.7 * altura2) - 58;
} else if (genero === "mulher") {
  pesoIdeal2 = (62.1 * altura2) - 44.7;
} else {
  console.log("Gênero inválido. Por favor, insira 'homem' ou 'mulher'.");
}
if (pesoIdeal2 !== undefined) {
    console.log("O seu peso ideal é " + pesoIdeal2.toFixed(2) + " kg.");
}

// 14. Calcular excesso de peso e multa
let pesoPeixes = 55; // Exemplo do peso dos peixes em quilos
const limitePeso = 50;
const valorMultaPorQuilo = 4;
let excesso = pesoPeixes > limitePeso ? pesoPeixes - limitePeso : 0;
let multa = excesso * valorMultaPorQuilo;
if (excesso > 0) {
  console.log("Peso excedente: " + excesso.toFixed(2) + " quilos\n" +
        "Multa a ser paga: R$ " + multa.toFixed(2));
} else {
  console.log("Não há excesso de peso. Não há multa a ser paga.");
}

// 15. Calcular salário com descontos
let ganhoPorHora2 = 30; // Exemplo de quanto se ganha por hora (R$)
let horasTrabalhadas2 = 160; // Exemplo do número de horas trabalhadas no mês
let salarioBruto = ganhoPorHora2 * horasTrabalhadas2;
let inss = salarioBruto * 0.08;
let sindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - inss - sindicato;
console.log("Salário Bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
  "INSS (8%): R$ " + inss.toFixed(2) + "\n" +
  "Sindicato (5%): R$ " + sindicato.toFixed(2) + "\n" +
  "Salário Líquido: R$ " + salarioLiquido.toFixed(2));
