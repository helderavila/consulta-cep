import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1000px;
  padding: 25px 20px;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;
