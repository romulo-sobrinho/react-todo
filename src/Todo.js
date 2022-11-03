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

  function onDeletedItem(item) {
    let filteredItems = items.filter(element => element.id !== item.id)
    setItems(filteredItems)
  }

  function onDone(item) {
    let updatedItems = items.map(element => {
      if(element.id === item.id) {
        element.done = !element.done
      }
      return element
    })
    setItems(updatedItems)
  }

  return (
    <div className="container">
      <h1>To Do</h1>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List onDone={onDone} onDeletedItem={onDeletedItem} items={items}></List>
    </div>
  )
}

export default Todo