import { baseUrl, eventsQuantity } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}${userName}/events?per_page=${eventsQuantity}`)
    const events = await response.json()

    const onlyCreateAndPushEvents = events.filter(event => {
        return event.type === 'CreateEvent' || event.type === 'PushEvent'
    })
    
    return onlyCreateAndPushEvents
}

export { getEvents }
