import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { filterSchema } from '../../helpers/helpers';
import { filterAdverts } from '../../redux/filterSlice';
import {
  ErrorText,
  InputWrapper,
  LabelInput,
  SearchButton,
  StyledForm,
  StyledInput,
  Wrapper,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onSearch = values => {
    dispatch(filterAdverts(values));
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          brand: '',
          price: '',
          mileageFrom: '',
          mileageTo: '',
        }}
        onSubmit={onSearch}
        validationSchema={filterSchema}
      >
        <StyledForm>
          <LabelInput>
            Car brand
            <StyledInput
              type="text"
              name="brand"
              placeholder="Enter the text"
            />
            <ErrorMessage name="brand" component={ErrorText} />
          </LabelInput>

          <LabelInput>
            Price/ 1 hour
            <StyledInput type="number" name="price" placeholder="To $" />
            <ErrorMessage name="price" component={ErrorText} />
          </LabelInput>

          <LabelInput>
            Сar mileage / km
            <InputWrapper>
              <StyledInput
                type="number"
                name="mileageFrom"
                placeholder="From"
              />
              <StyledInput type="number" name="mileageTo" placeholder="To" />
            </InputWrapper>
            <ErrorMessage name="mileageFrom" component={ErrorText} />
            <ErrorMessage name="mileageTo" component={ErrorText} />
          </LabelInput>

          <SearchButton type="submit">Search</SearchButton>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
