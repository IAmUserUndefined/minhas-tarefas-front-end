import React from "react";
import { CgClose } from "react-icons/cg";

import { TaskContainer, ButtonContainer, RemoveTaskButton } from "./styles";

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

const Task = ({ task }) => {
  const { handleShowModal } = useModal();

  const handleTaskFinish = async (taskId) => {
    await api
      .patch(`/task/${taskId}`)
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );
  };

  const handleTaskDeletion = async (taskId) => {
    await api
      .delete(`/task/${taskId}`)
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );
  };

  return (
    <TaskContainer style={task.status ? { borderLeft: "6px solid chartreuse" } : {}}>
      <h3 onClick={() => handleTaskFinish(task.id)}>{task.taskName}</h3>

      <ButtonContainer className="buttons-container">
        <RemoveTaskButton onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </RemoveTaskButton>
      </ButtonContainer>
    </TaskContainer>
  );
};

export default Task;
