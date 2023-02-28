
import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import {user} from "./objects/user.js"
import { screen } from "./objects/screen.js";
import { getEventCreate, getEventPush } from "./services/events.js";

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
   

    const eventsResponseCreate = await getEventCreate(userName)
    const eventsResponsePush = await getEventPush(userName)

    user.setInfo(userResponse)
    
    user.setRepositories(repositoriesResponse)  

    user.setEventsCreate(eventsResponseCreate)
    user.setEventsPush(eventsResponsePush)

    screen.renderUser(user)

   
}

// EVENTOS = https://api.github.com/users/devemdobro/event