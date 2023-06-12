/* eslint-disable @next/next/no-img-element */
import "react-modal-video/css/modal-video.css";
import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = (props) => {

    const product = props.product
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mais Detalhes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{product.nome}</h4>
          <div dangerouslySetInnerHTML={{ __html: product.details }} />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="butn butn-orange-light butn-xsm text-u fw-700 radius-30 "
            onClick={props.onHide}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
export default MyVerticallyCenteredModal;