import React, { useState } from 'react';

import { Container, FlexBoard, Footer, Header } from "./ui";
import { Introduction, Experience, Portfolio } from "./components";

import "./index.css";

const Pages = {
  about: <Introduction />,
  experience: <Experience />,
  portfolio: <Portfolio />,
};

const App = () => {

  const [page, setPage] = useState("about");
  return (
    <div class="grid h-screen place-items-center">
      <div class="h-full min-w-[10rem] w-fit max-w-[60rem] border border-orange-300 rounded-xl">
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
      </div>
    </div>
  )
}

export default App;
