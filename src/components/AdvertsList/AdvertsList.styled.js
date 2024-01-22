import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 28px;

  margin-bottom: 40px;
  padding: 16px;
`;

export const ListItem = styled.li`
  position: relative;

  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: calc((100% - 28px * 2) / 3);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 28px * 3) / 4);
  }
`;
