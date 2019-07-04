import * as React from 'react'
import * as services from './services/Test.service'
import { SUCCESS } from './constants/response'

import Test from './pages/Test'

class App extends React.PureComponent {
  state = {
    name: 'Home 2'
  }

  componentDidMount() {
    services.getTestData({test: 1}).then(res => {
      if (res.code === SUCCESS) {
        const { name } = res.data
        this.setState({ name })
      } else {
        console.log('err', res.message)
      }
    })
  }

  render() {
    const { name } = this.state
    return (
      <Test text={name}/>
    )
  }
}

export default App
