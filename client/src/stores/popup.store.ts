import { observable, action } from "mobx"

import * as services from '../services/Popup.service'
import { SUCCESS } from '../constants/response'

export class PopupStore {
  @observable popupList = []

  @action
  fetchPopupList() {
    services.getPopupData().then(res => {
      if (res.code === SUCCESS) {
        console.log(res)
      } else {
        console.log(res)
      }
    })
  }
}

export default (new PopupStore())
