import React,{useRef} from 'react'

function Useref() {
    const inputref = useRef(null)

    const handleclick =() =>{
        inputref.current.focus()
    }
  return (
    <div>
      <input ref={inputref} type='text' placeholder='click the button to focus'></input>
      <button onClick={handleclick}>Focus input</button>
    </div>
  )
}

export default Useref
