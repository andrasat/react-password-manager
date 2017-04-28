import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  FETCH_DATA_SUCCESS
} from '../constants'

const addData = (state, payload) => {
  const newId = state[state.length-1].id + 1
  const newData = {...payload, id: newId}
  const newState = [...state, newData]
  return newState
}

const deleteData = (state, id) => {
  const newState = state.filter(each => each.id !== id)
  return newState
}

const editData = (state, payload) => {
  const newState = state.map((each) => {
    if(each.id === payload.id) return {...each, payload}
    return each
  })
  return newState
}

const dataReducer = (state = [], action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS: return action.payload
  case ADD_DATA: return addData(state, action.payload)
  case DELETE_DATA: return deleteData(state, action.payload)
  case EDIT_DATA: return editData(state, action.payload)
  default: return state
  }
}

export default dataReducer