import { baseUrl } from "../variables.js";



async function getEventCreate(userName) {
    const responseEventCreate = await fetch(`https://api.github.com/users${userName}event`);


    await fetch(responseEventCreate)
        .then(response => response.json())
        .then(data => {
           
            const createEvents = data.filter(event => event.type === 'Create');
            
            return createEvents
        })


    return await createEvents
}

async function getEventPush(userName) {
    const responseEventPush = await fetch(`${baseUrl}${userName}event?type='push'`);
    return await responseEventPush.json()
}

export { getEventCreate, getEventPush } 