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

