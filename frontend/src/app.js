import React from'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Login from './components/auth/login'

import NewClient from './components/clients/NewClient'
import EditClient from './components/clients/EditClient'
import ClientsIndex from './components/clients/ClientsIndex'

import NewReferral from './components/referrals/NewReferral'
import Home from './pages/home'

import './styles.scss'

class App extends React.Component {
  render() {
    return (
      <HashRouter>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/clients/new" component={NewClient} />
          <Route path="/clients/:id" component={EditClient} />
          <Route path="/clients" component={ClientsIndex} />
          <Route path="/referrals/new" component={NewReferral} />
          <Route path="/" component={Home} />
        </Switch>

      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
