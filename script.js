"use strict"
const buttonSearch = document.querySelector('#button-search');
const infoFilme = document.querySelector('.hide');
//info filme
const poster = document.querySelector('#poster');
const titulo = document.querySelector('#titulo');
const descri = document.querySelector('#descricao');
//Event
buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();
    infoFilme.classList.remove('hide');
    responseApi();
})

//function
const showFilme = (dados) => {
    poster.setAttribute('src', `https://image.tmdb.org/t/p/w200/${dados.poster_path}`);
    titulo.innerText = dados.title;
    descri.innerText = dados.overview;
    infoFilme.classList.add('filme');
}

const responseApi = async () => {

    const numero = numAleatorio();
    const url = `https://api.themoviedb.org/3/movie/${numero}?api_key=f070b87bec9da898ca41775f2b07b43e&language=pt-BR`;

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

const numAleatorio = () => {
    const number = Math.floor(Math.random() * 500);
    return number;
}