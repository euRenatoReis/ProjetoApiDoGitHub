
const screen = {

    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
           this.userProfile.innerHTML = ` <div class="info">
                                               <img src="${user.avatarUrl}" alt="foto do perfil do usuario"> 
                                               <div class="data"> 
                                                  <h1> ${user.name ?? "Nome de usuario não cadastrado"} </h1>
                                                  <p>  ${user.bio  ??  "Bio não cadastrada"} </p>
                                                  <p> Seguidores: ${user.followers ?? 'Numero De Seguidores Não Encontrado'} </p> 
                                                  <p> Seguindo: ${user.following ?? 'Numero De Pessoas que Segue Não Encontrado'} </p>                                               
                                               </div> 
                                           </div>`;

        let repositoriesItems = "";
        user.repositories.forEach(repo => repositoriesItems +=  
            `<li><a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
             <p> Numero de Estrelas: ${repo.stargazers_count ?? 'Numero De Estrelas Não Encontrado'} </p> 
             <p> Numero de Forks: ${repo.forks_count ?? 'Numero De Forks Não Encontrado'} </p> 
             <p> Numero de watchers: ${repo.watchers_count ?? 'Numero De Watchers Não Encontrado'} </p> 
             <p> Numero de Eventos Create: ${repo.CreateEvent ?? 'Numero de Eventos Do Tipo Create não Encontrado'}</p> 
             <p> Numero de Eventos Push: ${repo.PushEvent ?? 'Numero de Eventos Do Tipo Push não Encontrado'}</p> 
             <p> A linguagem De Programação: ${repo.language ?? 'Numero de Eventos Do Tipo Push não Encontrado'}</p>
             </li> 
            `)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                 <h2>Repositórios</h2>                                      
                                                 <ul>${repositoriesItems}</ul>
                                           </div> `
        }

        //a partir daqui é só gambiarra
       /*  let eventsCreateOfProfile = '';
        repositoriesItems.CreateEvent.forEach(event => eventsCreateOfProfile +=
            `<li><a href='${event.html_url}' target='_blank'> ${event.CreateEvent} </a></li>`)

        if(repositoriesItems.CreateEvent.length > 0){
            this.userProfile.innerHTML += `<div class='events section'>
                                                <h2> Eventos </h2>
                                                <ul>${eventsCreateOfProfile}</ul>
                                           </div>`
        }                       
        
        let eventsPushOfProfile = '';
        repositoriesItems.PushEvent.forEach(event => eventsPushOfProfile +=
            `<li><a href='${event.html_url}' target='_blank'> ${event.PushEvent} </a></li>`)

        if(repositoriesItems.PushEvent.length > 0){
            this.userProfile.innerHTML += `<div class='events section'>
                                                <h2> Eventos </h2>
                                                <ul>${eventsPushOfProfile}</ul>
                                           </div>`
        }                        */

    },


    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
    }
}

export { screen };