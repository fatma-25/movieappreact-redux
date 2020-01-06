import React from 'react'
import { connect } from 'react-redux';
import {deleteMovie,editMovie} from '../Action'
// import Raiting from './raiting'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Movielist from './Movielist'







class List extends React.Component{
    constructor(){
        super()
        this.state={
edit:""
        }
    }

    handleEdit=e=>{
this.setState({
    edit:e.target.value
})
    }

 render(){
    return (
        <div className='d-flex flex-wrap'>
          {
            this.props.list.filter(e=> e.title.toLowerCase().includes(this.props.serachvalue.toLowerCase())&& e.star>=this.props.star).map(e => 
             
                <div className="card m-4" style={{width: "18rem"}} key={e.key}>
     {/* <Raiting/> */}
                <img src={e.image} className="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div className="card-body">
                  <h5 className="card-title">{e.edit ? <input type="text" value={this.title} onChange={this.handleEdit}/> : e.title}</h5>
                  <h5 className="card-title">{e.star}</h5>
                  <button onClick={()=>this.props.deleteMovie(e.key)}>remove</button>
                  <button onClick={()=>this.props.editMovie({id:e.key, newtitle:this.state.edit})}>edit</button>
                 {/* <button>description</button> */}
              

                 <Link to='/Movielist'>  <button>description</button></Link>
                 <Route path="/Movielist" render={() => <Movielist />} />
                 {/* <Route path='./Movielist' Component={Movielist}></Route>  */}
                  </div>
                 </div>
           
             )


 } </div>

    )}}

    const s=state=>{
       return {...state}
    }

    const d = (dispatch)=>{
return{
    deleteMovie:(payload)=>{dispatch(deleteMovie(payload))},
    editMovie:(payload)=>{dispatch(editMovie(payload))}
}
}

export default connect(s,d)(List)