import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';


export function App() {
  console.log("App component rendered");
  return (
    // react fragment usado pra quando nao queremos adicionar uma div para os elementos
    <> 
      <Heading />
      <p>Meu nome é Lucas</p>
    </>
  );
}
