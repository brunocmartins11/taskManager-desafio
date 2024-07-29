import './App.css';
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import ListaToDo from "./components/ListaToDo"
  
function App() {
  return (
    <div className="App">
       <Header/>
       <ToDo/>
       <ListaToDo/>
    </div>
  );
}
  
export default App;