import React from'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import NewClient from './components/clients/New'
import EditClient from './components/clients/Edit'
import ClientsIndex from './components/clients/Index'
import Home from './pages/home'

import './styles.scss'

class App extends React.Component {
  render() {
    return (
      <HashRouter>

        <Switch>
          <Route path="/clients/new" component={NewClient} />
          <Route path="/clients/:id" component={EditClient} />
          <Route path="/clients" component={ClientsIndex} />
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
