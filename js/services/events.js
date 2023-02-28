import { baseUrl} from "../variables.js";

async function getEventCreate(userName) {
    /* const response = await fetch(`${baseUrl}${userName}/events?per_page=${repositoriesQuantity}`); */
    //const responseEventCreate = await fetch (`${baseUrl}/users/:username/events?event_type=create&per_page=10`)
    const responseEventCreate = await fetch (`${baseUrl}${userName}/events?&per_page=10`)

    return await responseEventCreate.json() 
}

async function getEventPush(userName){

    //const responseEventPush = await fetch(`${baseUrl}/users/:username/events?event_type=Push&per_page=10`)
    const responseEventPush = await fetch (`${baseUrl}${userName}/events?&per_page=10`)
    return  await responseEventPush.json()
}




export{ getEventCreate, getEventPush }