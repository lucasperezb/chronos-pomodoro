import { useContext } from "react";
import { TaskContext } from "./TaskContext";

//terceiro passo criar um hook para consumir o contexto
export function useTaskContext() {
  return useContext(TaskContext);
}
