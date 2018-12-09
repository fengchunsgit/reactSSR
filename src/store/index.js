import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as homeReducer} from '../containers/Home/store'
import {reducer as headerReducer} from '../components/Header/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer =combineReducers({
  home:homeReducer,
  header:headerReducer
})
export const getStore=(req)=>{
  //改变服务器端store，那么一定要使用serverAxios
  return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export const getClientStore=()=>{
  //改变客户端store，那么一定要使用clientAxios
  const defaultState=window.context.state
  return createStore(reducer,defaultState,applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
