import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    //o valor que importa é o value do provider
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
