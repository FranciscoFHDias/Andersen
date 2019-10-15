import jwt from  'jsonwebtoken'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static setUser(user) {
    localStorage.setItem('user', user)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static removeToken() {
    localStorage.removeItem('token')
  }

  static removeUser() {
    localStorage.removeItem('user')
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  static isAuthenticated() {
    return !!this.getToken()
  }

  static isCurrentUser(user) {
    const payload = this.getPayload()
    return payload && user._id === payload.sub
  }
}

export default Auth
