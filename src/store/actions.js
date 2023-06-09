import * as types from './actionType'
import axios from 'axios'

export const getTodos = (todos)=>({
    type: types.GET_TODOS,
    payload:todos
})
const todoDeleted = ()=>({
    type:types.DELETE_TODOS,
    
})

const todoUpdated = ()=>({
    type:types.UPDATE_TODOS
    
})
const todoCreated = ()=>({
    type:types.CREATE_TODOS
    
})
const getError = ()=>({
    type:types.GET_ERROR,
    
})
const snackBarClose = ()=>({
    type:types.CLOSE_SNACKBAR,
    
})
export const loadTodos = ()=>{
    return function(dispatch){
    axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos').then((response)=>{
        dispatch(getTodos(response.data))
    }).catch(error=>console.log('error',error))
}

}
export const deleteTodos = (id)=>{
    return function(dispatch){
        axios.delete(`${'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/'}${id}`).then(()=>{
            dispatch(todoDeleted())
        }).catch(()=> dispatch(getError()))
    }
    
}
export const updateTodos = (id)=>{
    return function(dispatch){
        axios.patch(`${'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/'}${id}`).then(()=>{
            dispatch(todoUpdated())
        }).catch(()=> dispatch(getError()))
    }
    
}
export const createTodos = (todo)=>{
    return function(dispatch){
        axios.post(`${'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos'}`).then(()=>{
            dispatch(todoCreated())
        }).catch(()=> dispatch(getError()))
    }
    
}
export const closeSnackBar =()=>{
    return function(dispatch){
        dispatch(snackBarClose())
    }
}