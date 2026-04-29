import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando timer chega ao final eu coloco a data de conclusão
  interruptDate: number | null; //quando o timer é interrompido eu coloco a data de interrupção
  type: keyof TaskStateModel["config"]; //workTime | shortBreakTime | longBreakTime
}