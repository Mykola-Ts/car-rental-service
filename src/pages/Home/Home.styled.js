import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-bottom: 16px;

  font-size: 36px;
  line-height: 1.43;
`;

export const SubTitle = styled.h2`
  margin-bottom: 16px;

  font-size: 24px;
  line-height: 1.43;
`;

export const List = styled.ul`
  margin-bottom: 16px;

  & li {
    display: flex;
    gap: 8px;

    margin-bottom: 8px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  }
`;

export const Text = styled.p`
  margin-bottom: 16px;
`;

export const RentalLink = styled(Link)`
  display: block;

  max-width: 168px;
  border-radius: 12px;
  padding: 12px;

  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  color: var(--white-color);
  background-color: var(--primary-color);
`;
