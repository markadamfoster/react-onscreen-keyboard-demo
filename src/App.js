import React from "react";
import styled from "styled-components";

import Form from "./FormClassComponent";

function App() {
  return (
    <Wrapper>
      <h1>Demo Form</h1>
      <Form />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    color: white;
  }
`;
