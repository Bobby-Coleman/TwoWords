import tokenService from './tokenService'
const BASE_URL = '/api/users/'

const signup = (user) => {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Email already taken!')
    })
    .then(({token}) => tokenService.setToken(token))
}

const getUser = () => {
    return tokenService.getUserFromToken()
}

export default {
    signup, 
    getUser,
}
