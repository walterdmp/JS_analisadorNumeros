let lista = document.getElementById("lista");
let resultado = document.getElementById("resultado");
let valores = [];

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) != -1;
}

function adicionar() {
  let campoNumero = document.getElementById("numero");
  let numero = parseInt(campoNumero.value);

  if (isNumero(numero) && !inLista(numero, valores)) {
    valores.push(numero);
    let item = document.createElement("option");
    item.text = `Valor ${numero} adicionado.`;
    lista.appendChild(item);
  } else {
    alert("Valor inválido ou já encontrado na lista.");
  }

  campoNumero.value = "";
  campoNumero.focus();
}

function finalizar() {
  if (valores.length === 0) {
    alert("Adicione valores antes de finalizar.");
  } else {
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    let media = soma / valores.length;

    resultado.innerHTML = ""; // Limpa o conteúdo anterior
    resultado.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`;
    resultado.innerHTML += `<p>Maior valor: ${maior}.</p>`;
    resultado.innerHTML += `<p>Menor valor: ${menor}.</p>`;
    resultado.innerHTML += `<p>Soma dos valores: ${soma}.</p>`;
    resultado.innerHTML += `<p>Média dos valores: ${media.toFixed(2)}</p>`;
  }
}
