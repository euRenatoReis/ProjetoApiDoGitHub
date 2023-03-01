import { baseUrl } from "../variables.js";



async function getEventCreate(userName) {
    const pegandoEventCreate = await fetch(`${baseUrl}${userName}event`);
    const responseEventCreate = await pegandoEventCreate.json();
    const eventosCreate = []


   await responseEventCreate.forEach(event => {
        
        const createEvents = data.filter(event => event.type === 'Create');

         eventosCreate = [createEvents]

        return eventosCreate
    });

    
}

async function getEventPush(userName) {
    const responseEventPush = await fetch(`${baseUrl}${userName}event?type='push'`);
    return await responseEventPush.json()
}

export { getEventCreate, getEventPush } 