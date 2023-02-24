import React from 'react';

import "./index.css";

// import Introduction from './components/Introduction';
// import Experience from './components/Experience';
// import Portfolio from './components/Portfolio';

import Container from './ui/Container';
import FlexBoard from './ui/FlexBoard';
import Footer from './ui/Footer';

const App = () => {
  return (
    <>
      <Container>
        <FlexBoard className="items-start justify-center">
          {/* <Introduction /> */}
          {/* <Experience /> */}
          {/* <Portfolio /> */}
        </FlexBoard>
      </Container>
      <Footer />
    </>
  )
}

export default App;
