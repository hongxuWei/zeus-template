import * as React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { createBrowserHistory } from "history"

import Popup from './pages/Popup'
import NewTab from './pages/NewTab'

class Test extends React.PureComponent {
  render() {
    return <div>{1231323}</div>
  }
}

const history = createBrowserHistory()

class Router extends React.PureComponent {
  render() {
    return (
      <HashRouter>
        <Route exact
          path="/"
          history={history}
          component={Test} />
        <Route exact
          path="/popup"
          history={history}
          component={Popup} />
        <Route exact
          path="/newtab"
          history={history}
          component={NewTab} />
      </HashRouter>
    )
  }
}

export default Router
