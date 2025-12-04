import './styles/theme.css';
import './styles/global.css';


export function App() {
  console.log("App component rendered");
  return (
    // react fragment usado pra quando nao queremos adicionar uma div para os elementos
    <> 
      <h1>Ola mundo</h1>
      <p>Meu nome é Lucas</p>
    </>
  );
}
