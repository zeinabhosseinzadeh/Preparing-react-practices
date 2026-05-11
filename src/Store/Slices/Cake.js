import { createSlice } from "@reduxjs/toolkit";

const initialState={
     numOfCake: -10

}
const cakeSlice=createSlice({
     name:'cake',
     initialState,
     reducers:{
          addCake: (state,action)=>{
               state.numOfCake=state.numOfCake + action.payload
          },
          removeCake:(state,action)=>{
               state.numOfCake=state.numOfCake - +action.payload
          }
     }

    })

     export const {addCake,removeCake} = cakeSlice.action
     export default cakeSlice.reducer;
