import {CHANGE_LOGIN} from './constants'
const changeLogin=(value)=>({
  type:CHANGE_LOGIN,
  value:value
})


export const getHeaderInfo=()=>{

  // http://localhost:8887/api/isLogin.json
  
  let url='/api/isLogin.json'
  return (dispatch,getState,axiosInstance)=>{
    return axiosInstance.get(url)
    .then((res)=>{
      dispatch(changeLogin(res.data.data.login))
    });
  }
}