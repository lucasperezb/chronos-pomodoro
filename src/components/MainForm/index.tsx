import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {
  const[taskName, setTaskName] = useState('') //estado para armazenar o valor do input
  
  //o event vem do navegador, e tem o tipo React.FormEvent<HTMLFormElement> para indicar que é um evento de formulário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); //evita que a página seja recarregada ao enviar o formulário
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="task"
          placeholder="Digite algo"
          value={taskName} //valor do input
          onChange={(e) => {
            setTaskName(e.target.value); //atualiza o estado com o valor do input
          }} // o onChange é onde eu atualizo o valor do value, eu tenho um evento de mudança, e eu pego o valor do input com e.target.value (o target e o proprio valor em si) e atualizo o estado com setTaskName
        />
      </div>
      <div className="formRow">
        <p>Proximo intervalo e de 25min</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
