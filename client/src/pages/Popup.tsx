import * as React from 'react'
import { Card } from 'antd'
import { observer, inject } from 'mobx-react'
import { PopupStore } from '../stores/popup.store'

import * as style from "./Popup.less"
console.log(style)
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
  };

  componentDidMount() {
    this.injected.popupStore.fetchPopupList()
  }

  render() {
    return (
      <Card>
        <div className={style.popup}>
          <section>
            <h4 className={style.popupTitle}>工具</h4>
            <div className={style.popupIcons}>
              <div className={style.popupIconsItem} data-on="click:goAdBlock">
                <div className={`${style.popupIconsItemIcon} ${style.adBlock}`}></div>
                <p className={style.popupIconsItemText}>广告过滤</p>
              </div>
            </div>
          </section>
        </div>
      </Card>
    )
  }
}

export default Popup
