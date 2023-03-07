
import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import {user} from "./objects/user.js"
import { screen } from "./objects/screen.js";
import { getEvents } from "./services/events.js";

document.getElementById("btn-search").addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if(validateEmptyInput(userName)) return;
    getUserData(userName);
})

document.getElementById("input-search").addEventListener('keyup', (e) => {
    
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)){ return};
        getUserData(userName);
    }
})


function validateEmptyInput(userName){
     if(userName.length === 0){
         alert('preencha o campo com o nome de um usuario do Git Hub')
         return true
     }

}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound();
        return;
    }

    const repositoriesResponse = await getRepos(userName)
   
    const eventsResponse = await getEvents(userName)
   

    user.setInfo(userResponse)
    
    user.setRepositories(repositoriesResponse)
    
    user.setEvents(eventsResponse)
   
    screen.renderUser(user)
   
}




// EVENTOS = https://api.github.com/users/octocat/received_events


// Ajustar Nomes de variaveis e arquivos

// testar para ver se algumas partes do codigo 

// Remover comentarios

// perguntar para ver se deveria ficar igual ao enunciado do exercicio

// perguntar se é preciso mostrar todas as linguagens