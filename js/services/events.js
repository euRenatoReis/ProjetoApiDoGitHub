/* import { baseUrl, repositoriesQuantity } from "../variables.js";



async function getEventCreate(userName) {
    const pegandoEventCreate = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`);
    const responseEventCreate = await pegandoEventCreate.json();
    const createEvents = responseEventCreate.filter(event => event.type === 'CreateEvent');

     return createEvents
   
}

/* async function getEventCreate(userName) {
    const responseEventCreate = await fetch(`${baseUrl}${userName}/received_events`); 
    return await responseEventCreate.json()
} */

/* async function getEventPush(userName) {
    const responseEventPush = await fetch(`${baseUrl}${userName}/received_events`);
    return await responseEventPush.json()
} 

export { getEventCreate/* , getEventPush  } */