import {renderToString} from 'react-dom/server'
import {StaticRouter,Route,matchPath} from 'react-router-dom'
import routes from '../Routes'
import React from 'react'
import {Provider} from 'react-redux'
import getStore from '../store'
import {matchRoutes} from 'react-router-config'

export const render=(req)=>{
  const store=getStore()
  const matchedRoutes=matchRoutes(routes,req.path)
  //这里拿到异步数据，填充到store
  //store里面填什么，需要结合用户请求地址和路由做判断
  //如果访问 /
  //如果访问/login
  //根据路由的路径，来往store加数据
  
  const content=renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
        {routes.map(route=>(
          <Route {...route}/>
        ))}
        </div>
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