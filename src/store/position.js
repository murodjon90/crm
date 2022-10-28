import { createSlice } from "@reduxjs/toolkit";

const a = createSlice({
  name: 'position',
  initialState:{
    position:[
      {
        id:1,
        position:'Team Lead',
        salary:'10 000 $'
      }
    ],
  },
  reducers:{
    addPosition:(state, action)=>{
      
    }
  }
})

export default a.reducer