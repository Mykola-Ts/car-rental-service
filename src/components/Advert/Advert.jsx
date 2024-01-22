import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { selectFavorites } from '../../redux/selectors';
import {
  addAdvertToFavorite,
  deleteAdvertFromFavorite,
} from '../../redux/advertsSlice';
import { AdvertModal } from 'components/AdvertModal/AdvertModal';
import {
  AddToFavoriteBtn,
  CarImg,
  CarParamsList,
  Descr,
  LearnMoreBtn,
  ModelDescr,
  Price,
  Title,
  TitleWrapper,
} from './Advert.styled';

export const Advert = ({ advert = {} }) => {
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(
    favorites.find(({ id }) => id === advert.id) ? true : false
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    id,
    year,
    make,
    model,
    address,
    type,
    img,
    rentalPrice,
    rentalCompany,
    engineSize,
    functionalities,
  } = advert;

  const onToggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addAdvertToFavorite(advert));
      setIsFavorite(true);

      return;
    }

    dispatch(deleteAdvertFromFavorite(id));
    setIsFavorite(false);
  };

  const toggleModal = () => {
    modalIsOpen
      ? (document.body.style.overflow = '')
      : (document.body.style.overflow = 'hidden');

    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <CarImg src={img} alt={`${make} ${model}`} width={274} height={268} />

      <Descr>
        <TitleWrapper>
          <Title>
            {make} {model && <ModelDescr>{model}</ModelDescr>}, {year}
          </Title>
          {rentalPrice && <Price>{rentalPrice}</Price>}
        </TitleWrapper>

        <CarParamsList>
          {address && (
            <>
              <li>{address.split(',')[1]}</li>
              <li>{address.split(',').pop()}</li>
            </>
          )}
          {rentalCompany && <li>{rentalCompany}</li>}
          {type && <li>{type}</li>}
          {model && <li>{model}</li>}
          {engineSize && <li>{engineSize}</li>}
          {functionalities.length && <li>{functionalities[0]}</li>}
        </CarParamsList>
      </Descr>

      <AddToFavoriteBtn type="button" onClick={onToggleFavorite}>
        {isFavorite ? (
          <FaHeart color="var(--primary-color)" />
        ) : (
          <FaRegHeart color="var(--white-color)" />
        )}
      </AddToFavoriteBtn>

      <LearnMoreBtn type="button" onClick={toggleModal}>
        Learn more
      </LearnMoreBtn>

      <AdvertModal
        advert={advert}
        closeModal={toggleModal}
        modalIsOpen={modalIsOpen}
        isFavorite={isFavorite}
        toggleFavorite={onToggleFavorite}
      />
    </>
  );
};

Advert.propTypes = {
  advert: PropTypes.object.isRequired,
};
