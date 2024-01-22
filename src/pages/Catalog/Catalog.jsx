import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleAdverts,
} from '../../redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { LoadMoreBtn } from './Catalog.styled';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const adverts = useSelector(selectVisibleAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(page))
      .unwrap()
      .catch(error => {
        console.log(error.message);
      });
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <main>
      {!error ? (
        <div>
          <Filter />

          {adverts.length > 0 && (
            <>
              <AdvertsList adverts={adverts} />
              {page < 25 / 12 && (
                <LoadMoreBtn type="button" onClick={onLoadMore}>
                  Load more
                </LoadMoreBtn>
              )}
            </>
          )}
          {isLoading && <Loader />}
        </div>
      ) : (
        <Error />
      )}
    </main>
  );
};

export default Catalog;
