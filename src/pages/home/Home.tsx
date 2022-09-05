import { Grid } from "@mui/material";
import { useState } from "react";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import TaskCard from "../../components/TaskCard/TaskCard";
import Tasks from "../../features/Tasks";
import { v4 as uuidv4 } from "uuid";

interface TaskData {
  id: string;
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Tasks />
    </>
  );
}
