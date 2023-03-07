
import { baseUrl, repositoriesQuantity } from "../variables.js";

async function getRepos(userName) {
  const response = await fetch(`${baseUrl}${userName}/repos?per_page=${repositoriesQuantity}`);

  getStars(response)
  getForks(response)
  getWatchers(response)

  return await response.json();
}

async function getStars(response) {
  const pegaStars = response.stargazers_count
  return pegaStars
}

async function getForks(response) {
  const pegaForks = response.forks_count
  return pegaForks
}

async function getWatchers(response) {
  const pegawatchers = response.watchers_count
  return pegawatchers
}


export { getRepos }