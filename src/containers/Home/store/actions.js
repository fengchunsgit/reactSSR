import axios from 'axios'
import {CHANGE_LIST} from './constants'

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
  
  let url=''
  if(server){
      url='http://localhost:8887/api/news.json'
  }else{
      url='/api/news.json'
  }
  return (dispatch)=>{
    return axios.get(url)
    .then((res)=>{
      const list=res.data.data;
      dispatch(changeList(list))
    });
  }
}