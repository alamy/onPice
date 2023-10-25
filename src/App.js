import './App.css';
import Rotas from './Rotas';
import { createContext , useState } from "react";
export const  UserContext = createContext();
function App() {
 
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <Rotas/>
    </UserContext.Provider>
  );
}

export default App;
