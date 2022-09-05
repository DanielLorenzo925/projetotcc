import * as Yup from "yup";

export interface TaskCardModel {
  id?: string;
  prize: string;
  task: string;
  type: string;
}
