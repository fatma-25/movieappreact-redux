import {ADD,DELETE,EDIT,SEARCH,RATING} from '../Const'

const initState={
list:[{
  id: 1,
  title: 'me before u',
  image: 'https://pbs.twimg.com/media/ClLg4ABUoAA0EFO.jpg',
  star: 4
}],
serachvalue:"",
star:""
}

const Reducer = (state = initState,action)=>{
switch(action.type){
    case ADD: 
    // return state.concat(action.payload)
    return Object.assign({}, state, { list: state.list.concat(action.payload) });
   
  
    case DELETE:
        // return state.filter(e=> e.key !== action.payload)
        return Object.assign({}, state, { list: state.list.filter(e=> e.key !== action.payload) });

case EDIT:
    // return state.map(e=>e.key===action.payload.id ? {...e,edit:!e.edit,title:action.payload.newtitle} : e)
    return Object.assign({}, state, { list: state.list.map(e=>e.key===action.payload.id ? {...e,edit:!e.edit,title:action.payload.newtitle} : e) });


case SEARCH :
  return {...state,serachvalue : action.payload}
    
case RATING:
  return {...state,
    star:action.payload,
   
  }

//   case SEARCH :
//   return {serachvalue : action.payload,
//     list: state.list.filter(e=> e.title.toLowerCase().includes(state.serachvalue.toLowerCase())) };
// //        return state.filter(e=> e.title.toLowerCase().includes(action.payload.toLowerCase()))
        
// case RATING:
//   return {
//     star:action.payload,
//     list: state.list.filter(e=>e.star>=state.star)
//   }

default: return state
}

}

export default Reducer