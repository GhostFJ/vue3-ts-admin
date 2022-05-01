import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'


export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

// 创建一个新的 store 实例
const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


