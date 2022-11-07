import Card from "./Card"

function DoneIcon(props) {
    if(props.done) {
      return (
        <i className="bi bi-check-square-fill"></i>
      )
    } else {
      return (
        <i className="bi bi-check-square"></i>
      )
    }
}

function ListItem(props) {

  return (
    <li>
      <Card className={props.item.done? "done item" : "item"}>
        {props.item.text}
        <div>
          <button onClick={() => { props.onDone(props.item)}}><DoneIcon done={props.item.done} ></DoneIcon></button>
          <button onClick={() => { props.onDeletedItem(props.item)}} ><i className="bi bi-trash"></i></button>
        </div>
      </Card>
    </li>)
}

export default ListItem