import React from 'react'
import {addstar} from '../Action'
import {connect} from 'react-redux'

const Raiting=(props)=>{

let stars=[]

for(let i=0;i<5;i++)
if(i<props.star)
stars.push(<span className='Star' onClick={() => props.addstar(i+1)} key={i}>★</span>)
else
stars.push(<span className='Star' onClick={() => props.addstar(i+1)} key={i}>☆</span>)
return(<div className="Raiting">
    {stars}
</div>)
}

const d =dispatch=>{
    return{
        addstar:(payload)=>{dispatch(addstar(payload))}
      }
      }

      const s=state=>{
          return {
              star:state.star
          }
      }

export default connect(s,d)(Raiting)