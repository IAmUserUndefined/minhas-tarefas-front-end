import styled from "styled-components";

export const AddTaskContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AddTaskInput = styled.input`
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  background-color: #444;
  color: #eee;
  font-size: 16px;
  margin-right: .7rem;

  @media (max-width: 576px) {
    width: 140px;
  }
`;
