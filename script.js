"use strict"
const buttonSearch = document.querySelector('#button-search');
const infoFilme = document.querySelector('.hide');
const notFoundErro = document.querySelector('.erro');
//info filme
const poster = document.querySelector('#poster');
const titulo = document.querySelector('#titulo');
const descri = document.querySelector('#descricao');
//erro
const img = document.createElement('img');
const firstText = document.createElement('h3');
const secondText = document.createElement('h3');
const divErro = document.createElement('div');

//Event
buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();
    responseApi();
})

//function
const showFilme = (dados) => {

    img.remove();
    divErro.remove();
    infoFilme.classList.remove('hide');
    infoFilme.classList.add('filme');
    poster.setAttribute('src', `https://image.tmdb.org/t/p/w200/${dados.poster_path}`);
    titulo.innerText = dados.title;
    descri.innerText = dados.overview;
}

const showErro = () => {

    infoFilme.classList.remove('filme');
    infoFilme.classList.add('hide');

    img.setAttribute('src', './images/poster.png');
    notFoundErro.appendChild(img);

    firstText.innerText = 'Ops, hoje não é dia de assistir filme.';
    divErro.appendChild(firstText);

    secondText.innerText = 'Bora codar!';
    divErro.appendChild(secondText);

    divErro.classList.add('titleErro');
    notFoundErro.appendChild(divErro);
}

const responseApi = async () => {

    const numero = numAleatorio();
    const url = `https://api.themoviedb.org/3/movie/${numero}?api_key=f070b87bec9da898ca41775f2b07b43e&language=pt-BR`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const dados = await response.json();
            showFilme(dados);
        } else {
            showErro();
        }
    } catch (ex) {
        console.log(`Erro ${ex}`);
    }
}

const numAleatorio = () => {
    const number = Math.floor(Math.random() * 500);
    return number;
}