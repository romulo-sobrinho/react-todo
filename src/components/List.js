import ListItem from "./ListItem"

function List(props) {

  return (
    <ul>
      {props.items.map(item => <ListItem key={item.id} onDeletedItem={props.onDeletedItem} onDone={props.onDone} item={item}></ListItem>)}
    </ul>
  )
}

export default List