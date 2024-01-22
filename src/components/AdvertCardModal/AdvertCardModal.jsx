import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
  AddToFavoriteBtn,
  CarDescr,
  CarImg,
  CarParamsList,
  ConditionsItem,
  ConditionsList,
  ConditionsListItem,
  DescrSubTitle,
  RentalLink,
  Title,
  Wrapper,
} from './AdvertCardModal.styled';
import { ModelDescr } from 'components/Advert/Advert.styled';

export const AdvertCardModal = ({ advert, isFavorite, toggleFavorite }) => {
  const {
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
    description,
    accessories,
    rentalConditions,
    mileage,
  } = advert;

  return (
    <>
      <CarImg src={img} alt={`${make} ${model}`} width={274} height={268} />

      <Wrapper>
        <Title>
          {make} {model && <ModelDescr>{model}</ModelDescr>}, {year}
        </Title>
        <AddToFavoriteBtn type="button" onClick={toggleFavorite}>
          {isFavorite ? (
            <FaHeart color="var(--primary-color)" />
          ) : (
            <FaRegHeart color="var(--primary-color)" />
          )}
        </AddToFavoriteBtn>
      </Wrapper>

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

      {description && <CarDescr>{description}</CarDescr>}

      <DescrSubTitle>Accessories and functionalities:</DescrSubTitle>
      <CarParamsList>
        {accessories.length &&
          accessories.map(item => <li key={nanoid()}>{item}</li>)}
        {functionalities.length &&
          functionalities.map(item => <li key={nanoid()}>{item}</li>)}
      </CarParamsList>

      <DescrSubTitle>Rental Conditions: </DescrSubTitle>
      <ConditionsList>
        {rentalConditions && (
          <>
            <ConditionsListItem>
              {rentalConditions
                .split('\n')[0]
                .split(' ')
                .splice(0, 2)
                .join(' ')}{' '}
              <ConditionsItem>
                {rentalConditions.split('\n')[0].split(' ').pop()}
              </ConditionsItem>
            </ConditionsListItem>
            <ConditionsListItem>
              {rentalConditions.split('\n')[1]}
            </ConditionsListItem>
            <ConditionsListItem>
              {rentalConditions.split('\n')[2]}
            </ConditionsListItem>
          </>
        )}
        {mileage && (
          <ConditionsListItem>
            Mileage: <ConditionsItem>{mileage / 1000}</ConditionsItem>
          </ConditionsListItem>
        )}
        {rentalPrice && (
          <ConditionsListItem>
            Price: <ConditionsItem>{rentalPrice}</ConditionsItem>
          </ConditionsListItem>
        )}
      </ConditionsList>

      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
    </>
  );
};

AdvertCardModal.propTypes = {
  advert: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
