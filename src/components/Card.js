import './Card.css'

function Card(props) {
  return (
    <div className={ props.className ? `${props.className} card` : "card"}>
      {props.children}
    </div>
  )
} 

export default Card