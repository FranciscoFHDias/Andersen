import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      navbarOpen: false,
      dropdownOpen: false
    }

    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  logout() {
    Auth.removeToken()
    Auth.removeUser()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        navbarOpen: false,
        dropdownOpen: false
      })
    }
  }

  render() {
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {Auth.isAuthenticated() && <Link to="/clients" className="navbar-item"><img src='https://i.imgur.com/Rn8qPeb.png' alt="logo"/></Link>}
          {!Auth.isAuthenticated() && <Link to="/" className="navbar-item"><img src='https://i.imgur.com/Rn8qPeb.png' alt="logo"/></Link>}

          <a
            role="button"
            className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {Auth.isAuthenticated() && <Link to="/clients" className="navbar-item">All Clients</Link>}
            {Auth.isAuthenticated() && <Link to="/clients/new" className="navbar-item">New Clients</Link>}
          </div>
          <div className="navbar-end">
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item"  onClick={this.logout}>Logout</a>}
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
