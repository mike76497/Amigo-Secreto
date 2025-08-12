// Lista donde se guardarán los nombres
let amigos = [];

// Función para agregar amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(nombre);
    input.value = ''; // limpiar campo
    mostrarLista();
}

// Mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpiar contenido previo

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
