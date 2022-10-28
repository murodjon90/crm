import { createSlice } from "@reduxjs/toolkit";

const a = createSlice({
  name: 'worker',
  initialState:{
    workers:[
      {
        id:1,
        name:'Murod',
        last_name:'Atamirzaev',
        phone:'+998975923990',
        position:'team lead',
        degree:'Senior'
      }
    ],
    openForm: false,
    mehtod:"",
    editWork:""
  },
  reducers:{
    addWorker:(state, action)=>{
      state.workers = [...state.workers, action.payload]
      state.openForm = false
    },
    controlForm:(state, action)=>{
      state.openForm = !action.payload
      state.mehtod = 'ADD'
    },
    editWorker:(state, action)=>{
      state.editWork = action.payload
      state.mehtod = 'Update'
      state.openForm = true
    },
    updateData:(state, action)=>{
      
    }
  }
})

export const {addWorker,controlForm,editWorker,updateData} = a.actions
export default a.reducer