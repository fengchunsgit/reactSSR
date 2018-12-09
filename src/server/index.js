import express from 'express'
import {render} from './utils'
import {getStore} from '../store'
import routes from '../Routes'
import {matchRoutes} from 'react-router-config'
import proxy from 'express-http-proxy'

const app=express();
app.use(express.static('public'))

app.use('/api',proxy('http://localhost:8887', {
  proxyReqPathResolver: function (req) {
    return '/api'+req.url
  }
}));

app.get('*',function(req,res){
  const store=getStore(req)
  const matchedRoutes=matchRoutes(routes,req.path)
  // //这里拿到异步数据，填充到store
  // //store里面填什么，需要结合用户请求地址和路由做判断
  // //如果访问 /
  // //如果访问/login
  // //根据路由的路径，来往store加数据
  const promises=[]
  matchedRoutes.forEach(item=>{
    if(item.route.loadData){
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(()=>{
    res.send(render(store,routes,req))
  })
});

var server=app.listen(3000);
