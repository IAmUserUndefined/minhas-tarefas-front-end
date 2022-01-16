import React, { useState, useEffect } from "react";

import HeaderLogin from "../../components/HeaderLogin/index";
import AddTask from "./AddTask/index";
import Task from "./Task/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { handleShowModal } = useModal();

  useEffect(() => {
    let mounted = true;

    const fetchTasks = async () => {
      await api
        .get("/task")
        .then(({ data }) => (mounted ? setTasks(data.response) : null))
        .catch(({ response }) =>
          mounted && response === undefined  ? handleShowModal("Erro no servidor, as tarefas não pode ser apresentadas") : null
        );
    };

    fetchTasks();

    return () => mounted = false;
  }, [tasks]);

  return (
    <>
      <HeaderLogin link="/config-user" children="Configurações" />
      <main>
        <AddTask />
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </main>
    </>
  );
};

export default Tasks;