import { initGlobalState, MicroAppStateActions  } from 'qiankun'

export const initState = {
  i18nLocale: ''
}

// 初始化 state
export const actions: MicroAppStateActions  = initGlobalState(initState)
