import React from 'react'
import {searchMovie} from '../Action'
import {connect} from 'react-redux'

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(<div className='search'>
        <input type='text' value={this.state.search} onChange={(e)=> this.props.searchMovie(e.target.value)}/>

    </div>)
    }
}






const d =dispatch=>{
    return{
        searchMovie:(payload)=>{dispatch(searchMovie(payload))}
    }
}



export default connect(null,d)(Nav)