import axios from 'axios'
import {CHANGE_LIST} from './constants'

const changeList=(list)=>({
  type:CHANGE_LIST,
  list
})

export const getHomeList=()=>{
  // http://localhost:8887/api/news.json
  return (dispatch)=>{
    return axios.get('/api/news.json')
    .then((res)=>{
      const list=res.data.data;
      dispatch(changeList(list))
    });
  }
}