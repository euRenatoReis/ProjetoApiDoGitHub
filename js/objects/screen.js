
const screen = {

    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = ` <div class="info">
                                               <img src="${user.avatarUrl}" alt="foto do perfil do usuario"> 
                                               <div class="data"> 
                                                  <h1> ${user.name ?? "Nome de usuario não cadastrado"} </h1>
                                                  <p>  ${user.bio ?? "Bio não cadastrada"} </p>
                                                  <p> Seguidores: ${user.followers  ?? 'Numero De Seguidores Não Encontrado'} 👥 </p> 
                                                  <p> Seguindo: ${user.following   ?? 'Numero De Pessoas que Segue Não Encontrado'} 👥</p>                                               
                                               </div> 
                                           </div>`;

        let repositoriesItems = "";
        user.repositories.forEach(repo => repositoriesItems +=
            `<li><a href="${repo.html_url}" target="_blank"> ${repo.name} 
               <div class="detalhes-repositorio">
                  <p> ⭐: ${repo.stargazers_count ?? 'Numero De Estrelas Não Encontrado'} </p> 
                  <p> 🍴: ${repo.forks_count ?? 'Numero De Forks Não Encontrado'} </p> 
                  <p> 👀: ${repo.watchers_count ?? 'Numero De Watchers Não Encontrado'} </p> 
                  <p> 🖥: ${repo.language ?? 'linguagem de programação não encontrada'}</p>
                </div> 
               </a>
             </li> 
            `)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                 <h2>Repositórios</h2>                                      
                                                 <ul>${repositoriesItems}</ul>
                                           </div> `
        }

        //evento create

        let eventsCreateOfProfile = '';
        user.eventsCreate.forEach(event => {

            const nomeEvento = event.repo.name

            eventsCreateOfProfile +=

                `<li><a href='${eventsCreate.html_url}' target='_blank'> ${eventsCreate.name} </a>

               <p>Eventos Create: ${nomeEvento ?? 'Eventos Do Tipo Create não Encontrado'}</p>

            </li>`;

            if (event.type === "CreateEvent") {
                const pegaNome = event.payload.commits[0].message;

                eventsCreateOfProfile += `<li>${nomeEvento} <span> ${pegaNome} </span> </li>`
            }

        })

        if (user.eventsCreate.length > 0) {
            this.userProfile.innerHTML += `<div class='events section'>
                                                <h2> Eventos do Tipo Create </h2>
                                                <ul>${eventsCreateOfProfile}</ul>
                                           </div>`
        }


        //evento push

        let eventsPushOfProfile = '';
        user.eventsPush.forEach(event => {

            const nomeEvento = event.repo.name

            eventsPushOfProfile +=

                `<li><a href='${eventsPush.html_url}' target='_blank'> ${eventsPush.name} </a>

               <p>Eventos Create: ${nomeEvento ?? 'Eventos Do Tipo Create não Encontrado'}</p>

            </li>`;

            if (event.type === "CreateEvent") {
                const pegaNome = event.payload.description;

                eventsCreateOfProfile += `<li>${nomeEvento} <span> ${pegaNome} </span> </li>`
            }

        })

        if (user.eventsCreate.length > 0) {
            this.userProfile.innerHTML += `<div class='events section'>
                                                <h2> Eventos do Tipo Create </h2>
                                                <ul>${eventsPushOfProfile}</ul>
                                           </div>`
        }
    },


    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
    }
}

export { screen };