import Workers from "./comp/Workers";
import Header from "./comp/Header";
import"./App.css";
//Componente aplicacion inicial
function App() {
  return (
    <div className="App">
      <Header/>
      {/*Componente principal que se carga dentro de la app*/}
      <Workers/>
    </div>
  )
}

export default App
