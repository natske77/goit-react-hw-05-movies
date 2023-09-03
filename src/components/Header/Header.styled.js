import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderCSS = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: black;
`;

const ListNav = styled.ul`
  display: flex;
  gap: 20px;
`;

const ItemNav = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: tomato;
  }
`;

export { HeaderCSS, ListNav, ItemNav };
