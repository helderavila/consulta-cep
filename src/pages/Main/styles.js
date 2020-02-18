import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  max-width: 700px;
  background: #fffffe;
  padding: 60px 120px;
  border-radius: 5px;

  h1 {
    font-size: 32px;
    color: #16161a;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  padding: 11px 21px;
  border: none;
  background: #7f5af0;
  color: #fffffe;
  font-weight: bold;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  input {
    padding: 10px 20px;
    border: 1px solid ${props => (props.error ? 'red' : '#ddd')};
    color: #94a1b2;
    &:focus {
      border: 1px solid #7f5af0;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 10px 15px;
    & + li {
      border-top: 1px solid #eee;
    }

    button {
      background: none;
      border: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;
