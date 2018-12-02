import React from 'react'
import Header from '../../components/Header'
import {connect} from 'react-redux'

const Home=(props)=>{
  return (
    <div>
      <Header/>
      <div>this is {props.name}</div>
      <button onClick={()=>{alert('clicked!')}}>click</button>
    </div>
    
  )
}


const mapStateToProps=state=>({
  name:state.name
})

export default connect(mapStateToProps,null)(Home)