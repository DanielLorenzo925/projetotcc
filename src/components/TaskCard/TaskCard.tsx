import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TaskCardModel } from "../../Models/TaskCardModel";
import { FormSelect } from "../FormInput";

interface TaskCardProps {
  id: string;
}

export default function TaskCard(props: TaskCardProps) {
  const [bgColor, setBgColor] = useState("white");
  const { control, formState } = useForm<TaskCardModel>();
  return (
    <Card
      sx={{
        display: "flex",

        padding: "0 20px",
        backgroundColor: `${bgColor}`,
      }}
    >
      <CardContent sx={{ width: "80%", display: "flex", gap: "15px" }}>
        <TextField sx={{ width: "40%" }} label="Task"></TextField>

        <FormControl sx={{ width: "80px" }}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            label="Color"
            onChange={(e: any) => setBgColor(e.target.value)}
            value={""}
          >
            <MenuItem value={"white"}>📕📚</MenuItem>
            <MenuItem value={"lightcoral"}>🎹🎸</MenuItem>
            <MenuItem value={"lightblue"}>💼📊</MenuItem>
          </Select>
        </FormControl>
      </CardContent>

      <Box sx={{ display: "flex", alignItems: "center", width: "80px" }}>
        {" "}
        <Controller
          name="prize"
          control={control}
          render={(value) => {
            return (
              <FormSelect
                name="prize"
                label="  🎁🎉✨"
                control={control}
                onChange={(e: any) => setBgColor(e.target.value)}
                value={value ?? ""}
              >
                <MenuItem value={"white"}>🍔🎂</MenuItem>
                <MenuItem value={"lightcoral"}>🎬🎞</MenuItem>
                <MenuItem value={"lightblue"}>🎮🕹</MenuItem>
                <MenuItem value={"lightblue"}>👕👗</MenuItem>
              </FormSelect>
            );
          }}
        />
      </Box>
    </Card>
  );
}
