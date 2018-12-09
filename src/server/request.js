import axios from 'axios'

const createInstance =(req)=>axios.create({
  baseURL:'http://localhost:8887/',
  headers:{
    cookie:req.get('cookie') || ''
  }
})

export default createInstance