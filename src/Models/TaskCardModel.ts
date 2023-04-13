import * as Yup from "yup";

export interface TaskCardModel {
  id?: string;
  prize: string;
  task: string;
  type: string;
}

export type TaskCardFormModel = Partial<TaskCardModel>;

export const TASKCARD_DEFAULT: TaskCardFormModel = {
  prize: "",
  task: "",
  type: "",
};

export const TaskCardFormModelSchema: Yup.SchemaOf<TaskCardFormModel> =
  Yup.object().shape({
    id: Yup.string().notRequired(),
    prize: Yup.string().required("Campo obrigatório"),
    task: Yup.string().required("Campo obrigatório"),
    type: Yup.string().required("Campo obrigatório"),
  });
