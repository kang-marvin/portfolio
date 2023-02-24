import React, { useState } from 'react';

import "./index.css";

import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

import Container from './ui/Container';
import FlexBoard from './ui/FlexBoard';
import Footer from './ui/Footer';
import Header from './ui/Header';

const Pages = {
  portfolio: <Portfolio />,
  experience: <Experience />,
  about: <Introduction />,
};

const App = () => {

  const [page, setPage] = useState("about");
  return (
    <>
      <Header
        setPage={setPage}
        pagesTitle={Object.keys(Pages)}
      />
      <Container>
        <FlexBoard className="items-start justify-center">
          {Pages[page]}
        </FlexBoard>
      </Container>
      <Footer />
    </>
  )
}

export default App;
