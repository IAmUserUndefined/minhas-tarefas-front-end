import styled from "styled-components";

export const ContainerHeaderLogin = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContainerHeaderTitle = styled.div`
  font-size: 1.3rem;

  > h1 {
    color: #eee;
    text-align: center;
    width: 200px;

    @media (max-width: 576px) {
      width: 140px;
      font-size: 2.3rem;
    }
  }
`;

export const ContainerHeaderLoginButton = styled.div`

  > div button {
    margin-bottom: 1rem;
    min-width: 7rem;
  }
`;