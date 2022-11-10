import "./TodoForm.css"
import { useState } from 'react'

function TodoForm(props) {
  const [text, setText] = useState("")

  function handleChange(event) {
    const entry = event.target.value
    setText(entry)
  }

  function addItem(event) {
    event.preventDefault()
    if(text) {
      props.onAddItem(text)
      setText("")
    }
  }

  return (
    <form>
      <input onChange={handleChange} value={text} type="text"></input>
      <button onClick={addItem} >Add</button>
    </form>
  )
}

export default TodoForm