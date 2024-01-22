import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { AdvertCardModal } from 'components/AdvertCardModal/AdvertCardModal';
import { CloseBtn } from './AdvertModal.styled';

Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    maxHeight: '100%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '542px',
    padding: '40px 36px',
    border: 'none',
    borderRadius: '24px',
    backgroundColor: 'var(--white-color)',
  },
  overlay: {
    backgroundColor: 'var(--overlay-background-color)',
  },
};

export const AdvertModal = ({
  advert,
  closeModal,
  modalIsOpen,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Advert Modal"
    >
      <AdvertCardModal
        advert={advert}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />

      <CloseBtn onClick={closeModal}>
        <AiOutlineClose size={18} />
      </CloseBtn>
    </Modal>
  );
};

AdvertModal.propTypes = {
  advert: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
