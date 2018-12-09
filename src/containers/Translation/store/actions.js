import {CHANGE_LIST} from './constants'

const changeList=(list)=>({
  type:CHANGE_LIST,
  list
})

export const getTranslationList=()=>{
  let url='/api/translations.json'
  return (dispatch,getState,axiosInstance)=>{
    return axiosInstance.get(url)
    .then((res)=>{
      if(res.data.success){
       const list=res.data.data 
       dispatch(changeList(list))
      }else{
        const list=[]
        dispatch(changeList(list))
      }
    });
  }
}