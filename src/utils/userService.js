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

const logout = () => {
    tokenService.removeToken();
} 

const login = (creds) => {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
  }

export default {
    signup, 
    getUser,
    logout,
    login,
}

