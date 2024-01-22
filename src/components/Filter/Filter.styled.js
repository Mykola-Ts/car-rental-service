import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrapper = styled.div`
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  @media screen and (max-width: 1440px) {
    flex-wrap: wrap;
  }
`;

export const LabelInput = styled.label`
  position: relative;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  color: rgba(138, 138, 137, 1);

  &:nth-child(1) input {
    width: 224px;
  }

  &:nth-child(2) input {
    width: 124px;
  }

  &:nth-child(3) input {
    width: 160px;

    &:nth-child(1) {
      border-right: 1px solid rgba(138, 138, 137, 0.2);
      border-radius: 14px 0 0 14px;
    }

    &:nth-child(2) {
      border-left: 1px solid rgba(138, 138, 137, 0.2);
      border-radius: 0 14px 14px 0;
    }
  }
`;

export const StyledInput = styled(Field)`
  display: block;
  border: none;
  border-radius: 14px;
  padding: 14px 18px;
  margin-top: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  background-color: rgba(247, 247, 251, 1);

  &:focus {
    outline: var(--primary-color);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const SearchButton = styled.button`
  min-width: 136px;
  border: none;
  border-radius: 12px;
  padding: 14px;

  color: var(--white-color);
  background-color: var(--primary-color);

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &.active,
  &:is(:hover, :focus) {
    background-color: var(--primary-active-color);
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -28px;
  left: 0;

  padding: 4px;

  white-space: nowrap;

  color: red;
`;
