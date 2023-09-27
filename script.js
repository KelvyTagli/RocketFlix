"use strict"
// const key = 'f070b87bec9da898ca41775f2b07b43e';
const buttonSearch = document.querySelector('#button-search');
const infoFilme = document.querySelector('.filme');

//Event
buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();
    responseApi();
})

//function
const showFilme = (dados) => {

    console.log(dados);

    const poster = document.createElement('img');
    poster.classList.add('poster');
    poster.setAttribute('src', `${dados.belongs_to_collection.poster_path}`);
    infoFilme.appendChild(poster);

    const info = document.createElement('div');
    info.classList.add('info');

    const titulo = document.createElement('h3');
    titulo.classList.add('titulo');
    titulo.innerText = dados.original_title;
    info.appendChild(titulo);

    const descricao = document.createElement('p');
    descricao.classList.add('descricao');
    descricao.innerText = dados.overview;
    info.appendChild(descricao);

    infoFilme.appendChild(info);
}

const responseApi = async () => {
    const url = 'https://api.themoviedb.org/3/movie/11?api_key=f070b87bec9da898ca41775f2b07b43e';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const dados = await response.json();
            showFilme(dados);
        }
    } catch (ex) {
        console.log(`Erro ${ex}`);
    }
}