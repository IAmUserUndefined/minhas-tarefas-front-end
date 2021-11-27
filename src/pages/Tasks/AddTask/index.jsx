import React, { useState } from "react";

import Button from "../../../components/Button/index";
import LoadingGif from "../../../components/LoadingGif/index";

import {
  AddTaskContainer,
  AddTaskInput,
  AddTaskButtonContainer,
} from "./styles";

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

const AddTask = () => {
  const { handleShowModal } = useModal();
  const [inputData, setInputData] = useState("");
  const [buttonChildren, setButtonChildren] = useState("Adicionar");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleTaskAddition = async (taskName) => {
    setButtonChildren(<LoadingGif />);

    if (!taskName) {
      setButtonChildren("Adicionar");
      return handleShowModal("Preencha o nome da tarefa");
    }

    await api
      .post("/task", {
        taskName: taskName,
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    setButtonChildren("Adicionar");
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <>
      <AddTaskContainer>
        <AddTaskInput
          onChange={handleInputChange}
          value={inputData}
          type="text"
          placeholder="Nome da Tarefa"
        />

        <AddTaskButtonContainer>
          <Button onClick={handleAddTaskClick}>{buttonChildren}</Button>
        </AddTaskButtonContainer>
      </AddTaskContainer>
    </>
  );
};

export default AddTask;
