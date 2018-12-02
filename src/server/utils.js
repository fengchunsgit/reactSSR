import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Routes from '../Routes'
import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

export const render=(req)=>{

  const reducer=(state={name:'lee'},action)=>{
    return state
  }
  const store =createStore(reducer,applyMiddleware(thunk))

  const content=renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))

  return `
  <html>
    <head><title>SS0R</title></head>
    <body>
    <div id='root'>${content}</div>
      <script src="./index.js"></script>
    </body>
  </html>
  `
}