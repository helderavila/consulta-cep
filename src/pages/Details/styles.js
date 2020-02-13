import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px auto;
  max-width: 700px;
  background: #fffffe;
  padding: 60px 120px;
  border-radius: 5px;

  h1 {
    font-size: 32px;
    color: #16161a;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  li {
    padding: 10px 15px;
    border: 1px solid #eee;
  }
`;

export const Loading = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #fff;
  margin: 0 auto;
`;
