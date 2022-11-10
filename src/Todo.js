import './Todo.css'
import { useEffect, useState } from 'react'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './class/Item'
import Modal from './components/Modal'

const SAVED_ITEMS = "savedItems"

function Todo() {

  const [items, setItems] = useState([])

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems) {
      setItems(savedItems)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  },[items])

  function onAddItem(text) {
    const item = new Item(text)
    setItems([...items, item])
    setShowModal(false)
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

  function onHideModal(event) {
    setShowModal(false)
  }

  return (
    <div className="container">
      
      <header className="header">
        <h1>Lista de Tarefas - REACT</h1>
        <button onClick={() => {setShowModal(true)}} className="addButton"><i className="bi bi-plus-lg"></i></button>
      </header>
      <List onDone={onDone} onDeletedItem={onDeletedItem} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>  
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  )
}

export default Todo