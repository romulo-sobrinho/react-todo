import Card from "./Card"

function DoneIcon(props) {
    if(props.done) {
      return (
        <i class="bi bi-check-square-fill"></i>
      )
    } else {
      return (
        <i class="bi bi-check-square"></i>
      )
    }
}

function List(props) {

  return (
    <ul>
      {props.items.map(item => <li key={item.id}>
          <Card className={item.done? "done item" : "item"}>
            {item.text}
            <div>
              <button onClick={() => { props.onDone(item)}}><DoneIcon done={item.done} ></DoneIcon></button>
              <button onClick={() => { props.onDeletedItem(item)}} ><i className="bi bi-trash"></i></button>
            </div>
          </Card>
        </li>)}
    </ul>
  )
}

export default List