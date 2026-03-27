import { useRef } from "react"
import { useDispatch } from "react-redux"

const controls = () => {
  const dispatch = useDispatch()
  const inputElement = useRef()
  const handleIncrement = ()=>{
    dispatch({type: "INCREMENT"})
  }
  const handleDecrement = ()=>{
    dispatch({type: "DECREMENT"})    
  }
  const handleAdd = ()=>{
    dispatch({type: "ADD" , payload:{
      num: inputElement.current.value
    }})    
    inputElement.current.value = "" 
  }
  const handleSubs = ()=>{
    dispatch({type: "SUBS" , payload:{
      num: inputElement.current.value
    }})    
    inputElement.current.value = "" 
  }
  const handlePrivacy=()=>{
    dispatch({type: "PRIVACY"})
  }
  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button"  className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}>
            +1
          </button>
          <button
            type="button" 
            className="btn btn-secondary btn-lg px-4"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            type="button" 
            className="btn btn-warning btn-lg px-4"
            onClick={handlePrivacy}
          >
            Privacy-Toggle
          </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls">
          <input type="text" ref={inputElement} className="input-box" placeholder="Enter number"/>
          <button
            type="button" 
            className="btn btn-info btn-lg px-4"
            onClick={handleAdd}
            >
            Add
          </button>
          <button
            type="button" 
            className="btn btn-danger btn-lg px-4"
            onClick={handleSubs}
          >
            Substract
          </button>
    </div>

    </>
  )
}

export default controls
