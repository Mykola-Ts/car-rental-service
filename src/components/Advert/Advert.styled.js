import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const AddToFavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;

  background-color: transparent;
`;

export const CarImg = styled.img`
  width: 100%;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: 226px;
  }
`;

export const Descr = styled.div`
  padding: 14px 0 28px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const CarParamsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  width: 100%;
  height: 40px;

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

export const LearnMoreBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 12px;

  color: var(--white-color);
  background-color: var(--primary-color);

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &.active,
  &:is(:hover, :focus) {
    background-color: var(--primary-active-color);
  }
`;

export const ModelDescr = styled.span`
  color: var(--primary-color);
`;
