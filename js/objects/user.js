
const user = {
 
    avatarUrl: '',  
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers : '',
    following : '',
    eventsCreate: [],
    EventsPush:[],
    quantidadeForks: '',
    quantidadeEstrelas:'',
    
    setInfo(gitHubUser){
         this.avatarUrl = gitHubUser.avatar_url
         this.name = gitHubUser.name
         this.bio = gitHubUser.bio
         this.userName = gitHubUser.login
         this.followers = gitHubUser.followers
         this.following = gitHubUser.following
         this.quantidadeForks = gitHubUser.forks_count
         this.quantidadeEstrelas = gitHubUser.stars_count
    }
    ,
    setRepositories(repositories){
       this.repositories = repositories
    }
    ,
    setEventsCreate(ref_event){
       this.eventsCreate = ref_event.type
    }
    ,
    setEventsPush(commits){
       this.EventsPush = commits.type
    }
 
}


export { user }