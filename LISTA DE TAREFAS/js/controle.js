let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if (valorInput !== "") {

        contador++;

        let novoItem = `
        <div id="${contador}" class="item">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <span id="icone_${contador}" class="material-symbols-outlined">
                    circle
                </span>
            </div>

            <div class="item-nome" onclick="marcarTarefa(${contador})">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">
                    <span class="material-symbols-outlined">delete</span>
                    Deletar
                </button>
            </div>
        </div>
        `;

        main.insertAdjacentHTML("beforeend", novoItem);

        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    if (tarefa) tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icone = document.getElementById('icone_' + id);

    if (!item.classList.contains('clicado')) {
        item.classList.add('clicado');
        icone.innerText = 'check_circle';

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado');
        icone.innerText = 'circle';
    }
}

// Enter adiciona tarefa
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
});
