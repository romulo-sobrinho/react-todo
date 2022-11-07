import './Modal.css'
import Card from "./Card"


const Modal = (props) => {

  function HideModal(event) {
    const target = event.target
    if(target.id === 'modal') {
      props.onHideModal()
    }
  }

  return (
    <div id="modal" onClick={HideModal} className={props.show ? "modal" : "hideModal"}>
      <Card>
        {props.children}
      </Card>
    </div>
  )
}

export default Modal