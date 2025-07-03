function exemplo1() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa;

  while (tentativa != numeroSecreto) {
    tentativa = prompt("Adivinhe o número secreto (1 a 10):");
    if (tentativa == numeroSecreto) {
      alert("Parabéns! Você acertou.");
    } else {
      alert("Errado! Tente novamente.");
    }
  }
}

function exemplo2() {
  const quantidade = parseInt(prompt("Quantos números você quer calcular a média?"));
  let soma = 0;

  for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    soma += numero;
  }

  let media = soma / quantidade;
  alert(`A média dos números é: ${media}`);
}

function exemplo3() {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  const resultado = num1 + num2;
  alert(`A soma é: ${resultado}`);
}
