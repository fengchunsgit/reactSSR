import axios from 'axios'
import {CHANGE_LIST} from './constants'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'


const changeList=(list)=>({
  type:CHANGE_LIST,
  list
})

export const getHomeList=(server)=>{

  // http://localhost:8887/api/news.json
  //浏览器运行
  // /api/news.json=http:localhost:3000/api/news.json
  //服务器运行
  // /api/news.json=服务器根目录下/api/news.json

  let url='/api/news.json'
  const request = server ? serverAxios : clientAxios
  return (dispatch)=>{
    return request.get(url)
    .then((res)=>{
      const list=res.data.data;
      dispatch(changeList(list))
    });
  }
}