import { Modal } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';


const shrinkBar = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const StyledModal = styled(Modal)`
  .modal-dialog {
    width: 286px;
    height: 120px;
    position: fixed;
    top: 20px;
    right: 20px;
    margin: 0;
    pointer-events: all;
  }

  .modal-content {
    border-radius: 4px;
    height: 100%;
    background-color: #343B41;
    color: #F8F9FA;
    font-family: 'Nunito', sans-serif;
    padding: 8px;
    position: relative;
  }

  .modal-header {
    border: none;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .modal-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-left: 10px;
  }

  .btn-close {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 18px;
    height: 18px;
    font-size: 16px;
    color: #868E96;
    background: none;
    border: none;
    cursor: pointer;
  }

  .modal-body {
    padding: 10px 8px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }

  .icon {
    font-size: 30px;
    font-weight: 900;
    margin-right: 5px;
  }

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    background-color: ${props => (props.$isSuccess ? '#28a745' : '#dc3545')};
    animation: ${shrinkBar} 2s linear forwards;
  }
`;

const ModalCadastro = ({ show, handleClose, title, message, isSuccess }) => {
  return (
    <StyledModal
      show={show}
      onHide={handleClose}
      backdrop={false}
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      $isSuccess={isSuccess}
    >
      <Modal.Header>
        <FontAwesomeIcon
          icon={isSuccess ? faCheckCircle : faExclamationCircle}
          className="icon"
          style={{ color: isSuccess ? '#28a745' : '#dc3545' }}
        />
        <Modal.Title className="modal-title">{title}</Modal.Title>
        <button className="btn-close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <div className="progress-bar" />
    </StyledModal>
  );
};

export default ModalCadastro;
