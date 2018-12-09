import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getTranslationList} from './store/actions'
import { Redirect } from "react-router-dom";


class Translation extends Component{

  render(){
    return <div>translations</div>
  }

  getList(){
    const {list} =this.props; 
    return list.map(item=><div key={item.id}>{item.title}</div>)
  }

  render(){
    return this.props.login?
          (<div>
            {this.getList()}
          </div>):( <Redirect to='/'/>)
  }

  componentDidMount(){
    if(!this.props.list.length){
      this.props.getTranslationList(false);
    }
  }
}

Translation.loadData=(store)=>{
  //负责在服务端渲染之前，把数据提前加载好
  return store.dispatch(getTranslationList())
}

const mapStateToProps=state=>({
  list:state.translation.translationList,
  login:state.header.login
})

const mapDispatchToProps=dispatch=>({
  getTranslationList(){
    dispatch(getTranslationList())
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Translation)
