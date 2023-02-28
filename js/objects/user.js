
const user = {
 
    avatarUrl: '',  
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers : '',
    following : '',
    eventsCreate: [],
    EventsPush: [],
    quantidadeForks: '',
    quantidadeEstrelas:'',
    quantidadeWatchers: '',
    linguagem: '',
    
    setInfo(gitHubUser){
         this.avatarUrl = gitHubUser.avatar_url
         this.name = gitHubUser.name
         this.bio = gitHubUser.bio
         this.userName = gitHubUser.login
         this.followers = gitHubUser.followers
         this.following = gitHubUser.following
         
    }
    ,
    setRepositories(repositories){
       this.repositories = repositories
       this.quantidadeForks = repositories.forks_count
       this.quantidadeEstrelas = repositories.stargazers_count
       this.quantidadeWatchers = repositories.watchers_count
    }
    ,
    setEventsCreate(repositories){
       this.eventsCreate = repositories.CreateEvent
    }
    ,
    setEventsPush(repositories){
       this.EventsPush = repositories.PushEvent
    }
 
}


export { user }