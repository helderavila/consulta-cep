import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #16161a;
    -webkit-font-smoothing: antialiased !important; 
  }

  body, input, button {
		color: #222;
		font-size: 14px;
		font-family: 'Montserrat', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;