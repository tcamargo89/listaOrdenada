const listaOrdenavel = document.getElementById("lista-ordenavel");
const botaoChecar = document.getElementById("checar");

const paisesMaisPopulosos = [
  "India",
  "China",
  "Estados Unidos",
  "Indonésia",
  "Paquistão",
  "Brasil",
  "Nigéria",
  "Bangladesh",
  "Rússia",
  "México",
];

//Armazena lista da lista ordenavel
const itensDaLista = [];

//Insere itens da lista na tela
function criaLista() {
  [...paisesMaisPopulosos]
    .map((item) => ({
      valor: item,
      ordem: Math.random(),
    }))
    .sort((a, b) => a.ordem - b.ordem)
    .map((a) => a.valor)
    .forEach((pais, indice) => {
      const item = document.createElement("li");

      item.setAttribute("data-indice", indice);

      item.innerHTML = `<span class="numero">${indice}</span>
      <div class='arrastavel' draggable='true'>
      <p class='nome-pais'>${pais}</p>
      <i class='fas fa-grip-lines'></i></div>
      `;

      itensDaLista.push(item);

      listaOrdenavel.appendChild(item);
    });
}

criaLista();
