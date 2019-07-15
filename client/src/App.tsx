import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { UserStore } from './stores/user.store'

import TestC from './components/Test'

interface IProps {
  userStore: UserStore
}

@inject('userStore')
@observer
class Test extends React.PureComponent {
  constructor(props: UserStore) {
    super(props)
  }

  get injected(): IProps {
    return this.props as IProps
  };

  componentDidMount() {
    this.injected.userStore.fetchUserInfo({ test: 1})
  }

  render() {
    const { userStore } = this.injected
    const { name } = userStore.userInfo
    return (
      <TestC text={name}/>
    )
  }
}

export default Test
