import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { EmptyText } from './Favorites.styled';

const Favorites = () => {
  const adverts = useSelector(selectFavorites);

  return (
    <main>
      <div>
        {adverts.length > 0 ? (
          <AdvertsList adverts={adverts} />
        ) : (
          <EmptyText>Add the adverts to your favorites</EmptyText>
        )}
      </div>
    </main>
  );
};

export default Favorites;
