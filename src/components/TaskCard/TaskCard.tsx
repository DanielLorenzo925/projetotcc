import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  TaskCardFormModelSchema,
  TaskCardModel,
  TASKCARD_DEFAULT,
} from "../../Models/TaskCardModel";
import { FormSelect } from "../FormInput";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiCloseCircle, mdiPlusCircle } from "@mdi/js";

interface TaskCardProps {
  id: string;
  onClick: any;
}

export default function TaskCard(props: TaskCardProps) {
  const [bgColor, setBgColor] = useState("white");
  const { control, formState } = useForm<TaskCardModel>({
    defaultValues: TASKCARD_DEFAULT,
    resolver: yupResolver(TaskCardFormModelSchema),
  });
  return (
    <Card
      sx={{
        display: "flex",
        gap: "15px",
        padding: "0 20px",
        backgroundColor: `${bgColor}`,
      }}
    >
      <CardContent sx={{ width: "80%", display: "flex", gap: "15px" }}>
        <TextField sx={{ width: "100%" }} label="Task"></TextField>
        <FormSelect
          style={{ width: "30%" }}
          name="type"
          label=" 💼💪📚"
          control={control}
          placeholder="Prize"
        >
          <MenuItem value={"study"}>📕📚</MenuItem>
          <MenuItem value={"music"}>🎹🎸</MenuItem>
          <MenuItem value={"work"}>💼📊</MenuItem>
          <MenuItem value={"workout"}>💪🏃‍♂️</MenuItem>
        </FormSelect>
      </CardContent>

      <Box sx={{ display: "flex", alignItems: "center", width: "20%" }}>
        {" "}
        <FormSelect
          name="Prize"
          label="  🎁🎉✨"
          control={control}
          placeholder="Prize"
        >
          <MenuItem value={1}>🍔🎂</MenuItem>
          <MenuItem value={2}>🎬🎞</MenuItem>
          <MenuItem value={3}>🎮🕹</MenuItem>
          <MenuItem value={4}>👕👗</MenuItem>
        </FormSelect>
        <Button onClick={props.onClick}>
          <Icon path={mdiPlusCircle} size={1.5} color={"lightblue"} />
        </Button>
      </Box>
    </Card>
  );
}
