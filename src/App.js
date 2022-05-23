import React from 'react';
import { AppDiv } from './style'
import Body from './components/Body';
import Header from './components/Header';
function App() {
  return (
    <AppDiv className="App">
      <Header />
      <Body />
    </AppDiv>
  );
}

export default App;
