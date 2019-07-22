// import { observable, action } from "mobx"

// import { runInAction } from '../utils'
// import * as services from '../services/Popup.service'
// import { SUCCESS } from '../constants/response'

// const initUserInfo = {
//   id: -1,
//   name: '',
//   sex: -1
// }

// export class UserStore {
//   @observable userInfo = initUserInfo

//   @action
//   fetchUserInfo(params: object) {
//     services.getTestData(params).then(res => {
//       if (res.code === SUCCESS) {
//         runInAction(() => this.userInfo = res.data)
//       } else {
//         runInAction(() => this.userInfo = initUserInfo)
//       }
//     })
//   }
// }

// export default (new UserStore())
