import { createGlobalStyle } from 'styled-components';
import mtgBackground from '../assets/background.jpg';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: url(${mtgBackground});
  background-repeat: no-repeat;
  background-color: black;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

img{
  padding: 4px;
  width: 200px;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.cold-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 50%;
  flex: 0 1 50%;
}

.cold-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 33.34%;
  flex: 0 1 33.34%;
}

.cold-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 16.67%;
  flex: 0 1 16.67%;
}
`;
