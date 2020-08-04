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

