let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else {
        listaAmigos.push(nome);
        console.log(listaAmigos);
        atualizarListaAmigos();
        limparCampo();
    }
}

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigos = listaAmigos[i];
        let li = document.createElement('li');
        li.textContent = amigos;
        lista.appendChild(li);
    }
}