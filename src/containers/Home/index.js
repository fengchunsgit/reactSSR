import React,{Component} from 'react'
import Header from '../../components/Header'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'

class Home extends Component{

  getList(){
    const {list} =this.props;
    return list.map(item=><div key={item.id}>{item.title}</div>)
  }

  render(){
      return (
      <div>
        <Header/>
        {this.getList()}
        <button onClick={()=>{alert('clicked!')}}>click</button>
      </div>
    )
  }

  componentDidMount(){
    if(!this.props.list.length){
      this.props.getHomeList();
    }
  }
}

Home.loadData=(store)=>{
  //负责在服务端渲染之前，把数据提前加载好
  return store.dispatch(getHomeList())
}

const mapStateToProps=state=>({
  list:state.home.newsList
})

const mapDispatchToProps=dispatch=>({
  getHomeList(){
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)