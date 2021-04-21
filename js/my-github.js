// Write code here to communicate with Github
// 1. Encontrar el endpoint apropiado.
// 2. Instalar la librería fetch en el proyecto
// 3. Saber como llamar con la librería fetch a github.
// 4. Saber como extraer información de la respuesta.

const url = "https://api.github.com/users/adriansiv/repos";

const ul = document.getElementById("repos-list");
const numberOfRepos = document.getElementById("repos-count");

fetch(url)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const { name, svn_url } = repo;

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", svn_url);
      li.className = "list-inline list-social-icons mb-0";
      a.innerText = name;

      li.appendChild(a);
      ul.appendChild(li);
    });
    numberOfRepos.innerText = repos.length;
  })
  .catch(error => console.log("error"));
