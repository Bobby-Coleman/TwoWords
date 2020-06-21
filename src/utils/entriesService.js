import tokenService from './tokenService'

const BASE_URL = '/api/entries'

const create = (entry) => {
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(entry)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}


const index = () => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

const deleteOne = (entryId) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(`${BASE_URL}/${entryId}`, options).then(res => res.json())
}

const update = (updatedEntryData, entryId) => {
    return fetch(`${BASE_URL}/${entryId}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(updatedEntryData)
    }).then(res => res.json())
}

export default {
    create,
    index,
    deleteOne,
    update
}