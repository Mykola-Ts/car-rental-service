import styled from 'styled-components';

export const NavHeader = styled.header`
  width: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 0 0 8px 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 128px;
  }
`;
