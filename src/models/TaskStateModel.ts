import type { TaskModel } from "./TaskModel";

//Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, MainForm
  secondsRemaining: number; // CountDown, historico, MainForm, DefaultButton
  formattedSecondsRemaining: string; // CountDown, Titulo
  activeTask: TaskModel | null; // MainForm, CountDown, DefaultButton, Historio
  currentCycle: number; // 1 a 8, Home
  config: { //MainForm
    workTime: number; 
    shortBreakTime: number;
    longBreakTime: number;
  };
};