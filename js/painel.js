const TABELA = document.querySelector('#sensores tbody');
const LISTA_ALERTAS = document.querySelector('#lista-alertas');

async function carregarSensores() {
  const resposta = await fetch('dados/sensores.json');
  const sensores = await resposta.json();

  sensores.forEach(desenharLinha);
  sensores.forEach(verificarAlerta);
}

function converterTemperatura(leitura) {
  return (leitura - 32) * 5 / 9;
}

function desenharLinha(sensor) {
  const celsius = converterTemperatura(sensor.valor).toFixed(1);
  const tr = document.createElement('tr');

  tr.innerHTML =
    '<td>' + sensor.codigo + '</td>' +
    '<td>' + sensor.descricao + '</td>' +
    '<td>' + celsius + ' C</td>' +
    '<td>ok</td>';

  TABELA.appendChild(tr);
}

function verificarAlerta(sensor) {
  if (sensor.valor > 80) {
    const alerta = document.createElement('li');

    alerta.textContent =
      sensor.codigo + ' - ' +
      sensor.descricao +
      ': temperatura crítica';

    LISTA_ALERTAS.appendChild(alerta);
  }
}

function marcarAtualizacao() {
  document.querySelector('#atualizado').textContent =
    new Date().toLocaleString('pt-BR');
}

carregarSensores();
marcarAtualizacao();