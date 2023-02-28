
import { baseUrl, repositoriesQuantity} from "../variables.js";

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}${userName}/repos?per_page=${repositoriesQuantity}`);

    return await response.json();
}

async function getWatchersStarsFork(forks_count,stargazers_count,watchers_count){

    const quantidadeFork = 0;
    const quantidadeEstrelas = 0;
    const quantidadeWatchers = 0;

    response.array.forEach(forks_count => {
    
        quantidadeFork++

        return quantidadeFork
    });

    response.array.forEach(watchers_count=> {

        quantidadeWatchers++

        return quantidadeWatchers
    })

    response.array.forEach(stargazers_count => {

        quantidadeEstrelas++

        return quantidadeEstrelas
    })

}

export{ getRepos, getWatchersStarsFork }