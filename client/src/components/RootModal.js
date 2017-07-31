// These are regular React components we will write soon
import LoginModal from './loginModal'

const MODAL_COMPONENTS = {
  'LOGIN_LIST': LoginModal,
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)