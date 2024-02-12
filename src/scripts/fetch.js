const username = 'krzysiekkalinowski';
const direction = 'desc';
const repositoriesListing = document.querySelector(".repositories-listing--js")

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
    for (let repository of response) {
        const {name, html_url} = repository;
        const element = `<li class="repositories-listing__item"><a class="repositories-listing__link" rel="nofollow noopener noreferrer" target="_blank" href="${html_url}">Link do repozytorium ${name}</a></li>`;
        repositoriesListing.insertAdjacentHTML('beforeend', element);
    }
})