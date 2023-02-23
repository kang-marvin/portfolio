import React from 'react';

import "./index.css";

import Introduction from './components/Introduction';
import Container from './ui/Container';
import FlexBoard from './ui/FlexBoard';

const App = () => {
  return (
    <Container>
      <FlexBoard className="items-start justify-center">
        <Introduction />
      </FlexBoard>
    </Container>
  )
}

export default App;
