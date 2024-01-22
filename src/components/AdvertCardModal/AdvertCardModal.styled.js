import styled from 'styled-components';

export const CarImg = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarParamsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;

  margin-bottom: 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  overflow: hidden;

  color: var(--text-sub-color);

  & li {
    position: relative;
  }

  & li:not(:last-child)::after {
    content: '';

    position: absolute;
    top: 0;
    right: -6px;

    display: block;

    width: 1px;
    height: 16px;

    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const CarDescr = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
`;

export const DescrSubTitle = styled.h4`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalLink = styled.a`
  display: block;

  max-width: 168px;
  border-radius: 12px;
  padding: 12px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  color: var(--white-color);
  background-color: var(--primary-color);
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

export const ConditionsListItem = styled.li`
  border-radius: 36px;
  padding: 8px 14px;

  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;

  background-color: rgba(249, 249, 249, 1);
`;

export const ConditionsItem = styled.span`
  color: var(--primary-color);
`;

export const AddToFavoriteBtn = styled.button`
  border: none;

  background-color: transparent;
`;
