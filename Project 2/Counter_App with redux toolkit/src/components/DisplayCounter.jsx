import { useSelector } from "react-redux"

const DisplayCounter = () => {
const {counterVal} =   useSelector(store => store.counter)
  return (
    <div>
      <p className="lead mb-4">
          {`My current State is ${counterVal}`}
        </p>
    </div>
  )
}

export default DisplayCounter
