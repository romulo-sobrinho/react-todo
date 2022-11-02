import './Todo.css'
import { useState } from 'react'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './class/Item'

function Todo() {
  const [items, setItems] = useState([])

  function onAddItem(text) {
    const item = new Item(text)
    setItems([...items, item])
  }

  return (
    <div className="container">
      <h1>To Do</h1>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List items={items}></List>
    </div>
  )
}

export default Todo