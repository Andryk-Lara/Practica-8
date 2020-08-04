// Lista de Tareas

const tareas = ['Practica de Javascript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los trastos'];

// Agarrando el elemento por su ID

const contenedor = document.getElementById('wrapper');
const contenedorLista = document.createElement('ul');
contenedor.appendChild(contenedorLista);

for(let i = 0; i < 4; i++){
    const lista = document.createElement('li');
    contenedorLista.appendChild(lista);
    lista.className = 'lista';
}

//Creando input

const inputs = document.querySelectorAll('.lista');


for( let i = 0; i < inputs.length; i++){
    const inputs1 = document.createElement('input');
    inputs[i].appendChild(inputs1);
    inputs1.className = 'input';
}

//Dandole el tipo checkbox a los inputs

const checkbox = document.querySelectorAll('.input');

for(let i = 0; i < checkbox.length; i++){
    checkbox[i].setAttribute('type', 'checkbox');
    checkbox[i].setAttribute('id', 'tarea');
}

//Creando label

const label = document.querySelectorAll('.lista');

for( let i = 0; i < label.length; i++){
    const labels = document.createElement('label');
    label[i].appendChild(labels);
    labels.className = 'label';
}

const atributoLabel = document.querySelectorAll('.label');

for(let i = 0; i < atributoLabel.length; i++){
    atributoLabel[i].setAttribute('for', 'tarea');
}

//Agregando las tareas

const agregoTareas = document.querySelectorAll('.label');

for(let i = 0; i < tareas.length; i++){
    agregoTareas[i].innerHTML = tareas[i];
}