import { mdiPlusCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import * as S from "./Task.styles";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "../components/TaskCard/TaskCard";

interface TaskData {
  id: string;
}

export default function Tasks() {
  const [task, setTask] = useState<TaskData[]>([]);

  const addTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTask: TaskData = {
      id: uuidv4(),
    };
    setTask((oldArray: TaskData[]) => [...oldArray, newTask]);
    console.log(task);
  };

  const removeTask = useCallback((id: string) => {
    setTask((prev) => {
      let newTask = [...prev];
      const foundTaskIndex = newTask.findIndex((p) => p.id === id);
      newTask.splice(foundTaskIndex, 1);
      return newTask;
    });
  }, []);

  return (
    <Grid container>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          margin: "0 40px",
        }}
      >
        <S.ButtonMui onClick={addTask}>
          <Icon path={mdiPlusCircleOutline} size={1.5} color={"lightblue"} />
        </S.ButtonMui>
        {task.map((taskCard: TaskData, index) => {
          return <TaskCard id={taskCard.id} key={index} onClick={removeTask} />;
        })}
      </Grid>
    </Grid>
  );
}
