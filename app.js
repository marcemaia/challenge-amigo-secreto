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

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('Por favor, adicione amigos antes de sortear.');
        return
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    listaAmigos = [];
}