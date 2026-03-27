import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers:{
        increment:(state)=>{
            state.counterVal++            
        },
        decrement:(state)=>{
            state.counterVal--            
        },
        add:(state, action)=>{
            const val = Number(action.payload.num )   
            state.counterVal += val;        
        },
        subs:(state, action)=>{
            const val = Number(action.payload.num )   
            state.counterVal -= val;
            
        },
        
    }
})

export const counterActions = counterSlice.actions
export default counterSlice