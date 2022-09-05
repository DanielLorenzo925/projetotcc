import { mdiPlusCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Grid } from "@mui/material";
import { useState } from "react";

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
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          margin: "0 40px",
        }}
      >
        <Button onClick={addTask}>
          <Icon path={mdiPlusCircleOutline} size={1.5} color={"lightblue"} />
        </Button>
        {task.map((taskCard: TaskData, index) => {
          return <TaskCard id={taskCard.id} key={index} />;
        })}
      </Grid>
    </Grid>
  );
}
