import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';

const Container = styled.body`
  background-color: #18122B;
  margin: 0px;
`
ReactDOM.render(
  <Container>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Container>,
  document.getElementById('root')
);
