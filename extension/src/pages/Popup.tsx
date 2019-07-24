import * as React from 'react'
import { Card } from 'antd'
import { observer, inject } from 'mobx-react'
import { PopupStore, PopItem } from '../stores/popup.store'

import * as style from "./Popup.less"

interface IProps {
  popupStore: PopupStore
}

@inject('popupStore')
@observer
class Popup extends React.PureComponent {
  constructor(props: PopupStore) {
    super(props)
  }

  get injected(): IProps {
    return this.props as IProps
  }

  componentDidMount() {
    this.injected.popupStore.fetchPopupList()
  }

  render() {
    const { popupList } = this.injected.popupStore
    return (
      <Card>
        <div className={style.popup}>
          {
            popupList.map((tools: PopItem) => (
              <section key={tools.title}>
                <h4 className={style.popupTitle}>{tools.title}</h4>
                <div className={style.popupIcons}>
                  <a className={style.popupIconsItem} href={tools.toolInfo.href}>
                    <div className={`${style.popupIconsItemIcon}`} style={{backgroundImage: `url(${tools.toolInfo.icon})`}}></div>
                    <p className={style.popupIconsItemText}>{tools.toolInfo.name}</p>
                  </a>
                </div>
              </section>
            ))
          }
        </div>
      </Card>
    )
  }
}

export default Popup
