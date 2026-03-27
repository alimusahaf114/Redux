import { createStore } from "redux";
const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}
const counterReducer = (store = INITIAL_VALUE , action)=>{
    
     if(action.type === 'INCREMENT'){
        return  {counter: store.counter + 1 , privacy: store.privacy};
    }else if (action.type === 'DECREMENT'){
        return   {counter: store.counter - 1 , privacy: store.privacy};
    }else if (action.type === "ADD"){
        let val = Number(action.payload.num)
        return   {counter: store.counter + val , privacy: store.privacy};

    }else if (action.type === "SUBS"){
        let val = Number(action.payload.num)
        return   {counter: store.counter - val , privacy: store.privacy};

    }else if(action.type === "PRIVACY"){
        return {counter: store.counter , privacy: !store.privacy}
    }
    console.log(store);
    
    return store
}
const counterStore = createStore(counterReducer)



export default counterStore