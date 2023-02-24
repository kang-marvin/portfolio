import React, { useState } from 'react';

import { Container, FlexBoard, Footer, Header } from "./ui";
import { Introduction, Experience, Portfolio } from "./components";

import "./index.css";

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
