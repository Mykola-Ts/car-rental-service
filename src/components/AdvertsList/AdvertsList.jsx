import PropTypes from 'prop-types';
import { Advert } from 'components/Advert/Advert';
import { List, ListItem } from './AdvertsList.styled';

export const AdvertsList = ({ adverts = [] }) => {
  return (
    adverts.length && (
      <List>
        {adverts.map(advert => (
          <ListItem key={advert.id}>
            <Advert advert={advert} />
          </ListItem>
        ))}
      </List>
    )
  );
};

AdvertsList.propTypes = {
  adverts: PropTypes.array.isRequired,
};
