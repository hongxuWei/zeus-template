import userStore, { UserStore } from './user.store'

export type RootStore = {
  userStore: UserStore
}

export default {
  userStore
}
