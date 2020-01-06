import {ADD,DELETE,EDIT,SEARCH,RATING} from '../Const'

export const addMovie =(payload)=>{
    return{
        type:ADD,
        payload
    }
}

export const deleteMovie =(payload)=>{
    return{
        type:DELETE,
        payload
    }
}

export const editMovie=(payload)=>{
    return{
        type:EDIT,
        payload
    }
}

export const searchMovie=(payload)=>{
    return{
        type:SEARCH,
        payload
    }
}

export const addstar=(payload)=>{
    return{
        type:RATING,
        payload
    }
}