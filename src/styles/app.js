import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  border: 2px solid chartreuse;
  padding: 2rem;
  border-radius: 10px;
  z-index: 0;

  @media (max-width: 576px) {
    max-width: 290px;
  }
`;

export default AppContainer;