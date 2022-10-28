import { createSlice } from "@reduxjs/toolkit";

const a = createSlice({
  name: 'academic',
  initialState:{
    academic:[
      {
        id:1,
        position: 'Team Lead',
        bonus:'10'
      }
    ],
    openForm: false,
    mehtod:"",
    editAcademic:""
  },
  reducers:{
    addAcademic: (state, action)=>{
      state.academic = [...state.academic,action.payload]
      state.openForm = false
    },
    controlForm:(state, action)=>{
      state.openForm = !action.payload
      state.mehtod = "ADD"
    },
    editAcad:(state, action)=>{
      state.editAcademic = action.payload
      state.mehtod = "Update"
      state.openForm = true
    },
    updateAcad:(state, action)=>{
      state.academic = action.payload
      state.openForm = false
    }
  }
})

export const {addAcademic,controlForm,editAcad,updateAcad} = a.actions
export default a.reducer