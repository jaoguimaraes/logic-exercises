let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleButton() {
    console.log('O botão foi clicado!');
}

function alertButton() {
    alert('Eu amo JS');
}

function promptButton() {
   let cidade = prompt('Qual é o nome da sua cidade?');

   if (cidade) {
    alert('Estive em ' + cidade + ' e lembrei de você')
   }
}

function somaButton() {
    let numero1 = parseFloat(prompt('Digite o primeiro número'));
    let numero2 = parseFloat(prompt('Entre com outro número inteiro'));

    soma = (numero1+numero2);

    alert('A soma dos dois número é: ' + soma);
}