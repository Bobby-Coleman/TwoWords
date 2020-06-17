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


export default {
    create,
}
  