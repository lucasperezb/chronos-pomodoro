import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue: TaskContextProps = {
  state: initialTaskState,
  setState: () => {},
};

//primeiro passo criar um contexto
//segundo passo deve ter um valor inicial
//esse valor inicial só será usado caso o componente que consome o contexto não esteja dentro do provider
export const TaskContext = createContext<TaskContextProps>(initialContextValue);