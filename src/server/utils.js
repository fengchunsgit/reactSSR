import {renderToString} from 'react-dom/server'
import {StaticRouter,Route,matchPath} from 'react-router-dom'

import React from 'react'
import {Provider} from 'react-redux'

export const render=(store,routes,req)=>{
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
        <head><title>SSR</title></head>
        <body>
        <div id='root'>${content}</div>
          <script src="./index.js"></script>
        </body>
      </html>
    `

}